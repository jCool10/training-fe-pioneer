// const PI = Math.PI;

// console.log(PI);

// let space = " "; // chuỗi rỗng
// let firstName = "Pioneer ";
// let lastName = "Club";

// const string = "    Pioneer    Cl  ub  ";

// console.log(firstName.toLowerCase());

// console.log(firstName.substring(2, 4));

// console.log(lastName.split("u"));

// console.log(string);
// console.log(string.trim());

// console.log(string.includes("P"));

// console.log(string);
// console.log(string.replace("Pi", " Cl"));

// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i);
// }

// console.log(arr);
// console.log(arr.reverse());

// const arr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ];

// console.log(arr[3]);

// const newArr1 = new Array(5).fill("Pioneer");
// const newArr2 = new Array(3).fill("Club");

// const newArr = newArr1.concat(newArr2);
// newArr.push("ETE");
// console.log(newArr.reverse());

// const arrayNumbers = [1, 2, 3, 4, 5, 2, 4, 1, 35, 2, 3, 4];

// console.log(arrayNumbers.toString().replace(1, "Mot"));

// console.log(arrayNumbers.sort((a, b) => b - a));

// const obj = {
//   name: "Pioneer",
//   age: 25,
//   isMarried: false,
//   address: {
//     city: "HCM",
//     district: "Quan 3",
//     ward: "Phuong 2",
//     street: "Street 1",
//   },
// };

// console.log(obj.keys);
// console.log(obj.values);

// const arrayNumbers = [1, 2, 3, 4, 5, 2, 4, 1, 35, 2, 3, 4];

// for (const item of arrayNumbers) {
//   console.log(item);
// }

// for (let i = 0; i < arrayNumbers.length; i++) {
//   console.log(arrayNumbers[i]);
// }

// console.log(addNumber(2, 3));

// function addNumber(a, b) {
//   console.log("Tong cua 2 so la: " + a + " va " + b + " la: " + (a + b));

//   console.log(`Tong cua 2 so la: ${a}  va ${b} la: ${a + b} `);
//   return a + b;
// }

// addNumber(2, 3);

// ES5 vaf ES6

// const anonymousFun = function (a, b) {
//   return a + b;
// };

// const anonymousFun1 = anonymousFun(1, 4);

// console.log(anonymousFun1);

// anonymousFun();

// a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 3;
// };

// // function that takes other function as a callback
// function cube(func, n) {
//   return func(n) * n;
// }

// console.log(cube(callback, 3));
// const numbers = [1, 2, 3];
// numbers.forEach((num, index, array) => {
//   console.log(num);
//   console.log(index);
//   console.log(array);
// });

// const numberNew = numbers.map((num, index, array) => {
//   return num * 2;
// });

// console.log(numberNew);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// const newNumbers = numbers.filter((number) => {
//   return number % 2 != 0 && number > 5;
// });
// console.log(newNumbers);

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//   return;
// }, initialValue);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((sum, currentValue) => sum + currentValue, 0);
// console.log(sum);

// const cart = [
//   {
//     product: {
//       name: "Ao",
//       price: 10,
//     },
//     buy_count: 2,
//   },
//   {
//     product: {
//       name: "Quan",
//       price: 15,
//     },
//     buy_count: 8,
//   },
//   {
//     product: {
//       name: "Mu",
//       price: 50,
//     },
//     buy_count: 1,
//   },
// ];

// const total = cart.reduce((result, current) => {
//   return result + current.product.price * current.buy_count;
// }, 0);

// console.log(total); //190

// const ages = [24, 22, 25, 32, 35, 18];
// const age = ages.find((age) => age < 30);

// console.log(age);
// const users = [
//   { firstName: "Pioneer", lastName: "Club" },
//   { firstName: "ETE", lastName: "DUT" },
// ];

// // const newUsers = users.map((user, index) => {
// //   const string = user.firstName + " " + user.lastName;
// //   return string;
// //   // user[i].firstName + " " + user[i].lastName
// // });

// const newUser = users.map((user) => `${user.firstName} ${user.lastName}`);

// console.log(newUser);

// const numbers = [1, 4, 3, 6, 3, 6, 8, 11, 4, 6];

// // const average =
// //   numbers.reduce((sum, current) => sum + current, 0) / numbers.length;

// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// const sum = numbers.reduce((sum, current) => sum + current);

// const length = numbers.length;

// const average = sum / length;

// console.log(average);

// const numbers = [1, 2, 3];
// let [numOne, numTwo] = numbers;

// console.log(numbers[1]);

// console.log(numTwo);

// const func = ({ a, b, c }) => {
//   console.log(a, b, c);
// };

// func({ a: 1, c: 6, b: 4 });

// const user = {
//   name: "Pioneer",
//   title: "Programmer",
//   country: "Viet Nam",
//   city: "Da Nang",
// };

// const user2 = { ...user, title: "ete", time: "123" };

// console.log(user2);

// const sumAllNums = (...args) => {
//   console.log(args);
// };

// sumAllNums(1, 2, 3, 4, 5);

// const promise = new Promise((resolve, reject) => {
//   resolve("success");
//   reject("failure");
// });
// promise
//   .then((value) => {
//     console.log("then", value);
//     // Xử lý kết quả thành công
//   })
//   .catch((error) => {
//     console.log("catch", error);
//     // Xử lý kết quả thất bại
//   });

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     if (skills.includes("Node")) {
//       resolve("fullstack developer");
//     } else {
//       reject("Something wrong has happened");
//     }
//   }, 5000);
// });

// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// // CRUD: Create - read - update - delete;

// // fetch();

// fetch("https://restcountries.com/v2/all")
//   .then((response) => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
//   .then((data) => console.log(data)) // Xử lý dữ liệu JSON
//   .catch((error) => console.error("Error:", error));

// fetch("https://api.example.com/submit", {
//   method: "POST", // Phương thức HTTP
//   headers: {
//     "Content-Type": "application/json", // Loại nội dung
//     // Các header khác nếu cần
//   },
//   body: JSON.stringify({ key: "value" }), // Dữ liệu được gửi
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

const url = "https://restcountries.com/v2/all";
const fetchData = async () => {
  try {
    console.log(1);
    const response = await fetch(url);
    console.log(2);
    const countries = await response.json();
    console.log(3);
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();

fetch("https://api.example.com/data")
  .then((response) => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
  .then((data) => console.log(data)) // Xử lý dữ liệu JSON
  .catch((error) => console.error("Error:", error)); // Xử lý lỗi
