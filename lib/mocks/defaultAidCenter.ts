import { AidCenter } from 'backend-sdk/api';

export const defaultAidCenter: AidCenter = {
  address: 'address',
  city: 'city',
  contact: {
    email: 'email',
    name: 'name',
  },
  countryCode: 'countryCode',
  geoLocation: {},
  name: 'name',
  organization: {
    id: 'organizationId',
    name: 'organizationName',
    contact: { email: 'organizationEmail', name: 'contactName' },
    slug: 'organizationSlug',
  },
  postalCode: 'postalCode',
  slug: 'slug',
};
