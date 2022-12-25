const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rrlalh25",
  database: "JWT",
});

mysqlConnection.connect((err) => {
  if (err) {
		console.log('error', err);
  } else {
		console.log('DB OK');
	}
});

module.exports = mysqlConnection;
