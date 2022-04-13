import React from 'react';
import { AidCenterAssetsRequested } from 'backend-sdk';
import { SearchIcon } from 'react-line-awesome';

const RequestItem: React.FC<AidCenterAssetsRequested> = (props) => {
  const { name, note, isUrgent } = props;
  return (
    <div className="item relative flex flex-row gap-x-4  items-center">
      <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
        <div className="slab h-[1px] w-[38px] absolute t-16.5 l-0 bg-[#999999] rotate-45"></div>
        <SearchIcon className="text-gray-400 top-5 left-4" />
      </div>
      <svg
        className="absolute w-35 h-35 left-[27px] top-[2px]"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isUrgent && (
          <path
            d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
            fill="#EC4646"
          />
        )}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 13.2632C10.459 13.2632 13.2632 10.459 13.2632 7C13.2632 3.54095 10.459 0.736842 7 0.736842C3.54095 0.736842 0.736842 3.54095 0.736842 7C0.736842 10.459 3.54095 13.2632 7 13.2632ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="white"
        />
        <path
          d="M8.11252 3.00293L7.85831 7.78872H6.28883L6.03462 3.00293H8.11252ZM7.07357 8.7503C7.36831 8.7503 7.61883 8.85714 7.82515 9.07082C8.03883 9.27714 8.14568 9.52767 8.14568 9.8224C8.14568 10.1171 8.03883 10.3677 7.82515 10.574C7.61883 10.7803 7.36831 10.8835 7.07357 10.8835C6.77883 10.8835 6.52462 10.7803 6.31094 10.574C6.10462 10.3677 6.00146 10.1171 6.00146 9.8224C6.00146 9.52767 6.10462 9.27714 6.31094 9.07082C6.52462 8.85714 6.77883 8.7503 7.07357 8.7503Z"
          fill="white"
        />
      </svg>

      <div className="flex flex-col">
        <p>{name}</p>
        <p className="item-note text-sm opacity-60">{note}</p>
      </div>
    </div>
  );
};

export default RequestItem;
