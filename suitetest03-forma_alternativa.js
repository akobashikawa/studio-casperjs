casper.test.begin('Suite Test 03', 1, {
	setUp: function(test) {
	    test.info('setUp');
	    //require('utils').dump("setUp");
	},
	tearDown: function(test) {
	    test.info('tearDown');
	    //require('utils').dump("tearDown");
	},
	test: function(test) {
		casper.start('https://poder.pe');

		casper.then(function() {
	  		test.assertExists('.news.cover', "Existe cover en poder.pe");
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});
