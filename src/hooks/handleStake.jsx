import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";
import { toast } from "react-toastify";

const handleStake = (poolID, amount) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return toast.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract.stake(poolID, amount);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();
            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("Staking operation successful!!!");
            } else {
                toast.error("Stake operation failed!");
            }
        } catch (error) {
            toast.error("error: ", error.reason || "An unknown error occurred");
        }
    }, [chainId, walletProvider]);
};

export default handleStake;
