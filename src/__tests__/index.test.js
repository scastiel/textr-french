const transform = require('..')

describe('Transform', () => {
  ;[
    ['fr', 'Test\u202F: test', 'Test\u202F: test'],
    ['fr', 'Test: test', 'Test\u202F: test'],
    ['fr', 'Test : test', 'Test\u202F: test'],
    ['fr', 'Test; test', 'Test\u202F; test'],
    ['fr', 'Test ; test', 'Test\u202F; test'],
    ['fr', 'Test?', 'Test\u202F?'],
    ['fr', 'Test ?', 'Test\u202F?'],
    ['fr', 'Test!', 'Test\u202F!'],
    ['fr', 'Test !', 'Test\u202F!'],
    ['en', 'Test!', 'Test!'],
    ['en', 'Test?', 'Test?'],
    ['en', 'Test:', 'Test:'],
    ['en', 'Test;', 'Test;']
  ].forEach(([locale, input, output]) => {
    test(`"${input}" should be transformed to "${output}" with locale ${locale}`, () => {
      expect(transform(input, { locale })).toEqual(output)
    })
  })
})
