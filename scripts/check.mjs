import { spawnSync } from 'node:child_process';

const result = spawnSync('node', ['--check', 'gopota-optimize-yb.user.js'], {
  stdio: 'inherit'
});

process.exit(result.status ?? 1);
