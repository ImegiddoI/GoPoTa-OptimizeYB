# Changelog

## 1.9.7

Final stable Tampermonkey release before extension rewrite.

### Fixed

- Archive blocks open more reliably than the earlier public release.
- Unsafe fallback insertion was removed to reduce the risk of misplaced message restores.
- Restoring an archive block now requires a live placeholder slot.
- Stale archive slots are reconciled instead of guessed.
- Added diagnostics counters for stale slots and blocked unsafe restores.

### Notes

This is the recommended stable userscript version.

The next major direction is a full browser extension with a separate reader/viewport mode instead of continuing to patch ChatGPT's native scroll behavior.
