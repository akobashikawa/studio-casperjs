- Estructura mínima:

var casper = require('casper').create();

casper.start('http://poderbeta.dev:8000', function() {
	//...
});

casper.run();

- Llamar una página:

casper.start('http://poderbeta.dev:8000', function() {
	//...
});

- Existe el elemento?

if (this.exists('meta[property="og:image"]')) {
    //...
}

- Enviar formulario

casper.thenEvaluate(function(q) {
	var input = document.querySelector('#searchinput');
    input.value = q;
    input.form.submit();
}, 'FIFA');

this.fill('form[action="/buscar/"]', {
	'q': 'FIFA'
}, true);

- Click a un link

- Dump

require('utils').dump()

TESTING
=======

- Estructura

casper.test.begin('Verificar og:xxx', 5, function suite(test) {

	casper.start(
		//...
	);

	//...

	casper.run(function() {
		test.done();
	});

}

???
---
* Si un test falla, no se ejecutan los siguientes... se puede continuar?