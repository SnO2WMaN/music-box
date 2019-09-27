require('dotenv').config()
const axios = require('axios')

const {
  LAST_FM_API_KEY: lastfmApiKey,
  LAST_FM_USER: lastfmUser,
  GIST_ID: gistId,
  GH_TOKEN: githubToken
} = process.env

const Octokit = require('@octokit/rest')

const octokit = new Octokit({ auth: `token ${githubToken}` })

/**
 *
 * @param {Date} date
 */
function parseDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, 0)
  const day = String(date.getDate()).padStart(2, 0)
  return `${year}.${month}.${day}`
}

function generateBarChart(percent, size) {
  const full = '█'
  const semifull = ['█', '▏', '▎', '▍', '▌', '▋', '▊', '▉']
  const empty = '░'

  const frac = size * 8 * percent
  const barsFull = Math.ceil(frac / 8)
  const semi = Math.ceil(frac % 8)

  const barsEmpty = size - barsFull

  return [
    full.repeat(barsFull - 1),
    semifull[semi],
    empty.repeat(barsEmpty)
  ].join('')
}

async function updateGist(data) {
  let gist
  try {
    gist = await octokit.gists.get({ gist_id: gistId })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Unable to get gist\n${error}`)
  }

  const lines = []

  const { artist } = data.topartists
  if (artist.length < 0) return
  const topPlayCount = Number(artist[0].playcount)
  for (let i = 0; i < Math.min(artist.length, 5); i += 1) {
    const { name, playcount } = artist[i]
    lines.push(
      [
        generateBarChart(playcount / topPlayCount, 15),
        `${String(playcount).padStart(
          String(topPlayCount).length + 1,
          ' '
        )} plays`,
        '∣',
        name
      ].join(' ')
    )
  }

  const today = new Date()
  const to = parseDate(today)
  today.setDate(today.getDate() - 7)
  const from = parseDate(today)

  try {
    // Get original filename to update that same file
    const filename = Object.keys(gist.data.files)[0]
    await octokit.gists.update({
      gist_id: gistId,
      description: `🎧 Listening (${from} ~ ${to})`,
      files: {
        [filename]: {
          filename: `🎧 Recent listening music`,
          content: lines.join('\n')
        }
      }
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Unable to update gist\n${error}`)
  }
}

;(async () => {
  const { data } = await axios.get('http://ws.audioscrobbler.com/2.0/', {
    params: {
      method: 'user.gettopartists',
      user: lastfmUser,
      period: '7day',
      api_key: lastfmApiKey,
      format: 'json'
    }
  })
  await updateGist(data)
})()
