if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(undefined,arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function (str2) {
        return str + ", " + str2;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(function (item) {
        return function () {return fn(item);};
      });
    },

    partial : function(fn, str1, str2) {
      return function (missingParam) {
        return fn(str1,str2,missingParam);
      };
    },

    useArguments : function() {
      var args = [].slice.call(arguments);
      return args.reduce(function(sum,next) {
        return sum + next;
      },0);
    },

    callIt : function(fn) {
      var args = [].slice.call(arguments,1);
      fn.apply(null,args);
    },

    partialUsingArguments : function(fn) {
      var args = [].slice.call(arguments,1);
      return function() {
        var newArgs = [].slice.call(arguments);
        return fn.apply(null,args.concat(newArgs));
      };
    },

    curryIt : function(fn) {
      var length = fn.length;
      var argList = [];
      
      // TODO: If fn needs no arguments to start with?
      
      return function curried(nextArg) {
        argList.push(nextArg);
        length -= 1;
        
        if(length===0)
          return fn.apply(null,argList);
        
        return curried;
      };
    }
  };
});
