import { FriendbotResponse } from '@/types/response';

const activeAccount = async (publicKey: string) => {
  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${publicKey}`,
    );
    const responseJSON = await response.json();
    return responseJSON as FriendbotResponse;
  } catch (error) {
    console.log(error);
  }
};

export default activeAccount;
