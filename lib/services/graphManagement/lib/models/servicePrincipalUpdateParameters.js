/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Request parameters for creating a new service principal.
 *
 */
class ServicePrincipalUpdateParameters {
  /**
   * Create a ServicePrincipalUpdateParameters.
   * @member {boolean} [accountEnabled] Whether the account is enabled
   * @member {string} [appId] application Id
   * @member {boolean} [appRoleAssignmentRequired] Specifies whether an
   * AppRoleAssignment to a user or group is required before Azure AD will
   * issue a user or access token to the application.
   * @member {string} [displayName] The display name for the service principal.
   * @member {string} [errorUrl]
   * @member {string} [homepage] The URL to the homepage of the associated
   * application.
   * @member {array} [keyCredentials] A collection of KeyCredential objects.
   * @member {array} [passwordCredentials] A collection of PasswordCredential
   * objects
   * @member {string} [publisherName] The display name of the tenant in which
   * the associated application is specified.
   * @member {array} [replyUrls] A collection of reply URLs for the service
   * principal.
   * @member {string} [samlMetadataUrl]
   * @member {array} [servicePrincipalNames] A collection of service principal
   * names.
   * @member {array} [tags]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServicePrincipalUpdateParameters
   *
   * @returns {object} metadata of ServicePrincipalUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServicePrincipalUpdateParameters',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ObjectElementType',
                type: {
                  name: 'Object'
                }
            }
          }
        },
        className: 'ServicePrincipalUpdateParameters',
        modelProperties: {
          accountEnabled: {
            required: false,
            serializedName: 'accountEnabled',
            type: {
              name: 'Boolean'
            }
          },
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          appRoleAssignmentRequired: {
            required: false,
            serializedName: 'appRoleAssignmentRequired',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          errorUrl: {
            required: false,
            serializedName: 'errorUrl',
            type: {
              name: 'String'
            }
          },
          homepage: {
            required: false,
            serializedName: 'homepage',
            type: {
              name: 'String'
            }
          },
          keyCredentials: {
            required: false,
            serializedName: 'keyCredentials',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyCredentialElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'KeyCredential'
                  }
              }
            }
          },
          passwordCredentials: {
            required: false,
            serializedName: 'passwordCredentials',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PasswordCredentialElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'PasswordCredential'
                  }
              }
            }
          },
          publisherName: {
            required: false,
            serializedName: 'publisherName',
            type: {
              name: 'String'
            }
          },
          replyUrls: {
            required: false,
            serializedName: 'replyUrls',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          samlMetadataUrl: {
            required: false,
            serializedName: 'samlMetadataUrl',
            type: {
              name: 'String'
            }
          },
          servicePrincipalNames: {
            required: false,
            serializedName: 'servicePrincipalNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServicePrincipalUpdateParameters;
