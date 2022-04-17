import { FeedItem } from 'backend-sdk/models';

export interface FeedItemGroup {
  aidCenterSlug: string;
  aidCenterName: string;
  feedItems: FeedItem[];
}
