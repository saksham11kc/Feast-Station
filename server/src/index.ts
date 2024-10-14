import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "A simple and healthy breakfast option, packed with protein to kickstart your day.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "A hearty bowl of savory ramen, with noodles, rich broth, and your choice of toppings.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Juicy grilled chicken marinated in herbs, served with your choice of side.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "A slice of sweet indulgence, perfect for breakfast or an afternoon treat.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A classic burger made with premium beef and fresh toppings, served with fries.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancakes served with syrup, butter, and your choice of toppings for a delicious dinner twist.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => { //9000 refers to port number can be changed to your Deployment URL 
  console.log("Server is running on port 9000");
});
