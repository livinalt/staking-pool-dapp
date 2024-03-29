import { useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { isSupportedChain } from "../Utils";
import { isAddress } from "ethers";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";
import { toast } from "react-toastify";


const handleGetUserClaimableRewards = (poolID, stakerAccount) => {

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        try {
            const transaction = await contract.getUserClaimableReward(poolID,stakerAccount);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return toast.success(`Your claimable Pool reward is ...!!!`);
            }

            toast.error(`Couldn't get your claimable Pool reward!!`);
        } catch (error) {
            console.error(
                "error: ",
                error.reason || "An unknown error occured"
            );
        }
    }, [address, chainId, walletProvider]);
};


export default handleGetUserClaimableRewards