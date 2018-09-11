
const winnerlist = function(req, res){
    res.render('goldenball',{
        winners:
        [
            {year:'1990', player:'Salvatore Schillaci', team: 'Italy'},
            {year:'1994', player:'Romário', team: 'Brazil'},
            {year:'1998', player:'Ronaldo', team: 'Brazil'},
            {year:'2002', player:'Oliver Khan', team: 'Germany'},
            {year:'2006', player:'Zinedine Zidane', team: 'France'},
            {year:'2010', player:'Diego Forlán', team: 'Uruguay'},
            {year:'2014', player:'Lionel Messi', team: 'Argentina'},
            {year:'2018', player:'Luka Modric', team: 'Croacia'}
        ]});
};

module.exports = {
    winnerlist
};