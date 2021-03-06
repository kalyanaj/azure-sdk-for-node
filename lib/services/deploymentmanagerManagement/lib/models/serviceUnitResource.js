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
 * Represents the response of a service unit resource.
 *
 * @extends models['TrackedResource']
 */
class ServiceUnitResource extends models['TrackedResource'] {
  /**
   * Create a ServiceUnitResource.
   * @member {string} targetResourceGroup The Azure Resource Group to which the
   * resources in the service unit belong to or should be deployed to.
   * @member {string} deploymentMode Describes the type of ARM deployment to be
   * performed on the resource. Possible values include: 'Incremental',
   * 'Complete'
   * @member {object} [artifacts] The artifacts for the service unit.
   * @member {string} [artifacts.templateUri] The full URI of the ARM template
   * file with the SAS token.
   * @member {string} [artifacts.parametersUri] The full URI of the ARM
   * parameters file with the SAS token.
   * @member {string} [artifacts.templateArtifactSourceRelativePath] The path
   * to the ARM template file relative to the artifact source.
   * @member {string} [artifacts.parametersArtifactSourceRelativePath] The path
   * to the ARM parameters file relative to the artifact source.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceUnitResource
   *
   * @returns {object} metadata of ServiceUnitResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceUnitResource',
      type: {
        name: 'Composite',
        className: 'ServiceUnitResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          targetResourceGroup: {
            required: true,
            serializedName: 'properties.targetResourceGroup',
            type: {
              name: 'String'
            }
          },
          deploymentMode: {
            required: true,
            serializedName: 'properties.deploymentMode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Incremental', 'Complete' ]
            }
          },
          artifacts: {
            required: false,
            serializedName: 'properties.artifacts',
            type: {
              name: 'Composite',
              className: 'ServiceUnitArtifacts'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceUnitResource;
