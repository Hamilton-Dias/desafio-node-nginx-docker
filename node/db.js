const mysql = require('mysql');

var obj = {
    con: null,

    connect: () => {
        if (obj.con)
            return;
        
        obj.con = mysql.createConnection({
            host: 'db',
            user: 'root',
            password: 'root',
            database: 'nodedb'
        });

        obj.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");

            obj.con.query("CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))");
        });
    },

    end: () => {
        if (!obj.con)
            return;

        obj.con.end();
        obj.con = null;
    },

    insert: (name) => {
        obj.connect();

        let sql = "INSERT INTO people (name) VALUES (?)";

        return new Promise((resolve, reject) => {
            obj.con.query(sql, [name], (error, results, fields) => {
                if(error) return reject(error);
                console.log('adicionou nome!');
                resolve();
            });
        });
    },

    getAll: () => {
        obj.connect();

        let sql = "SELECT * FROM people";

        return new Promise((resolve, reject) => {
            obj.con.query(sql, (error, results, fields) => {
                console.log('buscou nomes...');
                if(error) 
                    return reject(error);
                
                return resolve(results);
            });
        });
    }

};

module.exports = obj;