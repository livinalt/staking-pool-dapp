import { useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProvider } from "../Constants/providers";
import { getStakingPoolContract } from "../Constants/contracts";
import { toast } from "react-toastify";

const handleCalculateRewardsPerSeconds = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return async (poolID, stakedAmount) => {
        if (!isSupportedChain(chainId)) return toast.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStakingPoolContract(signer);

        try {
            const txn = await contract._calculateRewardperSecond(poolID, stakedAmount);
            console.log("txn: ", txn);

            const receipt = await txn.wait();
            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("Your calculated reward !!!");
            } else {
                toast.error("Reward could not be calculated. Failed!!!");
            }
        } catch (error) {
            toast.error(
                "error: ",
                error.reason || "An unknown error occurred"
            );
        }
    };
};

export default handleCalculateRewardsPerSeconds;
