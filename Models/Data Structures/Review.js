// This format is the output of both the Parse and Analytics module. It was made 
// to promote interoperability between classes and make a standard format.
// "useful" is yelp only additional information
// both sentiment and entity are non empty for database and analytics module
exports.review = review;
var review = {
    origin: "http://www.foo.bar",
    name_of_reviewer: "Foo Bar",
    date_of_review: "MM/DD/YYYY",
    review: "Lorem ipsum",
    rating: 0.0,
    useful: 0.0,
    sentiment:[{
        id: "dolor sit amet",
        score: 0.0,
        magnitude: 0.0
    }],
    entity: [{
    id: "foo bar",
    name: "Lorem ipsum",
    type: "dolor sit amet",
    metadata: "foo bar",
    salience: "Lorem ipsum"
    }]
}
