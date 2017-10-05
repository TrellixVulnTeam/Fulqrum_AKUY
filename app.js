//Main Server
var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));  //Will set port to computers designated
//environment port or port 5000 thousand if environment port is not defined

var ParseModuleController = require("./Controllers/ParseModuleController.js");
ParseModuleController.main(app);
const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
/*
var company = {
<<<<<<< HEAD
    name: "Starbucks",
    city: "San Francisco"
=======
    name: "Philz Coffee",
    city: "San Francisco",
    zipcode: "94080"
>>>>>>> 1ab3e389188e78498be1f9005a6198fb95d7dd3d
}
*/
/*
var ans;
var WebScraper = require("./Models/ParseModule/WebScraper.js");
WebScraper.findCompetitors(company.zipcode);
    /*r1.question('Would you like to run a fresh scrape, update, competitors or exit? 0 1 2 or 3', function (answer) {
        if (answer == 0) {

            WebScraper.freshScrape(company);
        }
        else if (answer == 1) {
            console.log("User wants to update");
            //rescrape will eventually need a check to make sure
            //the company does not already have data.
            WebScraper.rescrape(company);
        }
        else if (answer == 2) {
            WebScraper.findCompetitors(company);
        }
        else {
            exit();
        }
        r1.close();
    });*/

// //For debugging
//     r1.question("Would you like to run a fresh scrape or update a company's reviews? (0 or 1, 2 to exit)", (ans) => {
//     var WebScraper = require("./Models/ParseModule/WebScraper.js");
//     if (ans == 0) {
//         var company = {
//             name: "Philz Coffee",
//             city: "San Francisco"
//         }
//         WebScraper.freshScrape(company);
//     }
// //***
//     if (ans == 1) {
//         console.log("User wants to update");
//         WebScraper.rescrape(company);
//     }
//     else {
//         r1.close();
//     }
//     r1.close();
// });


*/

app.listen(app.get('port'), function () {
    console.log("Node app is running on port", app.get("port"));
});

//exports = module.exports = app;
