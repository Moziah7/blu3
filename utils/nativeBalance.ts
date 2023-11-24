import { ethers } from 'ethers';

interface NativeBalanceData {
  wallet: string;
  rpcList: string[];
}

export const nativeBalance = async (data: NativeBalanceData): Promise<ethers.BigNumber | null> => {
  try {
    const { wallet, rpcList } = data;

    if (!wallet || !rpcList || rpcList?.length === 0) {
      throw new Error("wallet or rpcList not provided");
    }

    for (let i = 0; i < rpcList.length; i++) {
      let provider = new ethers.providers.StaticJsonRpcProvider(rpcList[i]);
      try {
        const balance = await provider.getBalance(wallet);
        return balance;
      } catch (error) {
        console.error(`${rpcList[i]} failed to connect ${i}`);
      }
    }

    return null;
  } catch (error) {
    console.error(error, "all rpc error");
    throw new Error(error);
  }
};
