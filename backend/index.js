// Importing express
let express = require('express')

// Initializing the app
let app = express()

// Define server port
const PORT = process.env.port || 8000

// Send message for default route
app.get('/', function(req, res){
    res.send("Backend is running successfully!")
})

// Listen to specified port(always keep this at bottom of the file)
app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
})