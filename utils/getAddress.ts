import { useAccount } from "wagmi";

export const getAddress = (): string => {
  const { address }: { address?: string | undefined } = useAccount();

  let currentAddress: string = address
    ? address
    : "0x0000000000000000000000000000000000000000";

  return currentAddress;
};
