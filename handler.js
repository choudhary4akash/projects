'use strict';

'use strict';

module.exports. = async (event) => {
  const queryParams = event.queryStringParameters;
  const name = queryParams && queryParams.name ? queryParams.name : 'World';
  const message = `Hello, ${name}!`;

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};


module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is response for the hello event',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.home= async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is suppose Message fo home',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
