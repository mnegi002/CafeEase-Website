const express = require('express')
const mongoDB = require("./db/db")
const cartDB = require("./db/cartdb")
const orderDB = require("./db/orderdb")
const removeDB = require('./db/removedb')

const cors = require("cors")


const stripe = require("stripe")('sk_test_51OkLUZSGFkTftsaBay7P36Yqg7wRZ8vomsRVwSeeAgkUJ6rnWYrUtXdDZpZ6JPX36xZGsaMe5QwIThR1rq4Du0He0021ls8QqO')

const port = 4000

const app = express()

mongoDB();
cartDB();
orderDB();
removeDB();

app.use(cors())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json())

app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/OrderData"))
app.use('/api',require("./routes/CartItemData"))
app.use('/api',require("./routes/PaymentData"))
app.use('/api' , require("./routes/RemoveCart"))


app.post("/payment", async (req, res) => {
  try {
    const { product } = req.body;

    // console.log('Received request body:', req.body);

    if (!product || !product.items || !Array.isArray(product.items)) {
      console.log('Invalid product structure');
      return res.status(400).json({ error: 'Invalid product structure' });
    }

    // Iterate through the items and log their titles
    product.items.forEach((item, index) => {
      console.log(`Item ${index + 1}: ${item.title}`);
    });

    // Your code to create lineItems and create a session with Stripe...

    const lineItems = product.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.amount,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
      // payment_intent_data: {
      //   description: `Total Amount: ₹${product.totalAmount}`, }
    });
// 
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error handling payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Handle success endpoint


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

