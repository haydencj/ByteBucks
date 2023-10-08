// Imports
const { 
    Client, 
    TokenCreateTransaction, 
    PrivateKey, 
    Hbar,
    TokenSupplyType
} = require("@hashgraph/sdk");

require("dotenv").config();

// Grab your Hedera testnet account ID and private key from your .env file
const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;

// If we weren't able to grab it, we should throw a new error
if (myAccountId == null || myPrivateKey == null) {
    throw new Error(
    "Environment variables myAccountId and myPrivateKey must be present"
    );
}

// Create your connection to the Hedera network
const client = Client.forTestnet();

//Set your account as the client's operator
client.setOperator(myAccountId, myPrivateKey);

// Generating a new private key for token supply
const supplyKey = PrivateKey.generate();


async function createByteBucks() {

    const transactionId = await new TokenCreateTransaction()
        .setTokenName("ByteBuck")
        .setTokenSymbol("BB")
        .setDecimals(0) // Set the divisibility of the token. 
        .setInitialSupply(10000) // Set the initial supply of ByteBucks
        .setTreasuryAccountId(myAccountId) // Set the account ID that will act as the treasury
        .setAdminKey(myPrivateKey.publicKey) // Set the admin key to manage the token
        .setMaxTransactionFee(new Hbar(100)) // Set a maximum transaction fee
        .setSupplyType(TokenSupplyType.Infinite)
		.setSupplyKey(supplyKey.publicKey)
        .execute(client);

        // Get receipt to confirm token creation
        const receipt = await transactionId.getReceipt(client);
        const tokenId = receipt.tokenId.toString();

        //LOG THE TOKEN ID TO THE CONSOLE
        console.log("ByteBucks token created with ID:", tokenId);
        return tokenId;
}

createByteBucks().catch((err) => {
        console.error(err);
        process.exit(1);
    });
