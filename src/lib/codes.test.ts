import * as module from './codes'

describe('getHint', () => {
  test('hint A > B', () => {
    //jest.spyOn(module, 'solution', 'get').(() => '21000');
    //jest.spyOn(module, 'hints', 'get').mockImplementation(() => [1,0,0,0,0]);

    const hint = module.getHint(0)
    const letter = String.fromCharCode(65) //A
    const letterCompare = String.fromCharCode(66) //B
    //expect(hint).toBe(HINT_GREATER_THAN(letter, letterCompare))
  })
})

describe('removeDuplicated', () => {
  test('11111', () => {
    const hint = module.removeDuplicated([1, 1, 1, 1, 1])
    expect(hint).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('99999', () => {
    const hint = module.removeDuplicated([9, 9, 9, 9, 9])
    expect(hint).toStrictEqual([9, 0, 1, 2, 3])
  })
  test('13210', () => {
    const hint = module.removeDuplicated([1, 3, 2, 1, 0])
    expect(hint).toStrictEqual([1, 3, 2, 4, 0])
  })
})
