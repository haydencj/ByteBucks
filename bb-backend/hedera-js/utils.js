const {
    Client, 
    TokenInfoQuery, 
    TokenId  // Import the TokenId class
} = require("@hashgraph/sdk");

require('dotenv').config();

const client = Client.forTestnet();
client.setOperator(process.env.MY_ACCOUNT_ID, process.env.MY_PRIVATE_KEY);

async function getTokenInfo(tokenIdString) {
    try {
        const tokenId = TokenId.fromString(tokenIdString);  // Create a TokenId instance
        const tokenInfo = await new TokenInfoQuery()
            .setTokenId(tokenId)  // Pass the TokenId instance here
            .execute(client);

        console.log("Token info:", tokenInfo);
    } catch (error) {
        console.error(error);
    }
}

// Replace '0.0.1234' with your actual Token ID string
getTokenInfo('0.0.4518091').catch(console.error);

