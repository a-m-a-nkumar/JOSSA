const db = require('../services/database');

const getGraphDataRoundwise = (req, res) => {
    const { exam, rank, collage, programname, seat, gender } = req.query;

// Use parameterized queries to prevent SQL injection
const queParams = [rank, seat];
let que = `SELECT * FROM "Jossa-final-data" WHERE Round = 6 AND Year = 2023 AND "Closing Rank" > ? AND "Seat Type" = ?`;

if (collage === 'ALL') {
    if (exam === 'Jee Advance') {
        que += ` AND "Institute Type" = 'IIT'`;
    } else {
        que += ` AND "Institute Type" != 'IIT'`;
    }
} else {
    que += ` AND "Institute Type" = '${collage}'`;
    queParams.push(collage);
}

if (programname !== 'ALL') {
    que += ` AND "Program name" = '${programname}'`;
    queParams.push(programname);
}

if(gender=='Male'){
    que += ` AND "Gender" = 'Gender-Neutral'`;
    queParams.push(gender);
}else{
    que += ` AND "Gender" = 'Female-only (including Supernumerary)'`;
    queParams.push(gender);
}


console.log(que); // Output the constructed query for debugging
console.log(queParams); // Output the query parameters for debugging

    
    db.all(que, [rank,seat], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

// Other controller functions...

module.exports = {
    getGraphDataRoundwise,
    // other exports...
};
