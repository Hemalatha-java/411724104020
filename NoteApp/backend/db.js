import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hema0631",
    database: "noteapp"
});

db.connect(err => {
    if (err)
        console.log(err);
    else
        console.log("MySQL Connected");
});

export default db;