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
 * SKU of a load balancer
 *
 */
class LoadBalancerSku {
  /**
   * Create a LoadBalancerSku.
   * @property {string} [name] Name of a load balancer SKU. Possible values
   * include: 'Basic', 'Standard'
   */
  constructor() {
  }

  /**
   * Defines the metadata of LoadBalancerSku
   *
   * @returns {object} metadata of LoadBalancerSku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LoadBalancerSku',
      type: {
        name: 'Composite',
        className: 'LoadBalancerSku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LoadBalancerSku;
