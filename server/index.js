const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/db/connection.js");
const app = express();
const port = 3000;
// const vapeRouters = require("./files/routers.js");
const AuthRouter = require("./src/routes/auth.routes.js");
const OrderRouter = require("./src/routes/order.routes.js")
const ProductRouter = require("./src/routes/product.routes.js")
const UserRouter = require("./src/routes/user.routes.js")

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/vapeStore", AuthRouter);
app.use("/api/vapeStore", OrderRouter);
app.use("/api/vapeStore", ProductRouter);
app.use("/api/vapeStore", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
