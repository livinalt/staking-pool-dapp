import React, { useEffect } from 'react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";

const handleUnstake = (poolID, onUnstake) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    useEffect(() => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        const unstakeEventListener = contract.on("Unstake", (poolID, account, amount, timestamp) => {
            console.log("Unstake event received:");
            console.log("Pool ID:", poolID);
            console.log("Account:", account);
            console.log("Unstaked amount:", amount);
            console.log("Timestamp:", timestamp);
            
            if (onUnstake) {
                onUnstake(poolID, account, amount, timestamp);
            }
        });

        return () => {
            unstakeEventListener.removeAllListeners();
        };
    }, [walletProvider, onUnstake]);
};

export default handleUnstake;
