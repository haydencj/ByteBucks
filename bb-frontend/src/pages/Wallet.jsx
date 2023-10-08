import React from 'react';
import TypeIt from 'typeit-react';

function Wallet() {
  return (
    <div className="Wallet-container">
        <div className="card">     
            
            <TypeIt className="Balance">ByteBucks Balance:</TypeIt>
           
         <div className="Balance-Container"/>
            
         
        </div> 
        <div className="Redeem-container">
            <a href="/redeem">
            <button className="redeem-button">REDEEM</button>
            </a>
        </div>
    </div>
  );
}

export default Wallet;
