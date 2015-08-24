ApiUtil = {
  fetchBenches: function (options) {
    $.ajax({
      url: "api/benches",

      data: options.data,
      
      success: function (benches) {
        ApiActions.recieveAll(benches);
      }
    });
  }
};
