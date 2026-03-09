//1) ticket class létrehozása (id - string(uuid), description - string, user - string, createdAt - Date, response - string, isClosed - bool)
//2) ticket class-nak konstruktor készítése (paraméterek: description, user, kitöltendő a konstruktorban: id, createdAt, isClosed)
class Ticket{
    id;
    description;
    user;
    createdAt;
    response;
    isClosed;   
    constructor(description, user){
        this.description = description;
        this.user = user;
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
        this.isClosed = false;
    }
}

tickets = [];
tickets.push(new Ticket('Nem megy a lift', 'Kovács András'));
tickets.push(new Ticket('Gazos a kert', 'Nagy Eszter'));
tickets.push(new Ticket('Nem ég a lámpa', 'Kiss Géza'));
tickets.push(new Ticket('Nem működik a garázskapu', 'Juhász Kálmánné'));

//04) save függvény létrehozása
function save(){
    localStorage.setItem('tickets', JSON.stringify(tickets));
}

//05) load függvény létrehozása
function load(){
    tickets = JSON.parse(localStorage.getItem('tickets') ?? '[]');
}