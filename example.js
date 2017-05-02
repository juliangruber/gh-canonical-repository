const canonical = require('.')

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

canonical
  .promise(process.argv[2])
  .then(repo => console.log('repo', repo, '(promise)'))
