module.exports = function (namespace) {
  return function () {
    var bindedLog = console.log.bind(null, namespace); // bind namespace with console.log
    bindedLog.apply(null, Array.prototype.slice.call(arguments, 0));
  };
  };