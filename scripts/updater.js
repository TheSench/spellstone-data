var xml2js = require('xml2json');
var https = require('https');

var baseUrl = 'https://spellstone.synapse-games.com/assets';

function downloadFile(filename) {
    var url = `${baseUrl}/${filename}`;
    https.get(url, (response) => {
        var body = '';
        response.on('data', function (chunk) {
          body += chunk;
        });
        response.on('end', function () {
          console.log('BODY: ' + body);
          xml2js.toJson(body);
        });
    });
}

downloadFile('battleground_effects.xml');