# GoPoTa_OptimizeYB

**GoPoTa_OptimizeYB** is a Tampermonkey userscript by **megiddo / GoPoTa** for reducing lag in very long ChatGPT conversations. It is a workaround, may not work fully stable, and should be used only at your own discretion.

The stable release line is **v1.9.7**. It uses a stale-safe archive-block approach: older loaded messages are replaced with lightweight archive blocks, while the latest messages remain active.

> Status: stable Tampermonkey build. Future development is planned as a full browser extension with a dedicated reader mode.

## Install

Open the raw userscript file:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

Tampermonkey should detect the script and offer installation.

Repository:

```text
https://github.com/ImegiddoI/GoPoTa-OptimizeYB
```

## Usage

1. Install the script in Tampermonkey.
2. Open a long ChatGPT conversation.
3. Open the GoPoTa dock.
4. Set `Keep Open` to the number of latest messages to keep active.
5. Press **Optimize**.
6. Use **Burn your PC** to disable optimization and restore archived messages.

`Burn your PC` is only a joke label. It restores the current page state; it does not do anything destructive.

## What v1.9.7 does

- Keeps the latest `Keep Open` messages active.
- Archives older loaded messages into lightweight blocks.
- Allows archive blocks to be restored when their original slot is still present.
- Blocks unsafe restore attempts when ChatGPT has already removed the slot.
- Uses stale-safe checks to avoid inserting messages into the wrong place.
- Provides local diagnostics export.
- Uses a Shadow DOM GoPoTa UI with draggable magnetic docking.

## Privacy

The script is designed not to store or send message text.

Diagnostics contain counters, timings, route type, config, and performance metrics only. They do not intentionally include prompts, responses, cookies, tokens, or full URLs.

The UI may load Roboto from Google Fonts.

See [`docs/PRIVACY.md`](docs/PRIVACY.md).

## Diagnostics API

```js
GoPoTa_OptimizeYB.diagnostics()
GoPoTa_OptimizeYB.exportDiagnostics()
GoPoTa_OptimizeYB.optimizeNow()
GoPoTa_OptimizeYB.restoreAll()
GoPoTa_OptimizeYB.disable()
GoPoTa_OptimizeYB.reset()
```

## Development

Syntax check:

```bash
npm run check
```

No build step is required. The userscript is plain JavaScript.

## License

MIT. See [`LICENSE`](LICENSE).

The GoPoTa visual assets are included for this project. Publish them only if you have the rights to use them publicly.
