# Publishing

## Create repository

```bash
git init
git add .
git commit -m "Initial public release"
git branch -M main
git remote add origin git@github.com:<OWNER>/<REPO>.git
git push -u origin main
```

## Optional Tampermonkey update URLs

After the repository URL is final, add these lines to the userscript header:

```js
// @downloadURL  https://raw.githubusercontent.com/<OWNER>/<REPO>/main/gopota-optimize-yb.user.js
// @updateURL    https://raw.githubusercontent.com/<OWNER>/<REPO>/main/gopota-optimize-yb.user.js
```

Then commit and push.

## GitHub release

```bash
git tag v1.9.5
git push origin v1.9.5
```
