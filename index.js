import db from './config/database.js'
import Equipment from './api/model/equipment.js'
import bodyParser from 'body-parser';
import express from 'express'
import router from './api/route/equipment.route.js';

const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// require('./route/equipment.route.js')(app)
app.use(router)

try {
    db.authenticate();
    console.log('Database Connected');

    // await db.sync({force: true});
} catch (error) {
    console.log(error);
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})