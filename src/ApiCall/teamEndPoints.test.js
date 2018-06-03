import { teamEndPoints } from './teamEndPoints';

describe('teamEndPoints', () => {
  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Blue Jays');
    const expected = '1d678440-b4b1-4954-9b39-70afb3ebbcfa'

    expect(actual).toEqual(expected);
  })

  it('shoul return a default code if unexpected valu is passed', () => {
    const actual = teamEndPoints('Browns');
    const expected = '80715d0d-0d2a-450f-a970-1b9a3b18c7e7'

    expect(actual).toEqual(expected);
  })
})