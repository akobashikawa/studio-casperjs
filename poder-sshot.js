// https://github.com/ariya/phantomjs/issues/12655
// casperjs --ssl-protocol=TLSv1 ...
// casperjs --ssl-protocol=any ...
var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
         javascriptEnabled: true
    },
    viewportSize: {width: 1280, height: 768},
    loadPlugins: true
});

var url = 'https://poder.pe';
casper.start(url, function() {
  console.log('start');
  this.captureSelector('poder-sshot.png', 'body');
});

casper.run();