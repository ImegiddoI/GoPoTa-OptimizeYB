# Release Checklist

1. Update userscript metadata:

```js
// @version      X.Y.Z
var VERSION = 'X.Y.Z';
```

2. Update `package.json`.

3. Update `CHANGELOG.md`.

4. Run:

```bash
npm run check
```

5. Manual smoke test:

- install in Tampermonkey;
- open `chatgpt.com`;
- verify compact dock;
- expand/collapse;
- drag and magnetic docking;
- press `Optimize`;
- scroll a long chat upward;
- verify older messages become archive blocks;
- press `Burn your PC`;
- export diagnostics.

6. Tag release:

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```
