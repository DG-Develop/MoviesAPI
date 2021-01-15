const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { config } = require('./config/index');
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')

const notFoundHanlder = require('./utils/middleware/notFoundHandler')


//morgan
app.use(morgan('dev'))
//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return response.status(200).json({})
    }
    next()
})

moviesApi(app)
userMoviesApi(app)

// Catch 404
app.use(notFoundHanlder)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
})