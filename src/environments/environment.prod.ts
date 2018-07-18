export const environment = {
  production: true,

  cognito: {
    userPoolId: 'us-east-1_rudJpkyMo',
    userPoolClientId: '5542quf681g2204fo6jgbe8s9q',
    identityPoolId: '',
    region: 'us-east-1',
    idp_endpoint: '',
    identity_endpoint: '',
  },
  api: {
    invokeUrl: '', // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod'
  },
  dynamo: {
    tableName: 'LoginTrail',
    endpoint: '',
  },
  s3: {
    endpoint: '',
    rekognitionBucket: 'rekognition-pics',
    albumName: 'usercontent',
    bucketRegion: 'us-east-1',
  },
  sts_endpoint: '',
};
