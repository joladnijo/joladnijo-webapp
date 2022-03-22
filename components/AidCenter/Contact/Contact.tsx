import React from 'react';
import { AidCenter } from 'backend-sdk';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const Contact: React.FC<AidCenter> = ({ address, postalCode, city, contact }) => {
  const phone = contact?.phone;
  return (
    <div className="info-box bg-[#F8F8F8] rounded-[20px] overflow-hidden	">
      {/* <div className="map min-h-3 bg-gray-300 bg-[#F8F8F8] h-[140px]"></div> */}
      <div className="info flex flex-col gap-4 p-6">
        <h2>Kapcsolat</h2>
        <div className="contact-items flex flex-col gap-3">
          <div className="item address flex flex-row items-center gap-4">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
            <p>
              {postalCode} {city}, {address}
            </p>
          </div>
          {phone && (
            <div className="item phone flex flex-row items-center gap-4">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 top-5 left-4" />
              <p>{phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
