export const eventCleaner = (event) => {
  switch (event) {
    case 'aBK':
      return 'balk'
    case 'aCI':
      return 'catcher interference'
    case 'aD':
    case 'aDAD3':
    case 'aDAD4':
    case 'oDT3':
    case 'oDT4':
      return 'double'
    case 'aFCAD2':
    case 'aFCAD3':
    case 'aFCAD4':
    case 'oFC':
    case 'oFCT2':
    case 'oFCT3':
    case 'oFCT4':
      return 'fielders choice'
    case 'aHBP':
      return 'hit by pitch'
    case 'aHR':
      return 'homerun'
    case 'aIBB':
      return 'intentional walk'
    case 'aKLAD1':
    case 'aKLAD2':
    case 'aKLAD3':
    case 'aKLAD4':
      return 'strike looking'
    case 'aKSAD1':
    case 'aKSAD2':
    case 'aKSAD3':
    case 'aKSAD4':
      return 'strike swinging'
    case 'aROE':
    case 'aROEAD2':
    case 'aROEAD3':
    case 'aROEAD4':
      return 'error'
    case 'aS':
    case 'aSAD2':
    case 'aSAD3':
    case 'aSAD4':
      return 'single'
    case 'aSBAD1':
    case 'aSBAD2':
    case 'aSBAD3':
    case 'aSBAD4':
      return 'sacrifice bunt'
    case 'aSFAD1':
    case 'aSFAD2':
    case 'aSFAD3':
    case 'aSFAD4':
      return 'sacrifice fly'
    case 'aT':
    case 'aTAD4':
      return 'triple'
    case 'bAB':
    case 'bD':
    case 'bDB':
    case 'bIB':
    case 'bPO':
      return 'ball'
    case 'kF':
    case 'kFT':
      return 'foul ball'
    case 'kKL':
      return 'strike looking'
    case 'kKS':
      return 'strike swinging'
    case 'oBI':
      return 'hitter interference'
    case 'oFO':
      return 'fly out'
    case 'oGO':
      return 'ground out'
    case 'oKLT1':
    case 'oKLT2':
    case 'oKLT3':
    case 'oKLT4':
      return 'strike looking'
    case 'oKST1':
    case 'oKST2':
    case 'oKST3':
    case 'oKST4':
      return 'strike swinging'
    case 'oLO':
      return 'line out'
    case 'oOBB':
      return 'out of batters box'
    case 'oOp':
      return 'out on appeal'
    case 'oPO':
      return 'pop out'
    case 'oROET2':
    case 'oROET3':
    case 'oROET4':
      return 'reached on error'
    case 'oSB':
    case 'oSBT2':
    case 'oSBT3':
    case 'oSBT4':
      return 'sacrifice bunt'
    case 'oSF':
    case 'oSFT2':
    case 'oSFT3':
    case 'oSFT4':
      return 'sacrifice fly'
    case 'oST2':
    case 'oST3':
    case 'oST4':
      return 'single'
    case 'oTT4':
      return 'triple'
    default:
      return 'that play';
  }
}

export const inningCleaner = (inning) => {
  switch (inning) {
    case 1:
      return 'first';
    case 2:
      return 'second';
    case 3: 
      return 'third';
    case 4: 
      return 'forth';
    case 5:
      return 'fifth';
    case 6:
      return 'sixth';
    case 7:
      return 'seventh';
    case 8:
      return 'eighth';
    case 9:
      return 'ninth';
    case 10:
      return 'tenth';
    case 11:
      return 'eleventh';
    case 12:
      return 'twelth';
    case 13:
      return 'thirteenth';
    case 14:
      return 'fourteenth';
    case 15:
      return 'fifteenth';
    case 16:
      return 'sixteenth';
    case 17:
      return 'seventeenth';
    case 18:
      return 'eighteenth';
    case 19:
      return 'nineteenth';
    case 20:
      return 'twentieth';
    default:
      return 'inning'
  }
}

export const eventToSlang = (event) => {
  let randomHRNumber = Math.floor(Math.random() * slangHomerun.length);
  let randomSingleNumber = Math.floor(Math.random() * slangSingle.length);
  let randomDoubleNumber = Math.floor(Math.random() * slangDouble.length);
  let randomTripleNumber = Math.floor(Math.random() * slangTriple.length);
  
  switch (event) {
    case 'homerun':
      return slangHomerun[randomHRNumber]
    case 'single':
      return slangSingle[randomSingleNumber]
    case 'double':
      return slangDouble[randomDoubleNumber] 
    case 'triple':
      return slangTriple[randomTripleNumber]
  default:
      return event;
  }
}

let slangHomerun = ['dinger', 'moon shot', 'monster dong', 'donger', 'four bagger', 'jack', 'quadrangler', 'goner', 'tater', 'jonron', 'homerun', 'homer', 'mash', 'no-doubter' ];

let slangSingle = ['base knock', 'sencillo', 'bleeder', 'single', 'lace', 'rip' ]

let slangDouble = ['gapper', 'double', 'lace', 'rip', 'frozen rope', 'two bagger' ]

let slangTriple = ['three bagger', 'triple']