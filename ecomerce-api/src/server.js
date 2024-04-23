const app = require("./index.js")

const port = 5454;
app.listen(port, ()=>{
    console.log("api listing is on port no : ", port)
})