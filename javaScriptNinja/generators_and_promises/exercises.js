// 2

function* NinjaGenerator(){
  yield "Yoshi";
  return "Hattori";
  yield "Hanzo";
}

var ninjas = [];

for(let ninja of NinjaGenerator()){
  ninjas.push(ninja);
}

ninjas;
var gen = NinjaGenerator();
NinjaGenerator().next()
NinjaGenerator().next()
"*************"
gen.next();
gen.next();

"*************"
// 3

function *Gen(val){
  yield val * 2;
  yield val +1;
}

let generator = Gen(3);
let a1 = generator.next(3).value;
let a2 = generator.next().value;
let a3 = generator.next(4).value;


"generator = " + generator.next();
"a1 = " + a1;
"a2 = " + a2;
"a3 = " + a3
