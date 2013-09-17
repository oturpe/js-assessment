if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      // ID of the last interval started with 
      var intervalId = null;
      var cancelInternal = function () {
        clearInterval(intervalId);
        intervalId = null;
      };
      var counter = start;
      
      // Do nothing if counting already ongoing. Should maybe throw an
      // exception?
      if(intervalId)
        return;
      
      intervalId = setInterval(function () {
        console.log(counter);
        counter += 1;
        
        if(counter>end)
          cancelInternal();
      },100);

      return {
        cancel: function () {
          cancelInternal();
        }
      };
    }
  };
});