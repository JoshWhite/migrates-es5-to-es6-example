import addOne from './addOne'

test('when given 1, returns 2', () => {
  const result = addOne(1)
  expect(result).toBe(2)
})