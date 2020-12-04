const express = require('express');
const session = require('express-session');
const morgan =require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator =require('express-validator')
const cors = require('cors');

//Connecting Database
require('./config/database')

const app = express();
const PORT = 4000;

//Middlewares
app.use(morgan('dev'));
app.use(expressValidator())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
const userRouter = require('./routes/user.routes')
const ApplnRouter = require('./routes/application.routes')
const AdminRouter = require('./routes/admin.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 15*60*1000 }
    })
)

app.listen(PORT, () => console.log('Listening on Port:', PORT));

app.use('/',userRouter);
app.use('/',ApplnRouter);
app.use('/',AdminRouter);