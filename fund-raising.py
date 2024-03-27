import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('fund-raising-table')

def lambda_handler(event, context):
    # Get request body
    print(event)

    # Create new item in DynamoDB table
    response = table.put_item(
        Item={
            'fname' : event['fname'],
            'lname': event['lname'],
            'course': event['course'],
            'batch': event['batch'],
            'job': event['job'],
            'company': event['company'],
            'email': event['email'],
            'phone': event['phone'],
            'golden': event['golden'],
            'silver': event['silver'],
            'amount': event['amount']
        }
    )

    # Return response
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'message': 'Submission successful'})
    }