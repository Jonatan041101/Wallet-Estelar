const activeAccount = async (publicKey: string) => {
  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${publicKey}`,
    );
    const responseJSON = await response.json();
    console.log(responseJSON);

    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export default activeAccount;
