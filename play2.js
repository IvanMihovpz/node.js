const person={
name: 'Max',
age:29,
greet:()=>{
    console.log('Hi, I am '+ this.name);
}
};

const printName=({name})=>{
    console.log(name);
}

printName(person);

const{name,age}=person;
console.log(name,age);

const hobbies=['Sports', 'Cooking'];
const [hobby1,hobby2];
console.log(hobby1,hobby2);

for(let hobby of hobbies){
    console.log(hobby);
}

hobbies.push('Programming');

console.log(hobbies.map(hobby=> 'Hobby: '+hobby));

console.log(hobbies);

const copiedArray=[...hobbies]
console.log(copiedArray);

const toArray=(...args)=>{
returnargs;
};

console.log(toArray(1,2,3,4));
