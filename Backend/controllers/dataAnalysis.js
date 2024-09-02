const db = require('../services/database');

const dataAnalysis = (req, res) => {
    const { exam, year, collage, institute, program, seat, gender,stateQuota } = req.query;
    console.log(year);
    console.log(collage);
    console.log(exam);
    console.log(program);
    console.log(seat);
    console.log(institute);
    console.log(stateQuota);

    let query = `SELECT * FROM "Jossa-final-data" WHERE 1=1`; // Start with a dummy condition to simplify appending conditions
    let params = []; // Initialize params array

    if (exam === 'Year Wise') {
        query += ` AND "Round" = 6`;
    } else {
        query += ` AND "Year" = ?`;
        params.push(year);
    }

    if (institute) {
        query += ` AND "Institute" = ?`;
        params.push(institute);
    }

    if (program) {
        query += ` AND "Program Name" = ?`;
        params.push(program);
    }

    if (seat) {
        query += ` AND "Seat Type" = ?`;
        params.push(seat);
    }

    if (gender === 'Male') {
        if(year>=2018 || !year){
        query += ` AND "Gender" = 'Gender-Neutral'`;
        }
    } else {
        if(year>=2018 || !year){
        query += ` AND "Gender" = 'Female-only (including Supernumerary)'`;
        }
    }
    if(stateQuota){
        query += ` AND "Quota" = ?`;
        params.push(stateQuota);
    }


    console.log(query);
    console.log(params);

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
        console.log(rows);
    });
};

// Other controller functions...

module.exports = {
    dataAnalysis,
    // other exports...
};
