/* This script creates some initial test data (documents) to be used
 * in this app's database. It is assumed this script will be executed from within
 * a mongo shell session on your app's database using the load() command
 *
 * If you want to run this script on an empty database, run db.dropDatabase() on the mongo shell
 * before running the script
 */

/* Remove all collections and documents from the current database.
 * This will not delete the database.
 */
db.dropDatabase();

// Creating the 'football' collection and adding some documents
db.football.save(
    [
        {year:'1990', team:'Germany'},
        {year:'1994', team:'Brazil'},
        {year:'1998', team:'France'},
        {year:'2002', team:'Brazil'},
        {year:'2006', team:'Italy'},
        {year:'2010', team:'Spain'},
        {year:'2014', team:'Germany'},
        {year:'2018', team:'France'}
    ]
);

// Creating the 'goldenball' collection and adding some documents
db.goldenball.save(
    [
        {year:'1990', player:'Salvatore Schillaci', team: 'Italy'},
        {year:'1994', player:'Romário', team: 'Brazil'},
        {year:'1998', player:'Ronaldo', team: 'Brazil'},
        {year:'2002', player:'Oliver Khan', team: 'Germany'},
        {year:'2006', player:'Zinedine Zidane', team: 'France'},
        {year:'2010', player:'Diego Forlán', team: 'Uruguay'},
        {year:'2014', player:'Lionel Messi', team: 'Argentina'},
        {year:'2018', player:'Luka Modric', team: 'Croacia'},
    ]
);

