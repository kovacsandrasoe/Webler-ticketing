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