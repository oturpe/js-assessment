if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num & (1 << (bit-1))) >>> (bit-1);
    },

    base10: function(str) {
      return parseInt(str,2);
    },

    convertToBinary: function(num) {
      var retVal;
      var missingBits;
      
      retVal = num.toString(2);
      
      missingBits = 8 - retVal.length;
      while(missingBits > 0) {
        retVal = '0' + retVal;
        missingBits -= 1;
      }
        
      return retVal;
    },

    multiply: function(a, b) {
      return Number((a*b).toPrecision(8));
    }
  };
});

