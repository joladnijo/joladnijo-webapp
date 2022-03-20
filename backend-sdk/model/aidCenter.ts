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
import { AidCenterAssetsRequested } from './aidCenterAssetsRequested';
import { AidCenterOrganization } from './aidCenterOrganization';
import { AidCenterOrganizationContact } from './aidCenterOrganizationContact';

export class AidCenter {
    'id'?: string;
    'organization': AidCenterOrganization;
    'contact': AidCenterOrganizationContact;
    'geoLocation': object;
    'assetsRequested'?: Array<AidCenterAssetsRequested>;
    'assetsFulfilled'?: Array<AidCenterAssetsRequested>;
    'assetsOverloaded'?: Array<AidCenterAssetsRequested>;
    'feed'?: object;
    'note'?: string;
    'name': string;
    'slug': string;
    'photo'?: RequestFile;
    'countryCode': string;
    'postalCode': string;
    'city': string;
    'address': string;
    'callRequired'?: AidCenter.CallRequiredEnum;
    'moneyAccepted'?: boolean | null;
    'moneyDescription'?: string;
    'campaignEndingOn'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "AidCenterOrganization"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "AidCenterOrganizationContact"
        },
        {
            "name": "geoLocation",
            "baseName": "geo_location",
            "type": "object"
        },
        {
            "name": "assetsRequested",
            "baseName": "assets_requested",
            "type": "Array<AidCenterAssetsRequested>"
        },
        {
            "name": "assetsFulfilled",
            "baseName": "assets_fulfilled",
            "type": "Array<AidCenterAssetsRequested>"
        },
        {
            "name": "assetsOverloaded",
            "baseName": "assets_overloaded",
            "type": "Array<AidCenterAssetsRequested>"
        },
        {
            "name": "feed",
            "baseName": "feed",
            "type": "object"
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
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "photo",
            "baseName": "photo",
            "type": "RequestFile"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "callRequired",
            "baseName": "call_required",
            "type": "AidCenter.CallRequiredEnum"
        },
        {
            "name": "moneyAccepted",
            "baseName": "money_accepted",
            "type": "boolean"
        },
        {
            "name": "moneyDescription",
            "baseName": "money_description",
            "type": "string"
        },
        {
            "name": "campaignEndingOn",
            "baseName": "campaign_ending_on",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AidCenter.attributeTypeMap;
    }
}

export namespace AidCenter {
    export enum CallRequiredEnum {
        Required = <any> 'required',
        Suggested = <any> 'suggested',
        Denied = <any> 'denied'
    }
}
