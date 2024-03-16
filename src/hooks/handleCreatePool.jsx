import { useEffect } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";

const handleCreatePool = (rewardRate, onPoolCreated) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    useEffect(() => {
        const createPoolAndListenForEvents = async () => {
            if (!isSupportedChain(chainId)) return console.error("Wrong network");

            const readWriteProvider = getProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();

            const contract = getStakingPoolContract(signer);

            try {
                const transaction = await contract.createPool(rewardRate);

                console.log("transaction: ", transaction);
                const receipt = await transaction.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    console.log("Pool created successfully!!!");
                } else {
                    alert("Pool creation failed!");
                }
            } catch (error) {
                console.error(
                    "error: ",
                    error.reason || "An unknown error occurred"
                );
            }
        };

        createPoolAndListenForEvents();
    }, [chainId, rewardRate, walletProvider]);

    useEffect(() => {
        const eventListener = contract.on("poolCreated", (poolID, poolReward, at, by) => {
            console.log("New pool created with ID:", poolID);
            console.log("Reward added:", poolReward);
            console.log("Creation timestamp:", at);
            console.log("Created by:", by);
            
            // Call a callback function if provided
            if (onPoolCreated) {
                onPoolCreated(poolID, poolReward, at, by);
            }
        });

        return () => {
            eventListener.removeAllListeners();
        };
    }, [contract, onPoolCreated]);
};

export default handleCreatePool;
