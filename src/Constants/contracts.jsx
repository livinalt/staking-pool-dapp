import { ethers } from "ethers";
import Abi from "./StakingPoolABI.json";

export const getStakingPoolContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_Staking_Pool_contract_address,
        Abi,
        providerOrSigner
    );
