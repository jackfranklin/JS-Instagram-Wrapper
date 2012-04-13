(function() {
  var instagramwrapper = {
    oembed: {
      web_url: "",
      query: function(cb) {
        var ajxreq = $.ajax({
          url: "http://api.instagram.com/oembed?url=" + this.web_url,
          dataType: 'jsonP'
        });
        ajxreq.success(function(resp) {
          cb(resp);
        });
      }
    }
  };
  window.instagramwrapper = instagramwrapper;
})();
