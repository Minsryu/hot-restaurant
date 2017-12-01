var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// SET UP EXPRESS

var app = express();
var PORT = process.env.PORT || 3000

// Data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(body.Parser.json());

var reservations = [

{
	name: "Y",
	phoneNumber: "888-888-8888",
	email: "y@y.com",
	uniqueID: "1"
}

];

var waitingList = [

{

}

];




app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reservations", function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"))
});





app.post("/api/tables", function(err, res) {

var newReservation = req.body;


	if (reservations.length <= 5) {

		reservations.push(req.body);

	}

	else {

		waitingList.push(req.body);

		}

		res.json(newReservation);
	

});







app.post("/reserve/wait", function(err, res) {


})


app.listen(PORT, function() {
	console.log("Working on PORT " + PORT);
})

