if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var callback;
      
      setTimeout(function () { return callback(value); }, 100);
      
      return {
        then: function (onSuccess) { callback = onSuccess; }
      }
    },

    manipulateRemoteData : function(url) {

    }
  };
});
