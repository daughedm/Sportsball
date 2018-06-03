import { teamEndPoints } from './teamEndPoints';

describe('teamEndPoints', () => {
  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Blue Jays');
    const expected = '1d678440-b4b1-4954-9b39-70afb3ebbcfa'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Rays');
    const expected = 'bdc11650-6f74-49c4-875e-778aeb7632d9'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Orioles');
    const expected = '75729d34-bca7-4a0f-b3df-6f26c6ad3719'

    expect(actual).toEqual(expected);
  })
  
  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Red Sox');
    const expected = '93941372-eb4c-4c40-aced-fe3267174393'

    expect(actual).toEqual(expected);
  })
  
  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Yankees');
    const expected = 'a09ec676-f887-43dc-bbb3-cf4bbaee9a18'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Royals');
    const expected = '833a51a9-0d84-410f-bd77-da08c3e5e26e'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Indians');
    const expected = '80715d0d-0d2a-450f-a970-1b9a3b18c7e7'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('White Sox');
    const expected = '47f490cd-2f58-4ef7-9dfd-2ad6ba6c1ae8'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Tigers');
    const expected = '575c19b7-4052-41c2-9f0a-1c5813d02f99'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Twins');
    const expected = 'aa34e0ed-f342-4ec6-b774-c79b47b60e2d'

    expect(actual).toEqual(expected);
  })
 
  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Mariners');
    const expected = '43a39081-52b4-4f93-ad29-da7f329ea960'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Angels');
    const expected = '4f735188-37c8-473d-ae32-1f7e34ccf892'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Athletics');
    const expected = '27a59d3b-ff7c-48ea-b016-4798f560f5e1'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Rangers');
    const expected = 'd99f919b-1534-4516-8e8a-9cd106c6d8cd'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Astros');
    const expected = 'eb21dadd-8f10-4095-8bf3-dfb3b779f107'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Reds');
    const expected = 'c874a065-c115-4e7d-b0f0-235584fb0e6f'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Pirates');
    const expected = '481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Cubs');
    const expected = '55714da8-fcaf-4574-8443-59bfb511a524'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Cardinals');
    const expected = '44671792-dc02-4fdd-a5ad-f5f17edaa9d7'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Brewers');
    const expected = 'dcfd5266-00ce-442c-bc09-264cd20cf455'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Dodgers');
    const expected = 'ef64da7f-cfaf-4300-87b0-9313386b977c'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Diamondbacks');
    const expected = '25507be1-6a68-4267-bd82-e097d94b359b'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Giants');
    const expected = 'a7723160-10b7-4277-a309-d8dd95a8ae65'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Rockies');
    const expected = '29dd9a87-5bcc-4774-80c3-7f50d985068b'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Padres');
    const expected = 'd52d5339-cbdd-43f3-9dfa-a42fd588b9a3'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Phillies');
    const expected = '2142e1ba-3b40-445c-b8bb-f1f8b1054220'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Mets');
    const expected = 'f246a5e5-afdb-479c-9aaa-c68beeda7af6'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Marlins');
    const expected = '03556285-bdbb-4576-a06d-42f71f46ddc5'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Braves');
    const expected = '12079497-e414-450a-8bf2-29f91de646bf'

    expect(actual).toEqual(expected);
  })

  it('return a key code based on what team you put in', () => {
    const actual = teamEndPoints('Nationals');
    const expected = 'd89bed32-3aee-4407-99e3-4103641b999a'

    expect(actual).toEqual(expected);
  })

  

  it('shoul return a default code if unexpected valu is passed', () => {
    const actual = teamEndPoints('Browns');
    const expected = '80715d0d-0d2a-450f-a970-1b9a3b18c7e7'

    expect(actual).toEqual(expected);
  })
})