var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }
        var userScores = req.body.scores;

        var pointDifference;

        friends.forEach(friend => {

            pointDifference = 0;

            console.log(friend.name);

            for (var i = 0; i < friend.scores.length; i++) {
                var currentFriendScore = friend.scores[i];
                var currentUserScore = userScores[i];

                pointDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (pointDifference <= newFriend.friendDifference) {
                newFriend.name = friend.name;
                newFriend.photo = friend.photo;
                newFriend.friendDifference = pointDifference;
            }
        })

        friends.push(req.body);

        res.json(newFriend);
    })


}