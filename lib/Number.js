(function(){ var spackle, assert, undefined;
  spackle = new(Object);
  
  // Shittiest testing framework. Ever.
  // 
  // Seriously, though, I need to finish grizzly/Speck.js/whatever.
  assert = function (argument) {
    if (argument !== true) { throw(new(Error)("Assertion #fail!")) } }
  
  // Checks whether or not a value is a type of *number*. Both numeric
  // primitives *and* `Number` objects will result in a `true` return value,
  // anything else will return `false`.
  spackle.isANumber = function (argument) {
         if ( typeof argument           === 'undefined' ||
                     argument           === null          )   { return false }
    else if ((typeof argument           === 'number'    ||
             (typeof argument           === 'object'    &&
              typeof argument.valueOf() === 'number'))  &&
              !isNaN(argument)                            )   { return true  }
                                                         else { return false }
  };
  
  if (typeof assert !== 'undefined') {
    assert(  spackle.isANumber(1)                    );
    assert(  spackle.isANumber(0)                    );
    assert(  spackle.isANumber(new(Number)(1))       );
    assert(  spackle.isANumber(new(Number)(0))       );
    
    assert( !spackle.isANumber('1')                  );
    assert( !spackle.isANumber('0')                  );
    assert( !spackle.isANumber(new(String)('1'))     );
    assert( !spackle.isANumber(new(String)('0'))     );
    
    assert( !spackle.isANumber(true)                 );
    assert( !spackle.isANumber(false)                );
    assert( !spackle.isANumber(new(Boolean)(true))   );
    assert( !spackle.isANumber(new(Boolean)(false))  );
    
    assert( !spackle.isANumber(undefined)            );
    assert( !spackle.isANumber(null)                 );
    assert( !spackle.isANumber(Number.NaN)           );
  };
  
  return spackle;
})()
