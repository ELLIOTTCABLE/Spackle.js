return (function(){ var spackle;
  spackle = new(Object);
  
  // FIXME: These might return `true` for any object with a `valueOf()`
  //        function that resolves to a primitive, not just descendants of
  //        `Number`/`String` respectively. We can’t *just* test against
  //        `instanceOf Number` (or `String`), because the actual value of
  //        those variables varies from interpretation context to
  //        interpretation context.
  
  spackle.Number = from.absolute('/Users/elliottcable/Code/Spackle.js/lib/Number.js')
    .export({ spackle : spackle })           .wait();
  spackle.String = from.absolute('/Users/elliottcable/Code/Spackle.js/lib/String.js')
    .export({ spackle : spackle })           .wait();
  
  spackle.spackle = function () {
    for (key in spackle) {
      if (spackle.hasOwnProperty(key) &&
          typeof spackle[key] === 'object') {
        for (subkey in spackle[key]) {
          if (spackle[key].hasOwnProperty(subkey) &&
              typeof GLOBAL[key][subkey] === 'undefined') {
            GLOBAL[key][subkey] = spackle[key][subkey] } } } } };
  
  return spackle;
})()
