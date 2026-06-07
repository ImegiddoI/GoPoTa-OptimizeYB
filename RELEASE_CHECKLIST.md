# Release Checklist

1. Update userscript metadata:

```js
// @version      1.9.7
var VERSION = '1.9.7';
```

2. Update `CHANGELOG.md`.

3. Run:

```bash
npm run check
```

4. Manual smoke test:

- install in Tampermonkey;
- open `chatgpt.com`;
- verify compact dock;
- expand/collapse;
- drag and magnetic docking;
- press `Optimize`;
- scroll long chat upward;
- verify older messages become archive blocks;
- test archive block click;
- press `Burn your PC`;
- export diagnostics.

5. Push:

```bash
git add .
git commit -m "Release 1.9.7 stable userscript"
git push
```

6. Optional tag:

```bash
git tag v1.9.7
git push origin v1.9.7
```
