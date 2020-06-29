# Serverless Hit Counter

A generic hit counter that returns the total count of visits the sites have accrued thus far. This single function can accommodate multiple sites and paths.

## Usage

This script needs to simply be set up as a serverless function on AWS Lambda. The incoming call from API Gateway will send various bits of information about the request. We are most concerned with the `domainName` and `path`, as we'll use these to create the unique key in the database. The benefit of this approach is that this single function can be utilized by various endpoints and sites to keep track of their visitors.

A DynamoDB table must be created to house the hit counts. The table name will be provided as an environment variable.

Create an API Gateway endpoint that calls this function. Be sure to enable Lambda proxy integration.

This function will return the current count.

## Environment Variables

Key         |Value                |
------------|---------------------|
DYNAMO_TABLE|<database-table-name>|