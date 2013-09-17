if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      if(dirName)
        data = findSubdir(data);

      return fileList(data.files);

      function findSubdir(fileData) {
        var subdirResult;
        
        if(fileData.dir===dirName)
          return fileData;
        
        fileData.files.some(function(item) {
          switch(typeof item) {
          case 'object':
            subdirResult = findSubdir(item);
            return subdirResult;
          default:
          }
        });
        
        return subdirResult;
      };
      
      function fileList(files) {
        var list = [];
        
        files.forEach(function (item) {
          switch(typeof item) {
          case 'string':
            list.push(item);
            break;
          case 'object':
            list.push.apply(list,fileList(item.files));
            break;
          default:
            throw TypeError('Unknown file data content: ' + item);
          }
        });
        
        return list;
      };
    },

    permute: function(arr) {
      return permutations(arr);
      
      function permutations(arr) {
        var result = [];
        
        switch(arr.length) {
        case 0:
          return [];
        case 1:
          return [arr];
        default:
          // Recurse
        }
        
        arr.forEach(function (item,index) {
          var rest = arr.slice();
          var restPermuted;
          
          rest.splice(index,1);
          restPermuted = permutations(rest);
          
          restPermuted.forEach(function (restPermutation) {
            result.push([item].concat(restPermutation));
          });
        });
        
        return result;
      };
    }
  };
});
