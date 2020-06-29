const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()
const log = console.log

exports.handler = async(event) => {
    // extract domain from event
    const { requestContext: { domainName, path } } = event

    const domain = `${domainName}${path}`

    const count = await dynamodb.updateItem({
        TableName: process.env.DYNAMO_TABLE,
        Key: { path: { S: domain } },
        UpdateExpression: 'ADD hits :incr',
        ExpressionAttributeValues: { ':incr': { N: '1' } },
        ReturnValues: 'UPDATED_NEW'
    }).promise()

    const response = {
        statusCode: 200,
        body: count
    };
    return response;
};