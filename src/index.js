module.exports = (input, { locale }) => {
  if (!locale.match(/^fr/)) {
    return input
  }

  const nnbsp = '\u202F'
  const characters = [':', ';', '?', '!'].join('')

  return input
    .replace(new RegExp(` ([${characters}])`, 'g'), '$1')
    .replace(new RegExp(`([^${nnbsp}])([${characters}])`, 'g'), `$1${nnbsp}$2`)
}
