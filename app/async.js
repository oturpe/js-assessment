if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return {
        then: function (onSuccess) { return onSuccess(value); }
      }
    },

    manipulateRemoteData : function(url) {

    }
  };
});
