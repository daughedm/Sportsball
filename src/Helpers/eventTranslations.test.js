import {eventCleaner, inningCleaner, eventToSlang} from './eventTranslations';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

describe('eventTranslations', () => {
  describe('eventCleaner', () => {
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aHR');
      const expected = 'homerun';

      expect(actual).toEqual(expected);
    })

    it('should return a default value when event code doesnt exist', () => {
      const actual = eventCleaner('BBBF');
      const expected = 'that play';

      expect(actual).toEqual(expected);
    })
  })

  describe('inningCleaner', () => {
    it('should change a number to its written out version', () => {
      const actual = inningCleaner(1);
      const expected = 'first'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(2);
      const expected = 'second'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(3);
      const expected = 'third'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(4);
      const expected = 'forth'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(5);
      const expected = 'fifth'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(6);
      const expected = 'sixth'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(7);
      const expected = 'seventh'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(8);
      const expected = 'eighth'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(9);
      const expected = 'nineth'

      expect(actual).toEqual(expected);
    })

    it('should change a number to its written out version', () => {
      const actual = inningCleaner(10);
      const expected = 'tenth'

      expect(actual).toEqual(expected);
    })

it('should change a number to its written out version', () => {
  const actual = inningCleaner(11);
  const expected = 'eleventh'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(12);
  const expected = 'twelth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(13);
  const expected = 'thirteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(14);
  const expected = 'fourteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(15);
  const expected = 'fifteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(16);
  const expected = 'sixteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(17);
  const expected = 'seventeenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(18);
  const expected = 'eighteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(19);
  const expected = 'nineteenth'

  expect(actual).toEqual(expected);
})

it('should change a number to its written out version', () => {
  const actual = inningCleaner(20);
  const expected = 'twentieth'

  expect(actual).toEqual(expected);
})


    it('should return a default value when an unexpected value is given', () => {
      const actual = inningCleaner('BBBF');
      const expected = 'inning';

      expect(actual).toEqual(expected);
    })
  })

  describe('eventToSlang', () => {
    it('should return the event if event is an unexpected value', () => {
      
      const actual = eventToSlang('error');
      const expected = 'error';
      
      expect(actual).toEqual(expected);
      
    })
    it('should return a string', () => {
      const actual = eventToSlang('homerun');
      const expected = 'string'

      expect(typeof actual).toEqual(expected);
    })

    it('should return the event as a slang word', () => {
      const actual = eventToSlang('homerun');
      const expected = 'dinger';

      expect(actual).toEqual(expected);
    })
  })
})