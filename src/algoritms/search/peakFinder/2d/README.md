# Peak Finder (two-dimensional version)

TBD.

## Complexity

**Time Complexity**: `O(n*log(m))` - with `n` rows and `m` columns, since we:
- split search area by two `log(m)` times;
- search a global maximum on every iteration with `O(n)` time complexity;