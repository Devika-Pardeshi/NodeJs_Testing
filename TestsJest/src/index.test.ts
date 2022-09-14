const sum = require('./index');

describe('Addition of two numbers :: ', () => {
    //zero value
    test('basic',async () => {
      expect(sum(0,0)).toBe(0);
    });
    
    //+ve integer value
    test('add 1 + 2 equal to 3', async () => {
      expect(sum(1, 2)).toBe(3);
    });

     //-ve integer value
     test('add -2 + -2 equal to -4', async () => {
      expect(sum(-2, -2)).toBe(-4);
    });

     //+ve & -ve integer value
     test('add -6 + 2 equal to -4', async () => {
      expect(sum(-6, 2)).toBe(-4);
    });

     //+ve float value
     test('add 5.4 + 3.6 equal to 9', async () => {
      expect(sum(5.4 , 3.6)).toBe(9);
    });

     //-ve float value
     test('add -5.4 + -3.6 equal to -9', async () => {
      expect(sum(-5.4 , -3.6)).toBe(-9);
    });
});