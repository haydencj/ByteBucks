import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button} from 'react-bootstrap';


const OpenWalletButton = () => {
  return (
    <Button
      mode="contained"
      color="#3498db" // Change the color to your preference
      onPress={() => {
        // Add the logic for opening the wallet here
      }}
      style={{
        margin: 20,
        padding: 10,
        borderRadius: 8,
      }}
    >
      Open your wallet
    </Button>
  );
};

export default OpenWalletButton;
