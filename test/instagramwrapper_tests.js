test('Set Up Tests', function() {
  ok(instagramwrapper, "instagram wrapper is exists and is not undefined");
});

test('oembed', function() {
  ok(instagramwrapper.oembed, "oembed namespace exists");
  instagramwrapper.oembed.web_url = "http://instagr.am/p/JYAdvJr0K9/";
  equal(instagramwrapper.oembed.web_url, "http://instagr.am/p/JYAdvJr0K9/", "Can set the web_url correctly");
});
asyncTest("oembed AJAX", 4, function() {
  instagramwrapper.oembed.web_url = "http://instagr.am/p/JYAdvJr0K9/";
  instagramwrapper.oembed.query(function(res) {
    ok(res, "AJAX call got a result");
    ok(res.url, "URL exists in response");
    equal(res.url, "http://distilleryimage5.s3.amazonaws.com/9436051c85b011e18cf91231380fd29b_7.jpg", "URL returned is correct");
    equal(res.title, "Drainpipe", "The title returned is correct");
    start();
  });
  setTimeout(function() {
    start();
  }, 1000);
});
