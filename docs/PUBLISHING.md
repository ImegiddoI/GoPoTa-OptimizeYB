# Publishing

Repository:

```text
https://github.com/ImegiddoI/GoPoTa-OptimizeYB
```

Userscript raw URL:

```text
https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

## First push

From the repository folder:

```bash
git status
git add .
git commit -m "Initial public release"
git push -u origin main
```

## Future updates

Replace `gopota-optimize-yb.user.js`, update docs if needed, then:

```bash
git status
git add .
git commit -m "Update userscript"
git push
```

## Tampermonkey auto-update

The userscript header already includes:

```js
// @homepageURL   https://github.com/ImegiddoI/GoPoTa-OptimizeYB
// @supportURL    https://github.com/ImegiddoI/GoPoTa-OptimizeYB/issues
// @downloadURL   https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
// @updateURL     https://raw.githubusercontent.com/ImegiddoI/GoPoTa-OptimizeYB/main/gopota-optimize-yb.user.js
```

After pushing to `main`, Tampermonkey can check this raw URL for updates.

## GitHub release

Recommended tag format:

```bash
git tag v1.9.5
git push origin v1.9.5
```

Attach `gopota-optimize-yb.user.js` to the GitHub release if desired.
