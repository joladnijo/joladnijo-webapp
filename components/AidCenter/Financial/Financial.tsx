import React from 'react';

const Financial: React.FC = () => {
  return (
    <div className="info-box">
      <div className="info flex flex-col gap-4 p-6">
        <h2>Pénzadományok</h2>
        <div className="finance-item">
          <label>Kedvezményezett neve</label>
          <p>Piripócs művelődési ház</p>
        </div>
        <div className="finance-item">
          <label>Bankszámlaszám</label>
          <p>10918001-00000084-54320008</p>
        </div>
        <div className="finance-item">
          <label>Adószám</label>
          <p>1231231213-02-02</p>
        </div>
        <div className="finance-item">
          <label>Megjegyzés</label>
          <p>UKRAJNA</p>
        </div>
      </div>
    </div>
  );
};

export default Financial;
