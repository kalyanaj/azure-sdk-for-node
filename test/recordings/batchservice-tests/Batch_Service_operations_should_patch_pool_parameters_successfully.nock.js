// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/pools/nodesdktestpool1?api-version=2018-12-01.8.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:29:03 GMT',
  etag: '0x8D65F9686C8060D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fe1a22a6-9557-4ab1-93be-f439c5a14ab8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  date: 'Tue, 11 Dec 2018 18:29:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/pools/nodesdktestpool1?api-version=2018-12-01.8.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:29:03 GMT',
  etag: '0x8D65F9686C8060D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fe1a22a6-9557-4ab1-93be-f439c5a14ab8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  date: 'Tue, 11 Dec 2018 18:29:03 GMT',
  connection: 'close' });
 return result; }]];