import { winningMessages, losingMessages } from './talkingPointPhrases';

describe('talkingPointPhrases', () => {
  describe('winningMessages', () => {
    it('should return an array', () => {
      const setup = winningMessages('Indians', '4-5');
      const actual = Array.isArray(setup)
      expect(actual).toEqual(true);
    })

    it('should interpolate arguments into a sentance', () => {
      const setup = winningMessages('Indians', '4-5');
      const actual = setup[0]
      const expected = 'Wow, that game was sick! I can’t believe the Indians won 4-5!'

      expect(actual).toEqual(expected);
    })
  })

  describe('losingMessages', () => {
    it('should return an array', () => {
      const setup = losingMessages('Indians', '4-5');
      const actual = Array.isArray(setup)
      expect(actual).toEqual(true);
    })

   it('should interpolate arguments into a sentance', () => {
     const setup = losingMessages('Indians', '4-5');
     const actual = setup[0]
     const expected = 'Damn, what a bummer! I can’t believe the Indians lost 4-5!'

     expect(actual).toEqual(expected);
   })
  })
})