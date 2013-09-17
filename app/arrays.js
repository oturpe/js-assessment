if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
       return arr.reduce(function (sum,item) {
         return sum + item;
       },0);
    },

    remove : function(arr, item) {
       var newArray = [];
       var i;
       var origItem;
       
       for(i=0; i<arr.length;i++) {
         origItem = arr[i];
         if(origItem !== item )
           newArray.push(origItem);
       }
       
       return newArray;
    },

    removeWithoutCopy : function(arr, item) {
      var i = 0;
      var removalCount = 0;

      while(i<arr.length) {
        origItem = arr[i+removalCount];
        while(origItem===item) {
          removalCount += 1;
          origItem = arr[i+removalCount];
        }
        
        arr[i] = arr[i+removalCount];
        
        i++;
      }
      
      arr.length -= removalCount;
      
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      arr.forEach(function(e) {
        if(e===item)
          count++;
      });
      
      return count;
    },

    duplicates : function(arr) {
      var counts = {};
      var dups = [];
      arr.forEach(function (item) {
        counts[item] ? counts[item] += 1 : counts[item] = 1;
      });
      
      for (count in counts) {
        if(counts[count] > 1)
          dups.push(count);
      };
      
      return dups;
    },

    square : function(arr) {
      return arr.map(function (item) {
        return item * item;
      });
    },

    findAllOccurrences : function(arr, target) {
      var positions = [];
      
      arr.forEach(function (item,index) {
        if(item===target)
          positions.push(index);
      });
      
      return positions;
    }
  };
});
