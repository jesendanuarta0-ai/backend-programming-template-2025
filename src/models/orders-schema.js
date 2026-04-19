module.exports = (mongoose) => {
  const schema = new mongoose.Schema({
    product_name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
  });

  return mongoose.model('Order', schema);
};
