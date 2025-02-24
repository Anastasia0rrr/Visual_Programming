const orderBy = require('../orderBy.js');

describe('orderBy', () => {
  it('Correct copying array', () => {
    const Array = [
        { name: 'Mars', age: 43 },
        { name: 'Piter', age: 5 },
        { name: 'Ruben', age: 19 }
    ];
    const Prop = ['name'];
    const Original_Arr = [...Array];
    orderBy(Array, Prop);
    expect(Array).toEqual(Original_Arr); 
  });

  it('Checking if contains non-objects', () => {
      const Array = ['Mars', 'Piter', 'Ruben'];
      const Prop = ['name'];
      expect(() => orderBy(Array, Prop)).toThrow("Not an object");
  });

  it('Checking if missing a property', () => {
      const Array = [{ name: 'Mars' }, { age: 43 }];
      const Prop = ['name', 'age'];
      expect(() => orderBy(Array, Prop)).toThrow("Missing property");
  });
});