const canonical = require('.')

canonical(
  process.argv[2],
  guess => {
    console.log('guess', guess)
  },
  (err, repo) => {
    if (err) throw err
    console.log('repo', repo)
  }
)
