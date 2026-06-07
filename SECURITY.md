# Security Policy

## Supported version

Only the latest version in `main` is supported. Current stable userscript: **v1.9.7**.

## Reporting

Open a GitHub issue with:

- browser name and version;
- Tampermonkey version;
- script version;
- steps to reproduce;
- exported diagnostics JSON, if relevant.

Do **not** include private conversations, cookies, tokens, account-sensitive data, or screenshots with secrets.

## Security model

This is a userscript running on `https://chatgpt.com/*`. It can read and modify the page DOM while active. Review the code before installing.

The script is designed not to send message text anywhere. Diagnostics are local and must be exported manually.
