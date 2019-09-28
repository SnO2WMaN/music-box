<p align="center">
  <img src="https://raw.githubusercontent.com/SnO2WMaN/music-box/master/preview.png">
  <h2 align="center">music-box</h2>
  <p align="center">Pinned gist : Weekly plays on Last.fm</p>
</p>

<div align="center">
<p>

[![LICENSE](https://img.shields.io/github/license/conten2/eslint-config?style=flat-square)](https://github.com/SnO2WMaN/music-box/blob/master/LICENSE)
[![Renovate](https://img.shields.io/badge/renovate-enabled-25c4c3.svg?style=flat-square)](https://renovatebot.com/)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<br/>
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</p>
</div>

---

## Inspired ✨

[jacc/mucix-box](https://github.com/jacc/music-box)

## Usage 🖥

### Prepare 🎒

1. Create a new public GitHub Gist (https://gist.github.com/)
2. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
3. Create a Last.fm Application (https://www.last.fm/api/account/create), and copy the `API token`.

### Setup 🛠

1. Folk this repository
2. Log into CircleCI with your GitHub (https://circleci.com/vcs-authorize/)
3. Click on "Add Projects" on the sidebar
4. Set up a project with the newly created fork
5. Go to Project Settings > Environment Variables
6. Add the following environment variables:

- **GIST_ID** The ID portion from your gist url `https://gist.github.com/<github username>/`**`57897a59c679fc8d5817a566f4b3b326`**.
- **GH_TOKEN** The Github token generated above.
- **LAST_FM_API_KEY** The Last.fm API Key copied above.
- **LAST_FM_USER** Your Last.fm username.

That's it.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://sno2wman.dev/"><img src="https://avatars3.githubusercontent.com/u/15155608?v=4" width="80px;" alt="SnO₂WMaN"/><br /><sub><b>SnO₂WMaN</b></sub></a><br /><a href="https://github.com/SnO2WMaN/musicbox/commits?author=SnO2WMaN" title="Code">💻</a> <a href="#maintenance-SnO2WMaN" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://renovatebot.com"><img src="https://avatars0.githubusercontent.com/u/25180681?v=4" width="80px;" alt="Renovate Bot"/><br /><sub><b>Renovate Bot</b></sub></a><br /><a href="#infra-renovate-bot" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Donations 💵

If you make a donation, I will add to the [Contributors](#contributors-).

### ko-fi

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P514HW9)

### Patreon

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=15331123)

## License

[MIT License](https://github.com/SnO2WMaN/music-box/blob/master/LICENSE)
