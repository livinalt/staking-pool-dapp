import { useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
// import { useCallback } from "react";
import { isSupportedChain } from "../Utils";
import { isAddress } from "ethers";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";


const handleGetUserPoolRewardsPerSecond = (poolID,account) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        // if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract.getUserPoolRewardPerSec(poolID,account);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("Your reward persec is !!!");
            }

            console.log("Reward could not be calculated. Failed!!!");
        } catch (error) {
            console.error(
                "error: ",
                error.reason || "An unknown error occured"
            );
        }
    }, [address, chainId, walletProvider]);
};

export default handleGetUserPoolRewardsPerSecond