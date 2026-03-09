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
        this.response = '';
    }
}

tickets = [];
//tickets.push(new Ticket('Nem megy a lift', 'Kovács András'));
//tickets.push(new Ticket('Gazos a kert', 'Nagy Eszter'));
//tickets.push(new Ticket('Nem ég a lámpa', 'Kiss Géza'));
//tickets.push(new Ticket('Nem működik a garázskapu', 'Juhász Kálmánné'));
//tickets[2].isClosed = true;
load();
display();

//04) save függvény létrehozása
function save(){
    localStorage.setItem('tickets', JSON.stringify(tickets));
}

//05) load függvény létrehozása
function load(){
    tickets = JSON.parse(localStorage.getItem('tickets') ?? '[]');
    tickets.forEach(x => {
        x.createdAt = new Date(x.createdAt);
    })
}

//08) display függvény a táblázat rajzolására
function display(){
    document.getElementById('tbody').innerHTML = '';
    tickets.forEach(x => {
        document.getElementById('tbody').innerHTML += 
        `
            <tr class="table-${x.isClosed ? 'success' : 'danger'}">
                <td>${x.description}</td>
                <td>${x.user}</td>
                <td>${x.createdAt.toLocaleDateString('hu-HU')} ${x.createdAt.toLocaleTimeString('hu-HU')}</td>
                <td>${x.response}</td>
                <td><button class="btn btn-sm btn-warning ${x.isClosed ? 'disabled' : ''}">Lezárás</button></td>
            </tr>
        `;
    });
}

//11) create függvény elkészítése: 2db input mezőt kikeres és példányosít egy ticketet a beírt adatokból és elhelyezi a tömbben
function add(){
    tickets.push(new Ticket(
        document.getElementById('inp_desc').value,
        document.getElementById('inp_user').value,
    ));
    save();
    display();
}