casper.test.setUp(function() {
    casper.test.info('setUp');
    //require('utils').dump("setUp");
});

casper.test.tearDown(function() {
    casper.test.info('tearDown');
    //require('utils').dump("tearDown");
});

casper.test.begin('Suite Test 01', 1, function suite(test) {

	casper.start('http://poderbeta.dev:8000', function() {
		casper.test.info('start');
    	//require('utils').dump("start");
		test.assertExists('.news.cover', "Existe cover");
	});


	casper.run(function() {
    	test.done();
  	});

});
