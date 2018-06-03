import {eventCleaner, inningCleaner, eventToSlang} from './eventTranslations';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

describe('eventTranslations', () => {
  describe('eventCleaner', () => {
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aBK');
      const expected = 'balk';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aCI');
      const expected = 'catcher interference';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aD');
      const expected = 'double';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aDAD3');
      const expected = 'double';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aDAD4');
      const expected = 'double';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oDT3');
      const expected = 'double';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oDT4');
      const expected = 'double';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aFCAD2');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aFCAD3');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aFCAD4');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oFC');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oFCT2');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oFCT3');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oFCT4');
      const expected = 'fielders choice';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aHBP');
      const expected = 'hit by pitch';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aHR');
      const expected = 'homerun';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aHR');
      const expected = 'homerun';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aIBB');
      const expected = 'intentional walk';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKLAD1');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKLAD2');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKLAD3');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKLAD4');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKSAD1');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKSAD2');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKSAD3');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aKSAD4');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aROE');
      const expected = 'error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aROEAD2');
      const expected = 'error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aROEAD3');
      const expected = 'error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aROEAD4');
      const expected = 'error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aS');
      const expected = 'single';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSAD2');
      const expected = 'single';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSAD3');
      const expected = 'single';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSAD4');
      const expected = 'single';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSBAD1');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSBAD2');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSBAD3');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSBAD4');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSFAD1');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSFAD1');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSFAD1');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aSFAD1');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    }) 
    
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aT');
      const expected = 'triple';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('aTAD4');
      const expected = 'triple';

      expect(actual).toEqual(expected);
    }) 
    
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('bAB');
      const expected = 'ball';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('bIB');
      const expected = 'ball';

      expect(actual).toEqual(expected);
    }) 
    
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('bPO');
      const expected = 'ball';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('bD');
      const expected = 'ball';

      expect(actual).toEqual(expected);
    }) 
    
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('kF');
      const expected = 'foul ball';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('kFT');
      const expected = 'foul ball';

      expect(actual).toEqual(expected);
    }) 
    
    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('kKL');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('kKS');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oBI');
      const expected = 'hitter interference';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oFO');
      const expected = 'fly out';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oGO');
      const expected = 'ground out';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKLT1');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKLT2');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKLT3');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKLT4');
      const expected = 'strike looking';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKST1');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKST2');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKST3');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oKST4');
      const expected = 'strike swinging';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oLO');
      const expected = 'line out';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oOBB');
      const expected = 'out of batters box';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oOp');
      const expected = 'out on appeal';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oPO');
      const expected = 'pop out';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oOp');
      const expected = 'out on appeal';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oROET2');
      const expected = 'reached on error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oROET3');
      const expected = 'reached on error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oROET4');
      const expected = 'reached on error';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSB');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSBT2');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSBT3');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSBT4');
      const expected = 'sacrifice bunt';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSF');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSFT2');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSFT3');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

    it('should translate a code into its english meaning', () => {
      const actual = eventCleaner('oSFT4');
      const expected = 'sacrifice fly';

      expect(actual).toEqual(expected);
    })

it('should translate a code into its english meaning', () => {
  const actual = eventCleaner('oST2');
  const expected = 'single';

  expect(actual).toEqual(expected);
})

it('should translate a code into its english meaning', () => {
  const actual = eventCleaner('oST3');
  const expected = 'single';

  expect(actual).toEqual(expected);
})

it('should translate a code into its english meaning', () => {
  const actual = eventCleaner('oST4');
  const expected = 'single';

  expect(actual).toEqual(expected);
})

it('should translate a code into its english meaning', () => {
  const actual = eventCleaner('oTT4');
  const expected = 'triple';

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
      const expected = 'ninth'

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