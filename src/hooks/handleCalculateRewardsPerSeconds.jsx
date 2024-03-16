import { useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";

const handleCalculateRewardsPerSeconds = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return async (poolID, stakedAmount) => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract._calculateRewardperSecond(poolID, stakedAmount);
            console.log("transaction: ", transaction);

            const receipt = await transaction.wait();
            console.log("receipt: ", receipt);

            if (receipt.status) {
                console.log("Your calculated reward !!!");
            } else {
                console.log("Reward could not be calculated. Failed!!!");
            }
        } catch (error) {
            console.error(
                "error: ",
                error.reason || "An unknown error occurred"
            );
        }
    };
};

export default handleCalculateRewardsPerSeconds;
