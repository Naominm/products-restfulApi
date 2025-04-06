function validateProducts(req, res, next) {
  const {
    productTitle,
    productDescription,
    unitsLeft,
    pricePerUnit,
    isOnOffer,
  } = req.body;
  if (!productTitle) {
    res.status(400).json({
      status: "Error",
      message: "Product Title Required",
    });
  }
  if (!productDescription) {
    res.status(400).json({
      status: "Error",
      message: "Product Description Required",
    });
  }
  if (!pricePerUnit) {
    res.status(400).json({
      status: "Error",
      message: "Price per unit required",
    });
  }
  if (!unitsLeft) {
    res.status(400).json({
      status: "Error",
      message: "units Left Required",
    });
  }
  if (!isOnOffer) {
    res.status(400).json({
      status: "Error",
      message: "isOnOffer is required",
    });
  }
  next();
}
export default validateProducts;
