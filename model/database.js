require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "5aday",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists 5aday; CREATE TABLE seasons(id INT NOT NULL AUTO_INCREMENT, image VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(1000) NOT NULL, list VARCHAR(1000)NOT NULL, PRIMARY KEY (id));`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `seasons` was successful!");

    console.log("Closing...");
  });

  con.end();
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists products; CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    price numeric NOT NULL,
    image varchar(255) NOT NULL,
    PRIMARY KEY (id)
  );
  `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `products` was successful!");

    console.log("Closing...");
  });

  con.end();
});
