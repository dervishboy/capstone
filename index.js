import db from './config/database.js'
import Equipment from './model/equipment.js'
import bodyParser from 'body-parser';
import express from 'express'
import router from './route/equipment.route.js';

const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// require('./route/equipment.route.js')(app)
app.use(router)



try {
    db.authenticate();
    console.log('Database Connected');

    // await Equipment.sync();
} catch (error) {
    console.log(error);
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})