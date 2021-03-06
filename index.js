const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server on port: ${port}`);
    }

    console.log(`Server is running Successfully on port: ${port}`);
})
