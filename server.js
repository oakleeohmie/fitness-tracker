const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app)
app.use(require("./routes/apiRoutes"));
mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});