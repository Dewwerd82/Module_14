//Zadanie_1:
const person = {
    city: "Moscow",
    status: "work"
}

const student = Object.create(person);
student.ownCity = "Piter";
student.age = 40;

//console.log(student.city);

function show(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

show(student);


//Zadanie_2:

let key = '';
const person = {
    city: "Moscow",
    status: "work"
}

const student = Object.create(person);
student.ownCity = "Piter";
student.age = 40;

//console.log(student.city);

function show(str, obj) {
    str in obj ? console.log("true") : console.log("false");
}

show("ag", student);

//Zadanie_3:

let key = '';
const person = {
    city: "Moscow",
    status: "work"
}

const student = Object.create(person);
student.ownCity = "Piter";
student.age = 40;

Object.setPrototypeOf(student, {});

console.log(student.city);

//Zadanie_4:

//Группа электротовары
function Electro(firma) {
    this.country = "Russia"
}


//Добавляем метод к основной группе
Electro.prototype.getsize = function(size) { console.log(`Size is ${size} g`) };

//Описание подгруппы TV
function TV(power, color, onoff, firma) {
    this.power = power,
        this.color = color,
        this.firma = firma,
        this.onoff = onoff
}
//Добавляем метод группе TV
TV.prototype.getprice = function(price) { console.log(`Price is ${price} $`) };

//Описание подгруппы Comp
function Comp(power, proc, onoff, firma) {
    this.power = power,
        this.proc = proc,
        this.firma = firma,
        this.onoff = onoff
}

Comp.prototype.getvideo = function(video) { console.log(`GrafficCard is ${video} `) };

function NoteComp(diag, memory) {
    this.diag = diag,
        this.memory = memory
}


//Подгруппа эл. товаров
TV.prototype = new Electro();
Comp.prototype = new Electro();

//Подгруппа Comp
NoteComp.prototype = new Comp();
const LG = new TV(300, 'red', 'on', 'Japan');
const intel = new Comp(100, 'intel', 'on', 'Germeny');

//console.log(LG);

//console.log(intel);

function totalPower(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key == 'onoff') {
                obj[key] ? console.log('Discont on') : console.log('Discont off');
            }
        }
    }
}

totalPower(LG);

//Zadanie_5:

class Electro {
    constructor(ownCountry) {
        this.ownCountry = ownCountry || "Russia";
    }
    getinfoEl() {
        console.log(`Made in ${this.ownCountry}  `)
    }
}

class comp extends Electro {
    constructor(power, proc, firma, onoff, ownCountry) {
        super(ownCountry);
        this.power = power;
        this.proc = proc;
        this.firma = firma;
        this.onoff = onoff;
    }
    getinfoComp() {
        if (onoff) {
            console.log('Comp on')
        } else {
            console.log('Comp off')
        }
    }
}

class noteComp extends comp {
    constructor(diag, memory, ownCountry, proc, power, firma, onoff) {
        super(proc);
        super(power);
        super(firma);
        super(onoff);
        super(ownCountry);
        this.diag = diag;
        this.memory = memory;
    }
}

class TV extends Electro {
    constructor(power, color, firma, discont, price, ownCountry) {
        super(ownCountry);
        this.power = power;
        this.color = color;
        this.firma = firma;
        this.discont = discont;
        this.price = price;
    }
    getinfoTV() {
        if (this.discont) {
            console.log('Discont on')
        } else {
            console.log('Discont off')
        }
    }
    getprice() { console.log(`Price is ${this.price} $`) };
}

const LG = new TV(100, "red", "LG", false, 10000);
//console.log(LG);
//console.log(LG.getinfoTV());
//console.log(LG.getprice());
console.log(LG.getinfoEl());