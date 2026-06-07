# Privacy

GoPoTa_OptimizeYB is intended to run locally in the browser.

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

The script may store these values in `localStorage`:

- UI position;
- UI expanded/collapsed state;
- `Keep Open` value;
- local diagnostic counters;
- timing metrics;
- route type such as `conversation`.

## External requests

The UI imports Roboto from Google Fonts. That can create a browser request to Google Fonts.

The script itself does not send diagnostics or message content to external servers.

## Manual export

Diagnostics are exported only when the user clicks `Export log` or calls:

```js
GoPoTa_OptimizeYB.exportDiagnostics()
```
