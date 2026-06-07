# Privacy

GoPoTa_OptimizeYB runs locally in the browser.

## Not stored

Diagnostics do not intentionally store:

- message text;
- prompt text;
- response text;
- cookies;
- tokens;
- full conversation URLs;
- account identifiers.

## Stored locally

The script may store these in `localStorage`:

- UI position;
- UI expanded/collapsed state;
- `Keep Open` value;
- local diagnostic counters;
- timing metrics;
- route type such as `conversation`, not the full URL.

## External requests

The UI may import Roboto from Google Fonts. That can create a browser request to Google Fonts.

The script itself does not send diagnostics or message content to external servers.

## Manual export

Diagnostics are exported only when the user clicks `Export log` or calls:

```js
GoPoTa_OptimizeYB.exportDiagnostics()
```
