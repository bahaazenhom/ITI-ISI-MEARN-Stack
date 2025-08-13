// 1 ------------------------------------------
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    display: function() {
        console.log("Car Brand: " + this.brand);
        console.log("Car Model: " + this.model);
        console.log("Car Year: " + this.year);
    }
}

// 2 ------------------------------------------
for(var key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(key + " -> " + car[key]);
    }
}

// 3 ------------------------------------------
function copy(obj){
    var newObj = Object.assign({}, obj);
    return newObj;
}

// 4 ------------------------------------------
var person = {
    name: "John Doe",
    age: 30,
    address:{
        city: "Los Angeles",
        state: "CA",
        zip: "90001"
    },
    job:{
        title: "Software Engineer",
        company: "Tech Corp"
    },
    display: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("City: " + this.address.city);
        console.log("State: " + this.address.state);
        console.log("Zip: " + this.address.zip);
        console.log("Job Title: " + this.job.title);
        console.log("Company: " + this.job.company);
    }
}

// 5 ------------------------------------------
var persons = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 23 },
    { name: "Charlie", age: 35 }
];
persons.sort(function(a, b){return a.age - b.age;});

// 6 ------------------------------------------
var arr = [1, 2, 3, 4, 5];
var min = 100, max = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
}

// 7 ------------------------------------------
var arr = [1, 2, 3, 4, 5, 6];
for(var i = 0,j=arr.length-1; i < j; i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 8 ------------------------------------------
var products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
for(var i = 0; i < products.length; i++) {
    products[i].discountedPrice = products[i].price * 0.9; 
}
for(var i = 0; i < products.length; i++) console.log(products[i]);

// 9 ------------------------------------------
function getDayName(dateString){
    var date = new Date(dateString);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

// 10 ------------------------------------------
var numbers1 = prompt("Enter numbers like 1,6,5,9,1,2");
numbers1 = numbers1.split(",").map(Number);
var numbers2 = prompt("Enter numbers like 5,6,3,1,9");
numbers2 = numbers2.split(",").map(Number);
var freq = [];
var mergedNumbers = [];
for(var i=0;i<numbers1.length;i++){
    freq[numbers1[i]]++;
    if(freq[numbers1[i]]==0)mergedNumbers.push(numbers1[i]);
}
for(var i=0;i<numbers2.length;i++){
    freq[numbers2[i]]++;
    if(freq[numbers2[i]]==0)mergedNumbers.push(numbers2[i]);
}
console.log(mergedNumbers);