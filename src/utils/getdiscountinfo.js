function getDiscountInfo(price, discountPrice) {
  if (!discountPrice) {
    return null;
  }
  const discountAmount = price - discountPrice;
  const discountPercentage = ((discountAmount / price) * 100).toFixed(0);
  return {
    discountAmount: discountAmount.toFixed(2),
    discountPercentage: discountPercentage,
  };
}

export default getDiscountInfo;
