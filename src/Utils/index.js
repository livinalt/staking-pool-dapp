import { SUPPORTED_CHAIN } from "../Connections";

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;
