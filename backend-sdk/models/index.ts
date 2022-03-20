/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AidCenter
 */
export interface AidCenter {
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    readonly id?: string;
    /**
     * 
     * @type {AidCenterOrganization}
     * @memberof AidCenter
     */
    organization: AidCenterOrganization;
    /**
     * 
     * @type {AidCenterOrganizationContact}
     * @memberof AidCenter
     */
    contact: AidCenterOrganizationContact;
    /**
     * 
     * @type {object}
     * @memberof AidCenter
     */
    geoLocation: object;
    /**
     * 
     * @type {Array<AidCenterAssetsRequested>}
     * @memberof AidCenter
     */
    readonly assetsRequested?: Array<AidCenterAssetsRequested>;
    /**
     * 
     * @type {Array<AidCenterAssetsRequested>}
     * @memberof AidCenter
     */
    readonly assetsFulfilled?: Array<AidCenterAssetsRequested>;
    /**
     * 
     * @type {Array<AidCenterAssetsRequested>}
     * @memberof AidCenter
     */
    readonly assetsOverloaded?: Array<AidCenterAssetsRequested>;
    /**
     * 
     * @type {object}
     * @memberof AidCenter
     */
    readonly feed?: object;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    slug: string;
    /**
     * 
     * @type {Blob}
     * @memberof AidCenter
     */
    photo?: Blob;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    callRequired?: AidCenterCallRequiredEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AidCenter
     */
    moneyAccepted?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    moneyDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenter
     */
    campaignEndingOn?: string | null;
}

/**
* @export
* @enum {string}
*/
export enum AidCenterCallRequiredEnum {
    Required = 'required',
    Suggested = 'suggested',
    Denied = 'denied'
}
/**
 * 
 * @export
 * @interface AidCenterAssetsRequested
 */
export interface AidCenterAssetsRequested {
    /**
     * 
     * @type {string}
     * @memberof AidCenterAssetsRequested
     */
    readonly id?: string;
    /**
     * 
     * @type {AidCenterCategory}
     * @memberof AidCenterAssetsRequested
     */
    category: AidCenterCategory;
    /**
     * 
     * @type {string}
     * @memberof AidCenterAssetsRequested
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterAssetsRequested
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterAssetsRequested
     */
    icon?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AidCenterAssetsRequested
     */
    isUrgent: boolean;
    /**
     * 
     * @type {string}
     * @memberof AidCenterAssetsRequested
     */
    status?: AidCenterAssetsRequestedStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum AidCenterAssetsRequestedStatusEnum {
    Requested = 'requested',
    Fulfilled = 'fulfilled',
    Overloaded = 'overloaded'
}
/**
 * 
 * @export
 * @interface AidCenterCategory
 */
export interface AidCenterCategory {
    /**
     * 
     * @type {string}
     * @memberof AidCenterCategory
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterCategory
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterCategory
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterCategory
     */
    parent?: string | null;
}
/**
 * 
 * @export
 * @interface AidCenterOrganization
 */
export interface AidCenterOrganization {
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganization
     */
    readonly id?: string;
    /**
     * 
     * @type {AidCenterOrganizationContact}
     * @memberof AidCenterOrganization
     */
    contact: AidCenterOrganizationContact;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganization
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganization
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganization
     */
    slug: string;
}
/**
 * 
 * @export
 * @interface AidCenterOrganizationContact
 */
export interface AidCenterOrganizationContact {
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    facebook?: string;
    /**
     * 
     * @type {string}
     * @memberof AidCenterOrganizationContact
     */
    url?: string;
}
