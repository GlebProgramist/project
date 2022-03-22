const obj = {
    name: 'Mark',
    height: 170,
    mozg: false,
    school: {
        first: 17,
        second: 90
    },
    makeTest: function(){
        console.log('Test');
    }
};

//obj.makeTest();

const {first: f, second} = obj.school;
//console.log(f, second);

for (let key in obj){
    if(typeof(obj[key]) === 'object'){
        for(let i in obj[key]){
            console.log(`Свойства ${i}, присвоенно значения ${obj[key][i]}`);
        }
    }else{
        console.log(`Свойства ${key}, присвоенно значения ${obj[key]}`);
    }
    
}

//console.log(Object.keys(obj.school));
//console.log(Object.keys(obj).length);

function copyObj (mainObj){
    let objCopy = {};
    let key;
    
    for(key in mainObj){
    objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const newObj = copyObj(obj);

newObj.height = 17;

//console.log(obj);
//console.log(newObj);

const rot = {
    width: 200,
    sin: 100
};

Object.assign(obj, rot);

console.log(obj);

const p = Object.assign({},obj);

p.height = 20;
console.log(p);

const sanina = ['fackina', 'saki', 'jojopa'];
const gavnina = ['konina', 'sakani']

const saninagovnina = [...sanina, ...gavnina, 'dild'];

console.log(saninagovnina);

const Gleb = Object.create(obj);
