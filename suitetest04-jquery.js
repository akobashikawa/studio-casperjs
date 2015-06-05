casper.test.comment('Casper comment');
//var $ = require('jquery-2.1.4.js');

casper.test.begin('Suite Test 04', 1, {
	setUp: function(test) {
	    test.info('setUp');
	    //require('utils').dump("setUp");
	},
	tearDown: function(test) {
	    test.info('tearDown');
	    //require('utils').dump("tearDown");
	},
	test: function(test) {
		casper.start('https://poder.pe/', function() {
			test.assertEval(function() {
	            return jQuery;
	        }, "jQuery hallado");
		});

		casper.then(function() {
			var page = this.getHTML();
			var $page = $(page);
			require('utils').dump($page.find('body').toString());
	  		test.assertExists('.latestnews .item', "Existe!!");
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});
