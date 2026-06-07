# Publishing

Repository:

```text
https://github.com/ImegiddoI/GoPoTa-OptimizeYB
```

Userscript raw URL:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

## Push stable release

From the repository folder:

```powershell
git status
git add .
git commit -m "Release 1.9.7 stable userscript"
git push
```

## Tampermonkey auto-update

The userscript header includes:

```js
// @homepageURL  https://github.com/ImegiddoI/GoPoTa-OptimizeYB
// @supportURL   https://github.com/ImegiddoI/GoPoTa-OptimizeYB/issues
// @downloadURL  https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
// @updateURL    https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

After pushing to `main`, Tampermonkey can check this raw URL for updates.

## Optional GitHub release

```bash
git tag v1.9.7
git push origin v1.9.7
```

Attach `gopota-optimize-yb.user.js` to the GitHub release if desired.
