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

const models = require('./index');

/**
 * Details the service to which the subnet is delegated.
 *
 * @extends models['SubResource']
 */
class Delegation extends models['SubResource'] {
  /**
   * Create a Delegation.
   * @property {string} [serviceName] The name of the service to whom the
   * subnet should be delegated (e.g. Microsoft.Sql/servers)
   * @property {array} [actions] Describes the actions permitted to the service
   * upon delegation
   * @property {string} [provisioningState] The provisioning state of the
   * resource.
   * @property {string} [name] The name of the resource that is unique within a
   * subnet. This name can be used to access the resource.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Delegation
   *
   * @returns {object} metadata of Delegation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Delegation',
      type: {
        name: 'Composite',
        className: 'Delegation',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'properties.serviceName',
            type: {
              name: 'String'
            }
          },
          actions: {
            required: false,
            serializedName: 'properties.actions',
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
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Delegation;
