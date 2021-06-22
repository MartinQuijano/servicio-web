const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/api-docs.json');

const express = require('express')
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.use(require('./src/api/routes'));

app.listen(process.env.PORT || 3000);