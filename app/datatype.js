module.exports = {
  dataTypes : function (arg) {
  
  if(typeof arg == "string"){
    return arg.length;
  }
  
  if( typeof arg == "number"){
    if(arg < 100) {
      return 'less than 100';
    }else if (arg > 100){
      return 'more than 100';
    } else {
      return 'equal to 100';
    }
  }
  
  if (arg === null || typeof arg == "undefined") {
    return 'no value';
  }
  
  if (typeof arg == "boolean") {
    return arg;
  }
  
  if (arg instanceof Array) {
    return arg[2];
  }
  
  if (typeof arg === 'function'){
        return arg(true);
    }
  }
}
