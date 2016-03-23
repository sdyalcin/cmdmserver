var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


// Pre defined ComeOn Mock Part
var players = {

        t: {
            name: 'Rebecka Awesome',
            avatar: 'images/avatar/rebecka.jpg',
            event: 'Last seen gambling on Starburst.',
            password: 't'
        },
        rebecka: {
            name: 'Rebecka Awesome',
            avatar: 'images/avatar/rebecka.jpg',
            event: 'Last seen gambling on Starburst.',
            password: 'secret'
        },
        eric: {
            name: 'Eric Beard',
            avatar: 'images/avatar/eric.jpg',
            event: 'I saw you won 500 SEK last time!',
            password: 'dad'

        },
        stoffe: {
            name: 'Stoffe Rocker',
            avatar: 'images/avatar/stoffe.jpg',
            event: 'Your are a rock star',
            password: 'rock'
        }
    },
    games = [
        {
            name: 'Lucky Diamonds',
            description: 'Diamonds are your best friend in this 3-reel, single-line slot game. Diamonds are wild and help you create winning combinations. One diamond in a winning combination doubles the normal prize, while two diamonds quadruple the prize. Three diamonds are worth 2,500 credits when three coins are bet. Lucky Diamonds is also available in mini game format.',
            code: 'luckydiamonds',
            icon: 'images/game-icon/luckydiamonds.jpg',
            url: 'https://mltcw.playngonetwork.com/Casino/PlayMobile?ctx=AllGames&gid=luckydiamondsmobile&lang=en_XX&pid=134&lobby=https%3A%2F%2Fwww.comeon.com%2Fmobile%2F%23%2Fcasino&practice=1',
            categoryIds: [0, 2]
        },
        {
            name: 'Irish Gold',
            description: 'The pots of gold are wild and substitute for any other reel symbol on the payline except for the scatter symbol. One pot of gold pays 5x the prize for a winning combination. Two pots of gold pay 25x the prize for a winning combination, except when the payline shows 3 pots of gold.',
            code: 'irishgold',
            icon: 'images/game-icon/irishgold.jpg',
            url: 'https://mltcw.playngonetwork.com/Casino/PlayMobile?ctx=AllGames&gid=irishgoldmobile&lang=en_XX&pid=134&lobby=https%3A%2F%2Fwww.comeon.com%2Fmobile%2F%23%2Fcasino&practice=1',
            categoryIds: [0, 1]
        },
        {
            name: 'Golden Goal',
            description: 'The wild symbol can substitute for any symbol on the payline. Win the progressive jackpot by betting the maximum number of coins and hitting three wild symbols on the payline. Slot machine with football theme.',
            code: 'goldengoal',
            icon: 'images/game-icon/goldengoal.jpg',
            url: 'https://mltcw.playngonetwork.com/Casino/PlayMobile?ctx=AllGames&gid=goldengoalmobile&lang=en_XX&pid=134&lobby=https%3A%2F%2Fwww.comeon.com%2Fmobile%2F%23%2Fcasino&practice=1',
            categoryIds: [0, 2, 1]
        },
        {
            name: 'Dragon Ship',
            description: 'This striking 5-reel, 15-line slot game offers adventurous players the chance to embark on a daring sea voyage with the Vikings in their dragon ship.',
            code: 'dragonship',
            icon: 'images/game-icon/dragonship.jpg',
            url: 'https://mltcw.playngonetwork.com/Casino/PlayMobile?ctx=AllGames&gid=dragonshipmobile&lang=en_XX&pid=134&lobby=https%3A%2F%2Fwww.comeon.com%2Fmobile%2F%23%2Fcasino&practice=1',
            categoryIds: [0, 2]
        },
        {
            name: 'Myth',
            description: 'Myth includes a wild symbol (the greek hero) and a scatter symbol (the golden amphora). The wild symbol substitutes for any other reel symbol (except for the scatter symbol) to help comprise winning combinations. A winning combination that includes a wild symbol pays double the normal prize. Two or more scatter symbols anywhere on the reels constitute a win. Myth includes two bonus rounds. Three or more scatter symbols anywhere on the reels trigger the free spin feature; a sequence of free spins commences in which prizes for winning combinations are tripled. Winning combinations that include a wild symbol pay 6 times the normal prize. Free spins can be re-triggered up to a total of 60 free spins.',
            code: 'myth',
            icon: 'images/game-icon/myth.jpg',
            url: 'https://mltcw.playngonetwork.com/Casino/PlayMobile?ctx=AllGames&gid=mythmobile&lang=en_XX&pid=134&lobby=https%3A%2F%2Fwww.comeon.com%2Fmobile%2F%23%2Fcasino&practice=1',
            categoryIds: [0, 1]
        }

    ],
    categories = [
        {
            id: 0,
            name: 'ALL'
        },
        {
            id: 1,
            name: 'VIDEO SLOTS'
        },
        {
            id: 2,
            name: 'SLOT MACHINES'
        }
    ];


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with asss resource');
});


router.post('/logout', function (req, res, next) {


    this.responseText = '';
    console.log('Coming Post REQ : ', req.body.username)


    var resp = function (settings) {
        var username = settings.body.username;
        if (username in players) {
            this.responseText = {
                status: 'success'
            };
        } else {
            this.responseText = {
                status: 'fail',
                error: 'Username do not match!'
            };
        }
    }


    resp(req);


    console.log('/Logout Resp : ', responseText)
    res.send(this.responseText);
});


router.post('/login', function (req, res, next) {


    this.responseText = '';
    console.log('Coming Post REQ : ', req.body.username)
    var resp = function (settings) {


        console.log('gelen settings : ', settings)
        var username = settings.body.username,
            password = settings.body.password;

        if (username in players && players[username].password === password) {
            this.responseText = {
                status: 'success',
                player: players[username]
            };
        } else {
            this.responseText = {
                status: 'fail',
                error: 'player does not exist or wrong password'
            };
        }
    }


    resp(req);


    console.log('/Login Resp : ', responseText)
    res.send(this.responseText);
});


router.get('/gameslist', function (req, res, next) {


    res.send(games);
});


router.get('/categories', function (req, res, next) {

    res.send(categories);

});


module.exports = router;


