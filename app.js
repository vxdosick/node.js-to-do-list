const express = require("express")
const tasksController = require("./controllers/tasksController")
const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", tasksController.getTasks)

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})