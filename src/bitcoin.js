export async function priceInBitcoin(price) {
  const currentBitcoinPrice = fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');

  const convertedPrice = price / currentBitcoinPrice;

  if (!convertedPrice) {
    throw new Error('Could not get price in bitcoin. find "bitcoin.js" file in source code');
  }

  return convertedPrice;
}
