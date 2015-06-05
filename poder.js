// https://github.com/ariya/phantomjs/issues/12655
// casperjs --ssl-protocol=TLSv1 ...
// casperjs --ssl-protocol=any ...
var casper = require('casper').create({
    verbose: true,
    //logLevel: 'debug',
    pageSettings: {
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4',
         javascriptEnabled: true
    },
    viewportSize: {width: 1024, height: 768},
    loadPlugins: true
});

casper.start('https://poder.pe', function() {
    console.log('home', this.getTitle());
});

casper.thenOpen('https://poder.pe/ultimas-noticias', function() {
    console.log('ultimas-noticias', this.getTitle());
});

casper.run();