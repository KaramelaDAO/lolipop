async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    //const Token = await ethers.getContractFactory("Lollipop");
    //const token = await Token.deploy();


    const DEX = await ethers.getContractFactory("TreasuryDEX");
    const dex = await DEX.deploy();

    console.log("Token address:", token.address);
    console.log("DEX address:", dex.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });