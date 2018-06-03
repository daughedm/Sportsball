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
      const actual = inningCleaner(4);
      const expected = 'forth'

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