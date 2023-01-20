import {persistence} from './persistence.js'
test('Initial Tests', () => {
    expect(persistence(39)).toEqual(3);
  });
// describe('Initial Tests', function () {
//     Test.assertEquals(persistence(39),3);
//     Test.assertEquals(persistence(4),0);
//     Test.assertEquals(persistence(25),2);
//     Test.assertEquals(persistence(999),4);
//     });