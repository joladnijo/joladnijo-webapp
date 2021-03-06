import React from 'react';
import { FeedItemGroup } from 'lib/models';
import FeedItemRow from '@/components/FeedItemRow';
import Link from 'next/link';

const AidCenterContainer: React.FC<FeedItemGroup> = (props) => {
  const { feedItems, aidCenterName, aidCenterSlug } = props;
  return (
    <div className="aid-center-container w-full bg-white min-h-[100px] rounded-[20px] p-[20px] mb-[25px]">
      <div className="aid-center-header flex gap-4 items-center md:items-start">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 3C0 1.34315 1.34315 0 3 0H43C44.6569 0 46 1.34315 46 3V43C46 44.6569 44.6569 46 43 46H3C1.34315 46 0 44.6569 0 43V3Z"
            fill="#63A6AF"
          />
          <path
            d="M30.15 26.3009H24.1V22.4509C24.1 22.1484 23.8525 21.9009 23.55 21.9009H15.85C15.5475 21.9009 15.3 22.1484 15.3 22.4509V31.2509C15.3 31.5534 15.5475 31.8009 15.85 31.8009H30.15C30.4525 31.8009 30.7 31.5534 30.7 31.2509V26.8509C30.7 26.5484 30.4525 26.3009 30.15 26.3009ZM23 30.7009H16.4V27.4009H23V30.7009ZM23 26.3009H16.4V23.0009H23V26.3009ZM29.6 30.7009H24.1V27.4009H29.6V30.7009ZM32.9894 18.2675L23.6394 14.3281C23.2338 14.1562 22.7697 14.1562 22.3606 14.3281L13.0106 18.2675C12.3953 18.5253 12 19.1234 12 19.7869V31.5259C12 31.6772 12.1237 31.8009 12.275 31.8009H12.825C12.9763 31.8009 13.1 31.6772 13.1 31.5259V19.7869C13.1 19.5634 13.2306 19.3675 13.4369 19.2781L22.7869 15.3387C22.9209 15.2803 23.0791 15.2803 23.2131 15.3387L32.5631 19.2781C32.7694 19.3641 32.9 19.5634 32.9 19.7869V31.5259C32.9 31.6772 33.0238 31.8009 33.175 31.8009H33.725C33.8763 31.8009 34 31.6772 34 31.5259V19.7869C34 19.1234 33.6047 18.5253 32.9894 18.2675V18.2675Z"
            fill="white"
          />
        </svg>
        <div className="text flex items-start gap-4">
          <h2 className="text-base">{aidCenterName}</h2>
          <p>·</p>
          <h2 className="opacity-40 font-normal text-base">1 órája</h2>
        </div>
      </div>
      <div className="request-item-row-holder mt-[15px] md:mt-[-10px] md:pl-[60px] -my-4 mb-0">
        {feedItems.map((item) => (
          <FeedItemRow key={item.id} {...item} />
        ))}
      </div>
      <div className="button-holder md:pl-[60px] w-full flex justify-center">
        <Link href={`/aid-centers/${encodeURIComponent(aidCenterSlug)}`} passHref={true}>
          <a>
            <button
              type="button"
              className="py-3 px-6 mt-[20px] hover:bg-slate-100 focus:ring-bg-slate-10 focus:ring-offset-bg-slate-50 transition ease-in duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 border rounded-full border-slate-300 text-base font-normal flex items-center gap-[10px] normal-case"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 3.375C7.13901 3.375 5.625 4.88901 5.625 6.75C5.625 8.611 7.13901 10.125 9 10.125C10.861 10.125 12.375 8.611 12.375 6.75C12.375 4.88901 10.861 3.375 9 3.375ZM9 9C7.75934 9 6.75 7.99067 6.75 6.75C6.75 5.50934 7.75934 4.5 9 4.5C10.2407 4.5 11.25 5.50934 11.25 6.75C11.25 7.99067 10.2407 9 9 9ZM9 0C5.27207 0 2.25 3.02207 2.25 6.75C2.25 9.47156 3.19816 10.2316 8.3063 17.6368C8.64148 18.121 9.35849 18.1211 9.69374 17.6368C14.8018 10.2316 15.75 9.47156 15.75 6.75C15.75 3.02207 12.7279 0 9 0ZM9 16.6616C4.10291 9.57966 3.375 9.01737 3.375 6.75C3.375 5.2475 3.96011 3.83495 5.02253 2.77253C6.08495 1.71011 7.4975 1.125 9 1.125C10.5025 1.125 11.9151 1.71011 12.9775 2.77253C14.0399 3.83495 14.625 5.2475 14.625 6.75C14.625 9.01723 13.8976 9.57903 9 16.6616Z"
                  fill="#090015"
                />
              </svg>
              Elérhetőség
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AidCenterContainer;
