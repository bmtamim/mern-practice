const person = {
    name : 'Tamim',
    age : 23,
    height: '5.11"',
}

for (props in person){
    console.log(props + ": "+person[props]);
}