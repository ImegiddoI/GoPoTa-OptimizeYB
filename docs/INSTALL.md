# Install

## Direct install

Open:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

Tampermonkey should detect the userscript and offer installation.

## Manual install

1. Install Tampermonkey.
2. In Chromium/Yandex Browser, enable user scripts for Tampermonkey.
3. Open Tampermonkey Dashboard.
4. Create a new script.
5. Delete the template.
6. Paste the contents of `gopota-optimize-yb.user.js`.
7. Save.
8. Keep only one active version of GoPoTa_OptimizeYB.

## Yandex Browser

Open:

```text
browser://extensions
```

Then open Tampermonkey details and enable:

```text
Разрешить пользовательские скрипты
```

If the switch is missing, enable Developer Mode on the extensions page.

## Updating

The script contains `@downloadURL` and `@updateURL`, so Tampermonkey can update it from GitHub Raw:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

Disable older duplicate versions before enabling a new one.
