const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');



//Express middlesware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use('/api', apiRoutes);


// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

//Default response for any other request(Not found) catch all 
app.use((req, res) => {
    res.status(404).end();
});


//Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
