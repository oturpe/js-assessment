if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      // Add missing 'var' to declare in function scope
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      // Worked for me as-was, but function declaration inside blocks is not
      // standard.
      
      var getValue;
      
      if (flag) {
        getValue = function () { return 'a'; }
      } else {
        getValue = function () { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
      // Added radix as people seem to think automatic conversion is not good.
      // Don't know why.
      return parseInt(num,10);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
