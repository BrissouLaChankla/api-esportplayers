const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    id:String,
    summonerName:String,
    firstName:String,
    lastName:String,
    image:String,
    role:String,
});

const leagueSchema = mongoose.Schema({
    name:String,
    region:String
})


const teamSchema = mongoose.Schema({
	id: String,
	slug: String,
	name: String,
	code: String,
	image: String,
	status: String,
    homeLeague:[leagueSchema],
	players: [playerSchema],
});



const Team = mongoose.model('teams', teamSchema);

module.exports = Team;
