var asyncSeries = function (list, done)
{
  var counter = 0;
  var callback = function()
  {
    counter++;
    var next = list[counter];
    next(callback);
  }
    var fn = list[counter];
    fn(callback);
    //console.log("Hi.");
};

asyncSeries([
  function(callback)
  {
    console.log(1);
    callback();
  }, function(callback) {
    setTimeout(function() {
      console.log(2);
      callback();
    }, 1000);
  }, console.log.bind(console, 3) // no semi-colon
], function(err) {
  console.log("This should not run unless there are errors.")
});
