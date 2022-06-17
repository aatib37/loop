//Find sum of first 10 natural numbers using for loop

let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;

}
console.log(sum); //55

//Print fibbonaci series upto first 10 numbers.

let a = 1,
    b = 2,
    temp;
console.log(a);

for (let i = 1; i <= 10; i++) {

    temp = a + b;
    a = b;
    b = temp;
    console.log(a);
}

// output :-
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144

// 3. Print all the keys and values of employee object used in first problem

let emp = {
    myname: "Aatib Mansuri",
    email: "mansuriaatib@gmail.com",
    age: 22,
    address: "parmanad colony dewas",
    phone_no: 787913704,
    gender: "male",
    married_status: "single"
};
for (let x in emp) {
    console.log(`${x} = ${emp[x]}`);
}

// output :-
// myname = Aatib Mansuri
// email = mansuriaatib@gmail.com
// age = 22
// address = parmanad colony dewas
// phone_no = 787913704
// gender = male
// married_status = single