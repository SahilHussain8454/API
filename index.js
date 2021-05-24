var Db = require('./dbOperations');
const dbOperations = require('./dbOperations');
var ContainerDetails = require('./containerDetails')


const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/byContainerNo/:id').get((request, response) => {
    dbOperations.getContainerDetails(request.params.id).then(result => {
        response.json(result);
    })
})

var port = 1433;
app.listen(port);
console.log('Order API is runnning at ' + port);