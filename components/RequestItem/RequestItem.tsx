import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';



const RequestItem: React.FC = () => {
  return (
    <div className="item flex flex-row gap-x-4  items-center">
        <div className="icon relative h-[38px]  w-[38px] flex items-center justify-center border border-[#303b5966] rounded-full">
            <div className="slab h-[1px] w-[38px] absolute t-16.5 l-0 bg-[#999999] rotate-45"></div>
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
        </div>
        <div className='flex flex-col'>
            <p>Item name</p>
            <p className='item-note text-sm opacity-60'>Item note</p>
        </div>
    </div>
  );
};

export default RequestItem;
