/**
 * Increments a stored number.
 * @version 0.1.0
 * @constructor
 * @param {object} config Properties to extend the defaults.
 * @param {number} config.factor How much to increment the count by per-call.
 * @param {number} config.startFrom The number to start counting by on the outset.
 */
var Tally = function(config){

  var settings = {
      factor : 1,
      startFrom : 0
    }, key, count;

  for(key in config){
    if(settings.hasOwnProperty(key)){
      settings[key] = config[key];
    }
  }

  count = settings.startFrom;

/**
 * Gets!
 * @return {number} Current tally.
 */
  this.get = function(){
    return count;
  };

/**
 * Sets!
 * @param {number} increment Number of times to increment `count`.
 * @return {number} Current tally.
 */
  this.set = function(increment){
    increment = (typeof(increment) === 'number') ? increment : 1;
    return count += (increment * settings.factor);
  };
};