// @ts-nocheck
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AidCenterCategory } from './aidCenterCategory';

export class AidCenterAssetsRequested {
    'id'?: string;
    'category': AidCenterCategory;
    'note'?: string;
    'name': string;
    'icon'?: string;
    'isUrgent': boolean;
    'status'?: AidCenterAssetsRequested.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "AidCenterCategory"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "isUrgent",
            "baseName": "is_urgent",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AidCenterAssetsRequested.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return AidCenterAssetsRequested.attributeTypeMap;
    }
}

export namespace AidCenterAssetsRequested {
    export enum StatusEnum {
        Requested = <any> 'requested',
        Fulfilled = <any> 'fulfilled',
        Overloaded = <any> 'overloaded'
    }
}
