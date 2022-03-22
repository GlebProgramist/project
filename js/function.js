
const calc = function(){
    console.log('hi');
};

calc();

console.log(scr(5,4));
function scr(a,b){
    return (a+b);
}

console.log(scr(5,4));

const str = (a,b) => {return a+b};
console.log(str(2,4));

let per = 'Mark';
console.log(per[1] = 'z');
console.log(per);

const a  = 'Mark umniy';
console.log(a.slice(5,10));

function Learn(lang, callBack){
    console.log(`ya viuchil: ${lang}`);
    callBack();
}

function cl (){
    console.log('kdkk');
}

Learn('JS', cl);