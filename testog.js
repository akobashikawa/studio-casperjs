/*
Entrar a la página
Hacer click en la página
Verificar og:title, og:description, og:image, og:url
*/
casper.test.begin('Verificando og:xxx en home', 1, {
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

casper.test.begin('Verificando og:xxx en home', 1, {
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

