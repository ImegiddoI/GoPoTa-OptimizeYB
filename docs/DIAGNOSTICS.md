# Diagnostics

Diagnostics help tune performance without exposing conversation text.

## Export from UI

Click `Export log`.

## Export from console

```js
GoPoTa_OptimizeYB.exportDiagnostics()
```

## Inspect in console

```js
GoPoTa_OptimizeYB.diagnostics()
```

## Useful fields

- `hiddenMessages`: number of archived messages.
- `activeMessages`: number of live message nodes.
- `totalMessageItems`: live messages plus archive blocks.
- `longTasks`: count of browser long tasks observed.
- `longTaskMs`: total long-task duration.
- `strictArchives`: archive count from strict tail-lock.
- `mutationArchives`: archive count triggered by DOM mutations.
- `prehiddenMessages`: messages hidden before archiving.

## Reset

```js
GoPoTa_OptimizeYB.reset()
```
