// http://docs.casperjs.org/en/latest/testing.html#testing
casper.test.begin('Poder search retrives 5 or less results', 3, function suite(test) {


  casper.start('https://poder.pe', function() {
    test.assertExists('form[action="/buscar/"]', 'Search form exists');
    this.fill('form[action="/buscar/"]', {
      'q': 'apple' 
    }, true);
  });


  casper.then(function() {
    test.assertUrlMatch(/q=apple/, 'Search term submited');
    test.assertEval(function() {
      return __utils__.findAll('.main-content .item').length <= 5;
    }, 'Poder search for "apple" return 5 or less results');
  });

  casper.run(function() {
    test.done();
  });

});
