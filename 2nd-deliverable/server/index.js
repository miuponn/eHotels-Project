const express =require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware?
app.use(cors());
app.use(express.json()); // req.body

// Routes? related to pool query

// this will have to be related to a variety of things that we need to manage;
    // hotels, rooms, employees and users.

//employees:
    // create an employee
    // get all employees
    // get an employee
    // update an employee


//example query:
app.post("/Brotels", async(req,res) => {
    try {
        const { location} = req.body;
        const newSearch = await pool.query("SELECT * FROM HOTEL WHERE HotelChainID = (location) ")

        res.json(newSearch);
        console.log(location);
    }catch (err) {
        console.error(err.message);
    }
})

const connect = async () => {
    try {

    } catch(err) {
        console.error(err.message);
    }
}
app.listen(5000, () => {
    console.log("server has started on port 5000");
})