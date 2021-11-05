const express = require("express");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const { DB, PORT } = require("./config");

// Initialize the application
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/students", require("./routes"));
app.use("/", require("./routes"));

const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB, {
        // useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
  
      success({
        message: `Successfully connected with the Database \n${DB}`,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
  
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };
  
  startApp();