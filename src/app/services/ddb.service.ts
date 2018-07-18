import { Injectable } from '@angular/core';
import { CognitoUtil } from './cognito.service';
import { environment } from '../../environments/environment';

import { Stuff } from '../secure/user-activity/user-activity.component';
import * as AWS from 'aws-sdk/global';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';

/**
 * Created by Vladimir Budilov
 */

@Injectable({
  providedIn: 'root'
})
export class DynamoDBService {

  constructor(public cognitoUtil: CognitoUtil) {
    console.log('DynamoDBService: constructor');
  }

  getAWS() {
    return AWS;
  }

  getLogEntries(mapArray: Array<Stuff>) {
    console.log('DynamoDBService: reading from DDB with creds - ' + AWS.config.credentials);
    const params = {
      TableName: environment.dynamo.tableName,
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': this.cognitoUtil.getCognitoIdentity()
      }
    };

    const clientParams: any = {};
    if (environment.dynamo.endpoint) {
      clientParams.endpoint = environment.dynamo.endpoint;
    }
    const docClient = new DynamoDB.DocumentClient(clientParams);
    docClient.query(params, onQuery);

    function onQuery(err, data) {
      if (err) {
        console.error('DynamoDBService: Unable to query the table. Error JSON:', JSON.stringify(err, null, 2));
      } else {
        // print all the movies
        console.log('DynamoDBService: Query succeeded.');
        data.Items.forEach(function (logitem) {
          mapArray.push({ type: logitem.type, date: logitem.activityDate });
        });
      }
    }
  }

  writeLogEntry(type: string) {
    try {
      const date = new Date().toString();
      console.log('DynamoDBService: Writing log entry. Type:' + type + ' ID: ' + this.cognitoUtil.getCognitoIdentity() + ' Date: ' + date);
      this.write(this.cognitoUtil.getCognitoIdentity(), date, type);
    } catch (exc) {
      console.log('DynamoDBService: Couldn\'t write to DDB');
    }
  }

  write(data: string, date: string, type: string): void {
    console.log('DynamoDBService: writing ' + type + ' entry');

    const clientParams: any = {
      params: { TableName: environment.dynamo.tableName }
    };
    if (environment.dynamo.endpoint) {
      clientParams.endpoint = environment.dynamo.endpoint;
    }
    const DDB = new DynamoDB(clientParams);

    // Write the item to the table
    const itemParams = {
      TableName: environment.dynamo.tableName,
      Item: {
        userId: { S: data },
        activityDate: { S: date },
        type: { S: type }
      }
    };
    DDB.putItem(itemParams, function (result) {
      console.log('DynamoDBService: wrote entry: ' + JSON.stringify(result));
    });
  }
}
