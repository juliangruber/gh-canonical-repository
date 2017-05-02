# gh-canonical-repository

Get the canonical GitHub repository of a git clone.

Calls back with the repository name it read from the local git config first, then with what it resolved via the public GitHub Api.

Use this for cases where you cloned a repository like [Level/leveldown](https://github.com/Level/leveldown) with lowercase `level` but need its actual name.

## Example

```js
const canonical = require('gh-canonical-repository')

canonical(
  process.argv[2],
  (err, guess) => {
    if (err) throw err
    console.log('guess', guess)
  },
  (err, repo) => {
    if (err) throw err
    console.log('repo', repo)
  }
)
```

```bash
$ node example.js ~/dev/level/leveldown
guess [ 'level', 'leveldown' ]
repo [ 'Level', 'leveldown' ]
```

## Installation

```bash
$ npm install gh-canonical-repository
```

## API

### canonical(dir[, onGuess], cb)

### canonical.promise(dir)

## License

MIT
