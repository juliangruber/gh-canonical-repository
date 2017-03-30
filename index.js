'use strict'

const gitRemoteOriginUrl = require('git-remote-origin-url')
const parseGitHubRepoUrl = require('parse-github-repo-url')
const got = require('got')

module.exports = (dir, onGuess, cb) => {
  if (typeof cb !== 'function') {
    cb = onGuess
    onGuess = () => {}
  }

  gitRemoteOriginUrl(dir)
    .then(url => {
      const guess = parseGitHubRepoUrl(url).filter(Boolean)
      setImmediate(() => onGuess(null, guess))
      const api = `api.github.com/repos/${guess[0]}/${guess[1]}`
      return got(api, { json: true })
    })
    .then(res => {
      setImmediate(() => cb(null, res.body.full_name.split('/')))
    })
    .catch(err => {
      setImmediate(() => cb(err))
    })
}
