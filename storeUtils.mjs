//named export

export const taxamount = (price) => price*0.18;
export const discountamount = (price,off) => price-off;


//default export

const storename = (name) => `welocome to the ${name}`;
export default storename;