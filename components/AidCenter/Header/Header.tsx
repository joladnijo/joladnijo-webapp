import { AidCenter } from 'backend-sdk';
import React from 'react';

const Header: React.FC<AidCenter> = ({ name, organization }) => {
  const { name: organizationName } = organization;
  return (
    <div className="header container mx-auto bg-accent-dark bg-cover bg-hero h-80 max-w-5xl flex items-end relative">
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 from-black bg-gradient-to-t opacity-80"></div>
      <div className="mx-auto bg-accent-dark bg-cover bg-aid-center-hero h-80 w-full h-full flex">
        <div className="title flex sm:items-end flex-col sm:flex-row justify-between absolute px-3 py-4	md:px-6 md:py-5 bottom-0 left-0 right-0">
          <div className="left flex flex-col">
            <h1 className="text-white	">{name}</h1>
            <p className="text-white opacity-70	">{organizationName}</p>
          </div>
          <p className="text-white opacity-60 text-sm text-right">Utolára frissítve: 2 napja</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
