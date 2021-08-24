const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send({"Title": "Hello World"});
});

//starting de server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

