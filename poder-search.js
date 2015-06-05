// https://github.com/ariya/phantomjs/issues/12655
// casperjs --ssl-protocol=TLSv1 ...
// casperjs --ssl-protocol=any ...
var casper = require('casper').create({
    verbose: true,
    //logLevel: 'debug',
    pageSettings: {
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
         javascriptEnabled: true
    },
    viewportSize: {width: 1024, height: 768},
    loadPlugins: true
});

var url = 'https://poder.pe';
casper.start(url, function() {
  this.fill('form[action="/buscar/"]', {
    'q': 'fifa' 
  }, true);
});

casper.then(function() {
  this.echo(this.getTitle());
  this.captureSelector('poder-search.png', '.main-content');
});

casper.run();