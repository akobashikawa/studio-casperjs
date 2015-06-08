var numTestsInCheckOg = 7;

function checkOg(casper) {
	var test = casper.test;
	casper.test.comment('Page title: ' + casper.getTitle());
	casper.test.comment('body class: ' + casper.getElementAttribute('body', 'class'));
    test.assertExists('meta[property="og:title"]', 'Existe og:title');
    test.assertExists('meta[property="og:description"]', 'Existe og:description');

    test.assertExists('meta[property="og:url"]', 'Existe og:url');
    var url = casper.getElementAttribute('meta[property="og:url"]', 'content');
    test.assertMatch(url, /^https?\:\/\//i, 'url absoluto');

    test.assertExists('meta[property="og:image"]', 'Existe og:image');
    var imageUrl = casper.getElementAttribute('meta[property="og:image"]', 'content');
    test.assertMatch(imageUrl, /^https?\:\/\//i, 'Imagen con url absoluto');
}

casper.test.begin('Verificando og:xxx en home', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.news.cover', "Existe cover");
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página cover', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.news.cover', "Existe cover");
			var url = casper.getElementAttribute('.news.cover .entry-title a', 'href');
		    casper.open(url);
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página noticia recomendada', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.latestnews', "Existe recomendados");
		    casper.click('.latestnews h1.entry-title a');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página noticia de autor', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.topauthors', "Existe noticia de autor");
		    casper.click('.topauthors h1.entry-title a');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página de autor', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.topauthors', "Existe noticia de autor");
		    casper.click('.author-sign a');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página de autores', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('a[href="/analisis/"]', "Existe noticia de autor");
		    casper.click('a[href="/analisis/"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página de tag', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.toptags', "Existe bloque de tags");
		    casper.click('.tagbox a.tag');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página de todos los tags', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('a[href="/temas/"]', "Existe bloque de tags");
		    casper.click('a[href="/temas/"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página RSS', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('a[href="/rss"]', "Existe link RSS");
		    casper.click('a[href="/rss"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página TOS', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('a[href="/terminos-condiciones"]', "Existe link TOS");
		    casper.click('a[href="/terminos-condiciones"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página Privacidad', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('a[href="/privacidad"]', "Existe link Privacidad");
		    casper.click('a[href="/privacidad"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

casper.test.begin('Verificando og:xxx en página Catálogo', numTestsInCheckOg, {
	test: function(test) {
		casper.start('https://poder.pe', function() {
		    test.assertExists('.printed-cover a[href="/catalogo/"]', "Existe link a Catálogo");
		    casper.click('.printed-cover a[href="/catalogo/"]');
		});

		casper.then(function() {
			checkOg(casper);
		});

		casper.run(function() {
	    	test.done();
	  	});
	}
});

