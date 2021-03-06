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
 * List of available SKUs for a new Kusto Cluster.
 */
class ListSkusResult extends Array {
  /**
   * Create a ListSkusResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ListSkusResult
   *
   * @returns {object} metadata of ListSkusResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListSkusResult',
      type: {
        name: 'Composite',
        className: 'ListSkusResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureSkuElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureSku'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListSkusResult;
