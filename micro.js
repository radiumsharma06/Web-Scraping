module.exports = function (user){
var config=require('./config.json');
var psa='Your starting url';
var iframe = require('nightmare-iframe');
var Nightmare = require('nightmare');
require('nightmare-iframe-manager')(Nightmare);

var nightmare =   new Nightmare()
    .goto(psa)
    .wait()
    .screenshot('1.png')
    .type('input[id="cred_userid_inputtext"]', user.email)
    //.wait(5000)
    //.click('#aad_account_tile')
    .wait('#passwordInput')
    .screenshot('2.png')
    .type('input[id="passwordInput"]', user.password)
    .click('#submitButton')
    .wait('#TabSI')
    .screenshot('3.png')
    .click('#TabSI')
    .wait('#msdyn_timeentry')
    .exists('#msdyn_timeentry')
    .screenshot('4.png')
    .click('#msdyn_timeentry')
    .wait(10000)
    .screenshot('5.png')
    .enterIFrame('#contentIFrame0')
    .click('#crmGrid_SavedNewQuerySelector')
    .wait(10000)
    .screenshot('6.png')
    .click('span[title="My Historical Time Entries"]')
    .wait(10000)
    .screenshot('7.png')
    .exitIFrame()
    .resetFrame()
    .click('img[class="ms-crm-ImageStrip-Copy_16 ms-crm-commandbar-image16by16"]')
    .wait(10000)
    .screenshot('8.png')

    .run(function(err, nightmare) {
      if (err) {
        console.log(err);
      }
      console.log('Done.');
    });
}
