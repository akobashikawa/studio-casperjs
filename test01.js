var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug'
});

casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
})

/*
Entrar a home
Buscar 'FIFA'
Hacer click en el link del primer item
Leer el título de esa página
*/
casper.start('https://poder.pe', function() {
    this.echo(this.getTitle());
    this.fill('form[action="/buscar/"]', {
        'q': 'FIFA'
    }, true);
});

casper.then(function() {
    this.echo('BUSQUEDA LISTA');
    this.echo(this.getTitle());
	this.click('.main-content .item h1 a');
});

casper.then(function() {
	this.echo('PRIMERA NOTICIA');
    this.echo(this.getTitle());
});

casper.run();