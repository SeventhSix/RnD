const sql = require('mssql');

const config = {
    user: 'NodeDef',
    password: 'DimbsSQLp2020A',
    server: 'localhost', // You can use 'localhost\\instance' OR 'localhost' with 'port' config parameter which defaults to 1433, to connect to named instance
    database: 'NodeDB',
};

sql.on('error', err => {
    console.log(`SQL Error (General): ${err}`);
})

let = cnt = 0;
function showDevider() {
    console.log(`========================================================= : ${cnt++}`);
}

function doQuery() {
    sql.connect(config).then(pool => {
        return pool.request().query('SELECT * FROM [dbo].[PlayTable]');
    }).then(result => {
        console.dir(result.recordsets[0][0]);
        showDevider();
        
        setTimeout(doQuery, 100);
    }).catch(err => {
        console.log(`SQL Error (Query): ${err}`);
    });
}

showDevider();
setTimeout(doQuery, 100);