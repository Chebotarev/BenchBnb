(function (root) {
  var _benches = [];

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice(0);
    },

    resetBenches: function (benches) {
      _benches = benches;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        debugger
        this.resetBenches(payload.benches);
      }
    })
  });
})(this);
