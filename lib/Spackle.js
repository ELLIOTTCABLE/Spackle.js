(function(){ var spackle, assert, undefined;
  spackle = new(Object);
  
  // Shittiest testing framework. Ever.
  // 
  // Seriously, though, I need to finish grizzly/Speck.js/whatever.
  assert = function (argument) {
    if (argument !== true) { throw(new(Error)("Assertion #fail!")) } }
  
  // FIXME: These might return `true` for any object with a `valueOf()`
  //        function that resolves to a primitive, not just descendants of
  //        `Number`/`String` respectively. We can’t *just* test against
  //        `instanceOf Number` (or `String`), because the actual value of
  //        those variables varies from interpretation context to
  //        interpretation context.
  
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
  
  spackle.isAString = function (argument) {
         if ( typeof argument           === 'undefined' ||
                     argument           === null          )   { return false }
    else if ((typeof argument           === 'string'    ||
             (typeof argument           === 'object'    &&
              typeof argument.valueOf() === 'string'))    )   { return true  }
                                                         else { return false }
  };
  
  if (typeof assert !== 'undefined') {
    assert(  spackle.isAString('foo')                );
    assert(  spackle.isAString('')                   );
    assert(  spackle.isAString(new(String)('foo'))   );
    assert(  spackle.isAString(new(String)(''))      );
    
    assert(  spackle.isAString('1')                  );
    assert(  spackle.isAString('0')                  );
    assert(  spackle.isAString(new(String)('1'))     );
    assert(  spackle.isAString(new(String)('0'))     );
    
    assert( !spackle.isAString(1)                    );
    assert( !spackle.isAString(0)                    );
    assert( !spackle.isAString(new(Number)(1))       );
    assert( !spackle.isAString(new(Number)(0))       );
    
    assert( !spackle.isAString(true)                 );
    assert( !spackle.isAString(false)                );
    assert( !spackle.isAString(new(Boolean)(true))   );
    assert( !spackle.isAString(new(Boolean)(false))  );
    
    assert( !spackle.isAString(undefined)            );
    assert( !spackle.isAString(null)                 );
    assert( !spackle.isAString(Number.NaN)           );
  };
  
  return spackle;
})()
