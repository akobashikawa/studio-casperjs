// COMANDO
// casperjs test --ssl-protocol=any testog.js

function checkOg(mycasper, url) {
	mycasper.test.info('Page title: ' + mycasper.getTitle());

    mycasper.test.assertExists('meta[property="og:title"]', 'Existe og:title');
    mycasper.test.assertExists('meta[property="og:description"]', 'Existe og:description');
    mycasper.test.assertExists('meta[property="og:image"]', 'Existe og:image');
    mycasper.test.assertExists('meta[property="og:url"]', 'Existe og:url');

    var imageUrl = mycasper.getElementAttribute('meta[property="og:image"]', 'content');
    mycasper.test.assertMatch(imageUrl, /^https?\:\/\//i, 'Imagen con url absoluto');
}
/*
Entrar al home
Hacer click en el cover
Verificar og:title, og:description, og:image, og:url
*/
casper.test.begin('Verificando og:xxx', 11, function suite(test) {

	casper.start();

	casper
		.open('https://poder.pe')
		.then(function() {
			casper.test.info('Home page title: ' + casper.getTitle());
		    test.assertExists('.news.cover', "Existe cover");
		    //casper.click('.news.cover .entry-title a');

		    var url = casper.getElementAttribute('.news.cover .entry-title a', 'href');
		    casper.open(url).then( function() {
		    	checkOg(casper, url);
		    });

		    var urls = casper.getElementsAttribute('.latestnews .entry .entry-title a', 'href');
		    require('utils').dump(urls);
		    casper.open('https://poder.pe/2015/06/01/00259-peru-competitividad-en-caida-libre/').then( function() {
		    	checkOg(casper, 'https://poder.pe/2015/06/01/00259-peru-competitividad-en-caida-libre/');
		    });
		});

	casper.run(function() {
    	test.done();
  	});

});

/* PROBLEMA!!! MEJOR LEER ANTES:
* https://gist.github.com/danpalmer/2929799
** https://stackoverflow.com/questions/13405310/casperjs-simultaneous-requests
*/