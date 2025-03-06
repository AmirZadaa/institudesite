import * as migration_20250130_134225 from './20250130_134225';
import * as migration_20250207_100651 from './20250207_100651';
import * as migration_20250207_101953 from './20250207_101953';

export const migrations = [
  {
    up: migration_20250130_134225.up,
    down: migration_20250130_134225.down,
    name: '20250130_134225',
  },
  {
    up: migration_20250207_100651.up,
    down: migration_20250207_100651.down,
    name: '20250207_100651',
  },
  {
    up: migration_20250207_101953.up,
    down: migration_20250207_101953.down,
    name: '20250207_101953'
  },
];
