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
 * @summary Contains information about an application in an Azure Batch
 * account.
  *
 */
class ApplicationSummary {
  /**
   * Create a ApplicationSummary.
   * @property {string} id A string that uniquely identifies the application
   * within the account.
   * @property {string} displayName The display name for the application.
   * @property {array} versions The list of available versions of the
   * application.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationSummary
   *
   * @returns {object} metadata of ApplicationSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationSummary',
      type: {
        name: 'Composite',
        className: 'ApplicationSummary',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          versions: {
            required: true,
            serializedName: 'versions',
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

module.exports = ApplicationSummary;
