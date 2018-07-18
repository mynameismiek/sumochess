export const environment = {
  production: true,

  cognito: {
    userPoolId: 'us-east-1_rudJpkyMo',
    userPoolClientId: '5742kd9njvj6fmmc2nbb9v48o1',
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
