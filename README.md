# GoPoTa_OptimizeYB

**GoPoTa_OptimizeYB** is a Tampermonkey userscript for reducing lag in long ChatGPT conversations.

The script keeps only the latest configurable number of ChatGPT messages active and turns older loaded messages into lightweight archive blocks. It uses a **pre-hide strict tail-lock** mode so older messages that are loaded while scrolling are hidden first and archived as quickly as possible.

**Author & developer:** `megiddo` / `ImegiddoI` / `GoPoTa`  
**Current version:** `1.9.5`  
**Target site:** `https://chatgpt.com/*`

> This is the first public release of the project. The internal script version is `1.9.5`.

## Features

- Strict tail-lock: keep only the latest `Keep Open` messages active.
- Pre-hide mode for older loaded messages.
- Archive placeholders instead of heavy old message DOM.
- `Optimize` action for enabling strict optimization.
- `Burn your PC` action for disabling optimization and restoring archived messages.
- Local diagnostics export.
- Privacy-safe diagnostics: no message text, prompts, responses, cookies, tokens, or full URLs.
- Shadow DOM interface.
- Draggable UI with magnetic left/right docking.
- GoPoTa-themed compact dock and control panel.

## Install

### Direct install link

Open this raw file in your browser:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

Tampermonkey should detect the script and offer installation.

Repository:

```text
https://github.com/ImegiddoI/GoPoTa-OptimizeYB
```


### GitHub Raw install

After publishing this repository, open:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

Tampermonkey should detect the userscript and offer installation.

### Manual install

1. Install Tampermonkey.
2. Enable user scripts for Tampermonkey in your browser extension settings.
3. Open Tampermonkey Dashboard.
4. Create a new script.
5. Delete the default template.
6. Paste the content of `gopota-optimize-yb.user.js`.
7. Save.
8. Keep only one active version of GoPoTa_OptimizeYB.

## Usage

1. Open a long ChatGPT conversation.
2. Open the GoPoTa dock.
3. Choose `Keep Open`.
4. Press **Optimize**.
5. Scroll the conversation.

Use **Burn your PC** to disable optimization and restore archived messages.

The button name is a joke. It does not do anything destructive.

## Privacy

The script does not intentionally store or send conversation text.

Diagnostics include only counters, timings, route type, config, and performance metrics. The UI imports Roboto from Google Fonts, so the browser may request a font from Google.

See [`docs/PRIVACY.md`](docs/PRIVACY.md).

## Auto-update

Tampermonkey can update the script from GitHub Raw because the userscript header contains:

```js
// @downloadURL  https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
// @updateURL    https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

## Development

No build step is required.

Syntax check:

```bash
npm run check
```

## Repository layout

```text
.
├── gopota-optimize-yb.user.js
├── README.md
├── CHANGELOG.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── RELEASE_CHECKLIST.md
├── package.json
├── docs/
├── assets/
└── scripts/
```

## License

MIT. See [`LICENSE`](LICENSE).

The GoPoTa visual assets are included for this project. Publish them only if you have the rights to use them publicly.
