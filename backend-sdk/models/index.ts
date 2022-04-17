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
  readonly assetsUrgent?: Array<AidCenterAssetsRequested>;
  /**
   *
   * @type {Array<AidCenterAssetsRequested>}
   * @memberof AidCenter
   */
  readonly assetsFulfilled?: Array<AidCenterAssetsRequested>;
  /**
   *
   * @type {Array<AidCenterFeed>}
   * @memberof AidCenter
   */
  readonly feed?: Array<AidCenterFeed>;
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
  Denied = 'denied',
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
   * @type {AidCenterType}
   * @memberof AidCenterAssetsRequested
   */
  type: AidCenterType;
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
  status: AidCenterAssetsRequestedStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum AidCenterAssetsRequestedStatusEnum {
  Requested = 'requested',
  Urgent = 'urgent',
  Fulfilled = 'fulfilled',
}
/**
 *
 * @export
 * @interface AidCenterFeed
 */
export interface AidCenterFeed {
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  readonly id?: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  aidCenterName: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  aidCenterSlug: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  note?: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  icon?: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  readonly timestamp?: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  statusOld?: string | null;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  statusNew?: string | null;
  /**
   *
   * @type {string}
   * @memberof AidCenterFeed
   */
  assetRequest?: string | null;
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
/**
 *
 * @export
 * @interface AidCenterType
 */
export interface AidCenterType {
  /**
   *
   * @type {string}
   * @memberof AidCenterType
   */
  readonly id?: string;
  /**
   *
   * @type {AidCenterTypeCategory}
   * @memberof AidCenterType
   */
  category: AidCenterTypeCategory;
  /**
   *
   * @type {string}
   * @memberof AidCenterType
   */
  icon: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterType
   */
  readonly name?: string;
}
/**
 *
 * @export
 * @interface AidCenterTypeCategory
 */
export interface AidCenterTypeCategory {
  /**
   *
   * @type {string}
   * @memberof AidCenterTypeCategory
   */
  readonly name?: string;
  /**
   *
   * @type {string}
   * @memberof AidCenterTypeCategory
   */
  readonly icon?: string;
}
/**
 *
 * @export
 * @interface FeedItem
 */
export interface FeedItem {
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  readonly id?: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  aidCenterName: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  aidCenterSlug: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  note?: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  icon?: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  readonly timestamp?: string;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  statusOld?: string | null;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  statusNew?: string | null;
  /**
   *
   * @type {string}
   * @memberof FeedItem
   */
  assetRequest?: string | null;
}
