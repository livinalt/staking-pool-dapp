import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";

const handleStake = (poolID, amount) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract.stake(poolID, amount);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();
            console.log("receipt: ", receipt);

            if (receipt.status) {
                console.log("Staking operation successful!!!");
            } else {
                console.log("Stake operation failed!");
            }
        } catch (error) {
            console.error("error: ", error.reason || "An unknown error occurred");
        }
    }, [chainId, walletProvider]);
};

export default handleStake;
