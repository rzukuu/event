let event = {
    title: "Koncert Team X",
    date: "2024-06-15",
    location: "Zamosc"
}

console.log("Tytuł: ", event.title);
console.log("Data: ", event.date);
console.log("Miejsce: ", event.location);
console.log(" ");

let participant = {}
participant.name = "Jakub Żukowski";
participant.email = "jakubzukowski@gmail.com";

console.log("Imie: ", participant.name);
console.log("Email: ", participant.email);
console.log(" ");

let wydarzenia= [
    {
        title: "Koncert Ekipy",
        date: "2024-07-20",
        location: "Krakow"
    },
    {
        title: "Koncert Genzie",
        date: "2024-08-05",
        location: "Warszawa"
    },
    {
        title: "Koncert TeamX2",
        date: "2024-09-10",
        location: "Gdynia"
    }
]

let wydarzenie4 = {
    title: "Seminarium JAAVASCRIPT",
    date: "2024-10-15",
    location: "Łódź"
}

wydarzenia.push(wydarzenie4);
console.log("Biblioteka ma długość: ", wydarzenia.length);
console.log(wydarzenia);

let wydarzenia2 = wydarzenia.slice(3,4);
console.log("Nowe wydarzenia: ", wydarzenia2);

wydarzenia.shift();
console.log("Ilość wydarzen po odwołaniu pierwszego: ", wydarzenia.length);
console.log("Wydarzenia po odwołaniu pierwszego: ");
wydarzenia.forEach(wydarzenie => console.log(`${wydarzenie.title}`));

