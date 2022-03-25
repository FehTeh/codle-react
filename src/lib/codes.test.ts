import { HINT_GREATER_THAN } from '../constants/strings'
import * as module from './codes';

describe('getHint', () => {

  test('hint A > B', () => {

    //jest.spyOn(module, 'solution', 'get').(() => '21000');
    //jest.spyOn(module, 'hints', 'get').mockImplementation(() => [1,0,0,0,0]);

    const hint = module.getHint(0)
    const letter = String.fromCharCode(65); //A
    const letterCompare = String.fromCharCode(66); //B
    //expect(hint).toBe(HINT_GREATER_THAN(letter, letterCompare))
  })

})
