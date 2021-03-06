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
 * The content link.
 *
 */
class ContentLink {
  /**
   * Create a ContentLink.
   * @property {string} [uri] The content link URI.
   * @property {string} [contentVersion] The content version.
   * @property {number} [contentSize] The content size.
   * @property {object} [contentHash] The content hash.
   * @property {string} [contentHash.algorithm] The algorithm of the content
   * hash.
   * @property {string} [contentHash.value] The value of the content hash.
   * @property {object} [metadata] The metadata.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentLink
   *
   * @returns {object} metadata of ContentLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentLink',
      type: {
        name: 'Composite',
        className: 'ContentLink',
        modelProperties: {
          uri: {
            required: false,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          },
          contentVersion: {
            required: false,
            serializedName: 'contentVersion',
            type: {
              name: 'String'
            }
          },
          contentSize: {
            required: false,
            serializedName: 'contentSize',
            type: {
              name: 'Number'
            }
          },
          contentHash: {
            required: false,
            serializedName: 'contentHash',
            type: {
              name: 'Composite',
              className: 'ContentHash'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentLink;
