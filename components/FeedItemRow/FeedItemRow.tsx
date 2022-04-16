import React from 'react';
import RequestItem from '../RequestItem';
import Image from 'next/image';

import urgentSvg from '../../public/images/urgent.svg';
import { AidCenterAssetsRequestedStatusEnum, FeedItem } from 'backend-sdk/models';

type FeedItemRowProps = FeedItem;

const FeedItemRow: React.FC<FeedItemRowProps> = (props) => {
  const { statusNew } = props;
  const isUrgent = statusNew === AidCenterAssetsRequestedStatusEnum.Urgent;
  return (
    <div className="request-item-row flex-col md:flex-row gap-y-[10px] px-[15px] py-[10px] border rounded-[10px] border-slate-300	flex justify-between">
      <RequestItem {...props} status={statusNew as AidCenterAssetsRequestedStatusEnum} />
      <div className="request-item-info flex items-center gap-[2rem] md:gap-[3rem] justify-end">
        {isUrgent && (
          <div className="urgent flex gap-[10px] items-center">
            <Image src={urgentSvg} alt="it's urgent" layout="fixed" objectFit="cover" />
            <h2 className="text-base text-red">Sürgős</h2>
          </div>
        )}

        <h2 className="text-base opacity-40 font-normal"> 4 napja</h2>
      </div>
    </div>
  );
};

export default FeedItemRow;
