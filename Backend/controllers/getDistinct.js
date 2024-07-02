const db = require('../services/database');

const getDistinct = (req, res) => {
    const { year, institute_types,institute, find, program, seat } = req.query;
    console.log(year);
    console.log(institute_types);
    console.log(find);
    console.log(program);
    console.log(seat);
    console.log(institute);

    if (!find) {
        return res.status(400).json({ error: 'The "find" parameter is required.' });
    }

    let query = `SELECT DISTINCT "${find}" FROM "Jossa-final-data" WHERE 1=1`;
    const params = [];

    // Add conditions to the query based on the received parameters
    if (year) {
        query += ` AND "Year" = ?`;
        params.push(year);
    }

    if (institute_types) {
        query += ` AND "Institute Type" = ?`;
        params.push(institute_types);
    }

    if (institute) {
        query += ` AND "Institute" = ?`;
        params.push(institute);
    }


    if (program) {
        query += ` AND "Program" = ?`;
        params.push(program);
    }
    if (seat) {
        query += ` AND "Seat" = ?`;
        params.push(seat);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
    });
};

module.exports = {
    getDistinct,
    // other exports...
};
