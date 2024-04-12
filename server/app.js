import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
// import routes from './routes';
const secret_key = "sk_test_51O2Ys0SITp9UXygckbcRFe4tM4shB9GhEWgASv4l5b6BW1EqOpmj0NTRu6qAJunwiQASMLCwxT7q5Kmj90rIG1ql00xX1Jysef";
import stripe from 'stripe';
const stripeInstance = new stripe(secret_key);
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) =>{
    const response = req.body;
    console.log(response);

    const lineItems = response.map((item) => ({
       
            price_data:{
                currency:"INR",
                product_data:{
                    name:item.title,
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        
    }));

    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });
    res.json({id:session.id});
});

app.listen(7000, () => console.log('Server started on port 7000'));

