const sum  = require('./file1');

test('Hello testing', ()=>{
    console.log("hello testing");
})

test('testing the sum method',()=>{
    expect(sum(3,4)).toBe(7);
})

/**
 * Testing objects
 */
test('testing the objects' , ()=>{
    const data = {
        one :1
    };
    data.two = 2;

    expect(data).toEqual({two:2,one:1});  // Recursively checks all the fields of the JS object
})


/**
 * Testing not to be
 */
test('testing the sum method', ()=>{
    expect(sum(4,5)).not.toBe(7);
})


/**
 * Testing truthiness :
 * testing :
 * 1.undefined
 * 2.null
 * 3.false
 */

test('null', ()=>{
    let n = null;
    expect(n).toBeNull();
})

test('undefined', ()=>{
    let n = undefined;
    expect(n).toBeUndefined();
})

test('undefined', ()=>{
    let n = 5;
    expect(n).toBeDefined();
})

test('testing toBeTruthy and toBeFalsy', ()=>{
    let a= 7;
    let b = true;
    let c = undefined;
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeFalsy();

})

/**
 * Testing numbers
 */

 test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  /**
   * String testing
   */
   test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  /**
   * Testing Arrays and Iterables
   */

   const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  /**
   * Testing exceptions
   */
   function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
