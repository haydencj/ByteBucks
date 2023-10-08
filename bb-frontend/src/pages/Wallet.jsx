import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';  // Don't forget to import axios

function Wallet() {
    const [balance, setBalance] = useState('');
    const [data, setData] = useState('');
    const API_URL = 'http://localhost:3003/api/';

    useEffect(() => {
        const token = localStorage.getItem('token');  // Retrieve the JWT token from local storage

        axios.get(API_URL + 'balance', {
            headers: {
                'x-auth-token': token  // Attach the token as a header
            }
        })
            .then(response => {
                console.log(response.data);
                setBalance(response.data.byteBucks);  // Update the state with the fetched balance
            })
            .catch(error => {
                console.error('There was an error fetching the balance!', error);
            });
    }, []);  // The empty array means this useEffect will only run once, similar to componentDidMount

    useEffect(() => {
        const token = localStorage.getItem('token');  // Retrieve the JWT token from local storage

        axios.get(API_URL + 'userdata', {
            headers: {
                'x-auth-token': token  // Attach the token as a header
            }
        })
            .then(response => {
                console.log(response.data);
                setData(response.data);  // Update the state with the fetched balance
            })
            .catch(error => {
                console.error('There was an error fetching the balance!', error);
            });
    }, []);  // The empty array means this useEffect will only run once, similar to componentDidMount

    const { email, accountId } = data;  // Destructuring email and accountId from data

    return (
        <div className="Wallet-container">
            <div className="card">
                <h1>ByteBucks balance</h1>
                <div className="Balance-Container">
                    <p>Balance: {balance} BB</p>
                    <p>Email: {email}</p>  
                    <p>Account ID: {accountId}</p> 
                </div>
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
