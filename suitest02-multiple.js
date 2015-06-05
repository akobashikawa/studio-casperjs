/*
Entrar al home
Hacer click en el cover
Verificar og:title, og:description, og:image, og:url
*/
casper.test.begin('Verificando og:xxx', 1, function suite(test) {

	casper.start('https://poder.pe');

	casper.then(function() {
  		test.assertExists('.news.cover', "Existe cover en poder.pe");
	});

	casper.run(function() {
    	test.done();
  	});

});

casper.test.begin('Verificando og:xxx(2)', 1, function suite(test) {

	casper.start('http://poderbeta.dev:8000');

	casper.then(function() {
  		test.assertExists('.news.cover', "Existe cover en poderbeta.dev");
	});

	casper.run(function() {
    	test.done();
  	});

});
