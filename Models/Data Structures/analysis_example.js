//'use strict';

function analyzeSentimentOfText (text) {
  // [START language_sentiment_string]
  // Imports the Google Cloud client library
  const Language = require('@google-cloud/language');

  // Instantiates a client
  const language = Language();

  // The text to analyze, e.g. "Hello, world!"
  // const text = 'Hello, world!';

  const document = {
    'content': text,
    type: 'PLAIN_TEXT'
  };

  // Detects the sentiment of the document
  language.analyzeSentiment({ document: document })
    .then((results) => {
      const sentiment = results[0].documentSentiment;
      console.log(`Document sentiment:`);
      console.log(`  Score: ${sentiment.score}`);
      console.log(`  Magnitude: ${sentiment.magnitude}`);

      const sentences = results[0].sentences;
      sentences.forEach((sentence) => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_sentiment_string]
}

function analyzeSentimentInFile (bucketName, fileName) {
  // [START language_sentiment_file]
  // Imports the Google Cloud client libraries
  const Language = require('@google-cloud/language');

  // Instantiates the clients
  const language = Language();

  // The name of the bucket where the file resides, e.g. "my-bucket"
  // const bucketName = 'my-bucket';

  // The name of the file to analyze, e.g. "file.txt"
  // const fileName = 'file.txt';

  // Instantiates a Document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT'
  };

  // Detects the sentiment of the document
  language.analyzeSentiment({ document: document })
    .then((results) => {
      const sentiment = results[0].documentSentiment;
      console.log(`Document sentiment:`);
      console.log(`  Score: ${sentiment.score}`);
      console.log(`  Magnitude: ${sentiment.magnitude}`);

      const sentences = results[0].sentences;
      sentences.forEach((sentence) => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_sentiment_file]
}

function analyzeEntitiesOfText (text) {
  // [START language_entities_string]
  // Imports the Google Cloud client library
  const Language = require('@google-cloud/language');

  // Instantiates a client
  const language = Language();

  // The text to analyze, e.g. "Hello, world!"
  // const text = 'Hello, world!';

  // Instantiates a Document, representing the provided text
  const document = {
    'content': text,
    type: 'PLAIN_TEXT'
  };

  // Detects entities in the document
  language.analyzeEntities({ document: document })
    .then((results) => {
      const entities = results[0].entities;

      console.log('Entities:');
      entities.forEach((entity) => {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        if (entity.metadata && entity.metadata.wikipedia_url) {
          console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
        }
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_entities_string]
}

function analyzeEntitiesInFile (bucketName, fileName) {
  // [START language_entities_file]
  // Imports the Google Cloud client libraries
  const Language = require('@google-cloud/language');

  // Instantiates the clients
  const language = Language();

  // The name of the bucket where the file resides, e.g. "my-bucket"
  // const bucketName = 'my-bucket';

  // The name of the file to analyze, e.g. "file.txt"
  // const fileName = 'file.txt';

  // Instantiates a Document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT'
  };

  // Detects entities in the document
  language.analyzeEntities({ document: document })
    .then((results) => {
      const entities = results[0].entities;

      console.log('Entities:');
      entities.forEach((entity) => {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        if (entity.metadata && entity.metadata.wikipedia_url) {
          console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
        }
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_entities_file]
}

function analyzeSyntaxOfText (text) {
  // [START language_syntax_string]
  // Imports the Google Cloud client library
  const Language = require('@google-cloud/language');

  // Instantiates a client
  const language = Language();

  // The text to analyze, e.g. "Hello, world!"
  // const text = 'Hello, world!';

  // Instantiates a Document, representing the provided text
  const document = {
    'content': text,
    type: 'PLAIN_TEXT'
  };

  // Detects syntax in the document
  language.analyzeSyntax({ document: document })
    .then((results) => {
      const syntax = results[0];

      console.log('Tokens:');
      syntax.tokens.forEach((part) => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log(`Morphology:`, part.partOfSpeech);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_syntax_string]
}

function analyzeSyntaxInFile (bucketName, fileName) {
  // [START language_syntax_file]
  // Imports the Google Cloud client libraries
  const Language = require('@google-cloud/language');

  // Instantiates the clients
  const language = Language();

  // The name of the bucket where the file resides, e.g. "my-bucket"
  // const bucketName = 'my-bucket';

  // The name of the file to analyze, e.g. "file.txt"
  // const fileName = 'file.txt';

  // Instantiates a Document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT'
  };

  // Detects syntax in the document
  language.analyzeSyntax({ document: document })
    .then((results) => {
      const syntax = results[0];

      console.log('Parts of speech:');
      syntax.tokens.forEach((part) => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log(`Morphology:`, part.partOfSpeech);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_syntax_file]
}

function analyzeEntitySentimentOfText (text) {
  // [START language_entity_sentiment_string]
  // Imports the Google Cloud client library
  const Language = require('@google-cloud/language');

  // Instantiates the clients
  const language = Language();

  // The text to analyze, e.g. "Hello, world!"
  // const text = 'Hello, world!';

  // Configure a request containing a string
  const request = {
    document: {
      type: 'PLAIN_TEXT',
      content: text
    }
  };

  // Detects sentiment of entities in the document
  language.analyzeEntitySentiment(request)
    .then((results) => {
      const entities = results[0].entities;

      console.log(`Entities and sentiments:`);
      entities.forEach((entity) => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_entity_sentiment_string]
}

function analyzeEntitySentimentInFile (bucketName, fileName) {
  // [START language_entity_sentiment_file]
  // Imports the Google Cloud client library
  const Language = require('@google-cloud/language');

  // Instantiates the clients
  const language = Language();

  // The name of the bucket where the file resides, e.g. "my-bucket"
  // const bucketName = 'my-bucket';

  // The name of the file to analyze, e.g. "file.txt"
  // const fileName = 'file.txt';

  // Configure a request containing a string
  const request = {
    document: {
      type: 'PLAIN_TEXT',
      gcsContentUri: `gs://${bucketName}/${fileName}`
    }
  };

  // Detects sentiment of entities in the document
  language.analyzeEntitySentiment(request)
    .then((results) => {
      const entities = results[0].entities;

      console.log(`Entities and sentiments:`);
      entities.forEach((entity) => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END language_entity_sentiment_file]
}

require(`yargs`) // eslint-disable-line
  .demand(1)
  .command(
    `sentiment-text <text>`,
    `Detects sentiment of a string.`,
    {},
    (opts) => analyzeSentimentOfText(opts.text)
  )
  .command(
    `sentiment-file <bucketName> <fileName>`,
    `Detects sentiment in a file in Google Cloud Storage.`,
    {},
    (opts) => analyzeSentimentInFile(opts.bucketName, opts.fileName)
  )
  .command(
    `entities-text <text>`,
    `Detects entities in a string.`,
    {},
    (opts) => analyzeEntitiesOfText(opts.text)
  )
  .command(
    `entities-file <bucketName> <fileName>`,
    `Detects entities in a file in Google Cloud Storage.`,
    {},
    (opts) => analyzeEntitiesInFile(opts.bucketName, opts.fileName)
  )
  .command(
    `syntax-text <text>`,
    `Detects syntax of a string.`,
    {},
    (opts) => analyzeSyntaxOfText(opts.text)
  )
  .command(
    `syntax-file <bucketName> <fileName>`,
    `Detects syntax in a file in Google Cloud Storage.`,
    {},
    (opts) => analyzeSyntaxInFile(opts.bucketName, opts.fileName)
  )
  .command(
    `entity-sentiment-text <text>`,
    `Detects sentiment of the entities in a string.`,
    {},
    (opts) => analyzeEntitySentimentOfText(opts.text)
  )
  .command(
    `entity-sentiment-file <bucketName> <fileName>`,
    `Detects sentiment of the entities in a file in Google Cloud Storage.`,
    {},
    (opts) => analyzeEntitySentimentInFile(opts.bucketName, opts.fileName)
  )
  .example(`node $0 sentiment-text "President Obama is speaking at the White House."`)
  .example(`node $0 sentiment-file my-bucket file.txt`, `Detects sentiment in gs://my-bucket/file.txt`)
  .example(`node $0 entities-text "President Obama is speaking at the White House."`)
  .example(`node $0 entities-file my-bucket file.txt`, `Detects entities in gs://my-bucket/file.txt`)
  .example(`node $0 syntax-text "President Obama is speaking at the White House."`)
  .example(`node $0 syntax-file my-bucket file.txt`, `Detects syntax in gs://my-bucket/file.txt`)
  .example(`node $0 entity-sentiment-text "President Obama is speaking at the White House."`)
  .example(`node $0 entity-sentiment-file my-bucket file.txt`, `Detects sentiment of entities in gs://my-bucket/file.txt`)
  .wrap(120)
  .epilogue(`For more information, see https://cloud.google.com/natural-language/docs`)
  .help()
  .argv;
