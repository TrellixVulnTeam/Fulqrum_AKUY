var WebScraper = require("../Models/ParseModule/WebScraper.js");

exports.main = function main(app) {
    //Method expects a request specifying parameters to search for
    app.post("/scrape", function (request, response) {
        //Subject to change based on how we want to receive the company name
        var companyName = request.body["CompanyName"];

        var hasPriorAnalytics = false;
        //TODO Check if company analytics are already in database

        if (hasPriorAnalytics === false) {
            WebScraper.freshScrape(companyName, function(reviews) {
                //The review will be returned in an array of objects
                for(var i = 0; i < reviews.length; i++) {
                    //Send each review to get analyzed
                }
            });
        } else {
            //TODO call WebScraper Method for when analytics already exist
        }
    });

}