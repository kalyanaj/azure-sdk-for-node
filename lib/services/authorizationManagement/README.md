---
uid: azure-arm-authorization
summary: *content

---
**This SDK will be deprecated next year and will be replaced by a new TypeScript-based isomorphic SDK (found at https://github.com/Azure/azure-sdk-for-js) which works on Node.js and browsers.**
## Microsoft Azure SDK for Node.js - AuthorizationManagementClient
This project provides a Node.js package for accessing Azure. Right now it supports:
- **Node.js version 6.x.x or higher**

### Features


### How to Install

```bash
npm install azure-arm-authorization
```

### How to use

#### Authentication, client creation and list classicAdministrators as an example.

```javascript
const msRestAzure = require("ms-rest-azure");
const AuthorizationManagementClient = require("azure-arm-authorization");
msRestAzure.interactiveLogin().then((creds) => {
    const subscriptionId = "<Subscription_Id>";
    const client = new AuthorizationManagementClient(creds, subscriptionId);
    return client.classicAdministrators.list().then((result) => {
      console.log("The result is:");
      console.log(result);
    });
}).catch((err) => {
  console.log('An error occurred:');
  console.dir(err, {depth: null, colors: true});
});

### Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)


![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-node%2Flib%2Fservices%2FauthorizationManagement%2FREADME.png)
