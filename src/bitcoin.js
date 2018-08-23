export async function priceInBitcoin(price) {
    const getCurrentPrice = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
    const data = await getCurrentPrice.json();
    const bitCoinPrice = data.bpi.USD.rate_float;

    const convertedPrice = price / bitCoinPrice;

    if (!convertedPrice) {
        throw new Error('Could not get price in bitcoin. find "bitcoin.js" file in source code');
    }

    return convertedPrice;
}
