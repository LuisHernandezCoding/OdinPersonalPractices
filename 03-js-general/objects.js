let user = {};
console.log(user)
user['name'] = 'John'
console.log(user)
user['surname'] = 'Smith'
console.log(user)
user['name'] = 'Pete'
console.log(user)
delete user.name
console.log(user)

function checkSchedule(){
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
    function isEmpty(obj){
        for (let key in obj) {
            return false
        }
        return true
    }
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
sumSalaries(salaries)
function sumSalaries(obj){
    let sum = 0
    for (const key in obj) {
        sum += obj[key]
    }
    console.log(sum)
}



// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
console.log(menu)
multiplyNumeric(menu)
function multiplyNumeric(obj){
    for (const key in obj) {
        const element = obj[key];
        if (typeof(element) == 'number') obj[key] *= 2
    }
}
console.log(menu)