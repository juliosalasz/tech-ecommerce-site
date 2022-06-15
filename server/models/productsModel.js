import mongoose from "mongoose";
const productsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  size: String,
});

const ProductDisplay = mongoose.model("ProductDisplay", productsSchema);

export default ProductDisplay;
