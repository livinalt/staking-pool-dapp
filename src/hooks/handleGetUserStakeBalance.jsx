import React from 'react'
import { useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { isSupportedChain } from "../Utils";
import { isAddress } from "ethers";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";
import { toast } from 'react-toastify';


const handleGetUserStakeBalance = (poolID,account) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return toast.error("Wrong network");
        // if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract.getUserStakeBalance(poolID,account);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return toast.success("Your stake balance is ... !!");
            }

            toast.error("Stake operation failed!");
        } catch (error) {
            console.error(
                "error: ",
                error.reason || "An unknown error occured"
            );
        }
    }, [address, chainId, walletProvider]);
};

export default handleGetUserStakeBalance