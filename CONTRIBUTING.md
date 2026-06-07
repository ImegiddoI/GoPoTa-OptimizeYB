# Contributing

Thanks for improving GoPoTa_OptimizeYB.

## Rules

- Keep the userscript as a single installable `.user.js` file.
- Do not add telemetry.
- Do not log message text.
- Do not store cookies, tokens, prompts, responses, or full URLs.
- Keep diagnostics privacy-safe.
- Run syntax check before opening a pull request:

```bash
npm run check
```

## Test cases

- Very long conversation, scroll from bottom to top.
- Fast upward scrolling while old messages are loading.
- Press `Optimize`.
- Click archive blocks.
- Press `Burn your PC`.
- Change `Keep Open`.
- Drag dock between left and right sides.
- Export diagnostics.
