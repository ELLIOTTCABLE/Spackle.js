return (function(){ var spackle, assert, undefined;
  spackle = new(Object);
  
  // Shittiest testing framework. Ever.
  // 
  // Seriously, though, I need to finish grizzly/Speck.js/whatever.
  assert = function (argument) {
    if (argument !== true) { throw(new(Error)("Assertion #fail!")) } }
  
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
