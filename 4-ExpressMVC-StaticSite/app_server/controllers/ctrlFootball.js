
const winnerlist = function(req, res){
    res.render('football',{
        winners:
        [
            {year:'1990', team:'Germany'},
            {year:'1994', team:'Brazil'},
            {year:'1998', team:'France'},
            {year:'2002', team:'Brazil'},
            {year:'2006', team:'Italy'},
            {year:'2010', team:'Spain'},
            {year:'2014', team:'Germany'},
            {year:'2018', team:'Croacia'}
        ]});
};
module.exports = {
    winnerlist
};