import React from 'react';

const Social: React.FC = () => {
  return (
    <div className="social flex flex-col gap-4">
      <h2>Gyűjtőpont megosztása</h2>
      <div className="icons flex flex-row gap-x-4">
        {/* FACEBOOK */}
        <div className="social-icon facebook">
          <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.29788 22.75H6.39165V11.5055H9.46273L10.0701 7.992H6.39165V5.446C6.39165 4.62525 6.92235 3.7635 7.68082 3.7635H9.77141V0.25H7.20931V0.26575C3.20045 0.41125 2.3768 2.733 2.30538 5.17175H2.29788V7.992H0.25V11.5055H2.29788V22.75Z"
              fill="#3B5998"
            />
          </svg>
        </div>
        {/* MAIL */}
        <div className="social-icon mail">
          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.3984 0.371094H2.89844C1.59344 0.371094 0.658937 1.29922 0.648438 2.62109V14.6211C0.648438 15.943 1.59344 16.8711 2.89844 16.8711H19.3984C20.7034 16.8711 21.6484 15.943 21.6484 14.6211V2.62109C21.6484 1.29922 20.7034 0.371094 19.3984 0.371094ZM19.3984 4.87109L11.1484 10.1211L2.89844 4.87109V2.62109L11.1484 7.87109L19.3984 2.62109V4.87109Z"
              fill="#888888"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Social;
