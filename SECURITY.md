# Security Policy

## Supported version

Only the latest version in `main` is supported.

## Reporting

Open a GitHub issue and include:

- browser name and version;
- Tampermonkey version;
- GoPoTa_OptimizeYB version;
- steps to reproduce;
- exported diagnostics JSON, if relevant.

Do not include private conversations, cookies, tokens, private screenshots, or account-sensitive data.

## Security model

GoPoTa_OptimizeYB is a userscript that runs on `https://chatgpt.com/*`. While active, it can read and modify the ChatGPT page DOM.

Review the code before installing. The script is designed not to send conversation text anywhere. Diagnostics are local and must be exported manually.
