// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_COMPUTER_VISION_KEY'] = 'dummy';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://westus.api.cognitive.microsoft.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/vision/v1.0/recognizeText?detectHandwriting=false', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'operation-location': 'https://westus.api.cognitive.microsoft.com/vision/v1.0/textOperations/59af55bf-2e0e-43f7-a4aa-ec0b8e2ae978',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'apim-request-id': '537a1743-3545-4372-9378-94db04de93dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 11 Nov 2017 00:32:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://westus.api.cognitive.microsoft.com:443')
  .get('/vision/v1.0/textOperations/59af55bf-2e0e-43f7-a4aa-ec0b8e2ae978')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'apim-request-id': '564d0851-919e-4e6d-ae46-bb84b7059b0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 11 Nov 2017 00:32:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://westus.api.cognitive.microsoft.com:443')
  .get('/vision/v1.0/textOperations/59af55bf-2e0e-43f7-a4aa-ec0b8e2ae978')
  .reply(200, "{\"status\":\"Succeeded\",\"recognitionResult\":{\"lines\":[{\"boundingBox\":[64,55,445,58,444,120,63,118],\"text\":\"I Love You\",\"words\":[{\"boundingBox\":[65,58,110,58,110,122,65,122],\"text\":\"I\"},{\"boundingBox\":[88,58,293,58,293,122,89,122],\"text\":\"Love\"},{\"boundingBox\":[279,58,455,58,455,122,279,122],\"text\":\"You\"}]}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '308',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'apim-request-id': '3d476975-e35c-4e56-b600-25aa14bbccde',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 11 Nov 2017 00:32:08 GMT',
  connection: 'close' });
 return result; }]];