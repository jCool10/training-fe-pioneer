# Chương 1: JavaScript cơ bản

## 1. Giới thiệu

ReactJS là một thư viện JavaScript, vì vậy hiểu về JavaScript là rất quan trọng.

## 2.Những thứ nên học

### 2.1. Biến

Có 3 từ khóa để khai báo biến:

- var:
  - Phạm vi: Function scope
  - Gán lại giá trị: Có thể gán lại giá trị.
- let:
  - Phạm vi: Block scope
  - Gán lại giá trị: Có thể gán lại giá trị nhưng không thể khai báo lại trong cùng một phạm vi.
- const:
  - Phạm vi: Block scope
  - Gán lại giá trị: Không thể gán lại giá trị.

### 2.2. Các kiểu dữ liệu

- Primitive Data Types

  - Numbers
  - Strings
  - Booleans
  - Null
  - Undefined
  - Symbol

- Non-primitive data types
  - Objects
  - Arrays

#### 2.2.1. Numbers

Số là số nguyên và giá trị thập phân có thể thực hiện tất cả các phép toán số học.

### Khai báo dữ liệu

```js
let age = 35;
const gravity = 9.81;
const PI = 3.14;
```

### Phương thức (Method)

Trong JavaScript, Đối tượng Math cung cấp rất nhiều phương thức để tương tác các con số.

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

#### 2.2.2. String

Chuỗi là văn bản, nằm dưới dấu **nháy kép**, **nháy đơn**, **back-tick**. Để khai báo một chuỗi, chúng ta cần tên biến, toán tử gán, giá trị dưới dấu nháy đơn, dấu nháy kép hoặc dấu ngoặc kép.

### Khai báo dữ liệu

```js
let space = " "; // chuỗi rỗng
let firstName = "Pioneer";
let lastName = "Club";
```

```js
// Nối chuỗi
let fullName = firstName + space + lastName;
console.log(fullName);
```

**_Template Strings_**

```js
console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically
```

### Phương thức

1. `.length`: Trả về độ dài của chuỗi bao gồm không gian trống.
2. `.toUpperCase()`: Thay đổi chuỗi thành chữ hoa.
3. `.toLowerCase()`: Thay đổi chuỗi thành chữ thường.
4. `.substr(index,number)`: Cắt chuỗi. Cần 2 đối số (Index bắt đầu, số kí tự để cắt)
5. `.substring(start,end)`: Cắt chuỗi. Cần 2 đối số (Vị trí bắt đầu, vị trí kết thúc) (Không bao gồm kí tự ở vị trí kết thúc)
6. `.split()`: Tách một chuỗi tại một vị trí được chỉ định.
7. `.trim()`: Loại bỏ khoảng trắng ở đầu hoặc cuối chuỗi.
8. `.includes()`: Nó nhận một đối số chuỗi con và nó kiểm tra xem đối số chuỗi con có tồn tại trong chuỗi hay không. include() trả về kiểu boolean. Nếu một chuỗi con tồn tại trong một chuỗi, nó trả về true, ngược lại là false.
9. `.replace()`: nhận như một tham số là chuỗi con cũ và một chuỗi con mới.
10. `.indexOf()`: Lấy một chuỗi con và nếu chuỗi con tồn tại trong một chuỗi, nó trả về vị trí đầu tiên của chuỗi con nếu không tồn tại nó trả về -1.

#### 2.2.3. Boolean,Null,Undefined

### Khai báo dữ liệu

```js
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false
```

```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```

```js
let empty = null;
console.log(empty); // -> null , means no value
```

#### 2.2.4. Arrays

### Khai báo dữ liệu

```js
// syntax
const arr = Array() || new Array() || [];
// or
console.log(arr); // []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);
```

### Phương thức

1. `.fill()`:Tạo ra mảng với các giá trị giống nhau
2. `.concat()`: Nối 2 mảng với nhau
3. `.length`: Độ dài của mảng
4. `.indexOf()`: Kiểm tra xem giá trị đó có trong mảng không. Nếu có thì trả về vị trí (index). Nếu không trả về -1.
5. `.includes()`: Tương tự `.indexOf()`. Tuy nhiên nếu tồn tại sẽ trả về true, nếu không trả về false
6. `.toString()`: Chuyển từ Array sang string
7. `.slice()`: Cắt chuỗi
8. `.push()`: Thêm 1 phần tử vào cuối mảng.
9. `.reverse()`: Đảo mảng
10. `.sort()`: Sắp xếp mảng theo thư tự mong muốn

#### 2.2.5. Object

### Khai báo dữ liệu

```js
const person = {}; //An empty object

const rectangle = {
  length: 20,
  width: 20,
};

const person = {
  age: 250,
  country: "Viet Nam",
  city: "Da Nang",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isTrue: true,
  getCityAnhContry: function () {
    return `${this.country} ${this.city}`;
  },
};
```

### Phương thức

1. `.keys()`: Trả về giá trị key của object
2. `.values()`: Trả về giá trị value của object

### 2.3. Các câu lệnh điều khiển

#### 2.3.1. Các câu lệnh điều kiện

1. `if(){}`

```js
if (condition) {
  //this part of code runs for truthy condition
}
```

2. `if(){} else{}`

```js
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

3. `if(){} else if(){} else{}`

```js
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  //  code
}
```

4. `switch(){}`

```js
switch (caseValue) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  case 3:
    // code
    break;
  default:
  // code
}
```

#### 2.3.2. Các câu lệnh vòng lặp

1. for Loop

```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
```

2. whilte loop

```js
while (condition) {
  // code
}
```

3. do while loop

```js
do {
  // code
} while (condition);
```

4. for of loop

```js
for (const element of arr) {
  // code goes here
}
```

#### 2.3.3. Các câu lệnh nhảy

1. `break`

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

2. `continue`

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
```

### 2.4. Hàm

#### 2.4.1. Declaration function

```js
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses

// Hàm trả về (Function returning value)
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}
console.log(addTwoNumbers());

// Hàm có tham số (Function with a parameter)
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(sumTwoNumbers(10, 20));
```

#### 2.4.2. Anonymous function

Là hàm khi khởi tạo không cần tên

```js
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
```

#### 2.4.3. Arrow function

```js
function square(n) {
  return n * n;
}

const square = (n) => {
  return n * n;
};

const square = (n) => n * n;

console.log(square(2)); // -> 4
```

#### 2.4.4. Higher order functions (HOF)

1. Callback

Callback function là 1 hàm có thể truyền tham số là 1 hàm khác

```js
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

2. Returning function

```js
// Higher order function returning an other function
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers)); //15
```

#### 2.4.5. Functional Programming (Lập trình hàm)

1. `.forEach()`

Thực hiện mỗi hành động cho mỗi phần tử trong mảng và không có gì trị trả về

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});

arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});

const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num);
});
// 1, 2, 3
```

2. `.map()`

Tương tự `.forEach()` tuy nhiên, sẽ có giá trị trả về.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

3. `.filter()`

Lọc và tạo ra 1 mảng mới thõa mãn điều kiện đưa ra

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const newNumbers = numbers.filter((number) => number % 2 == 0 && number > 5);
console.log(newNumbers);
// [ 6, 8, 10 ]
```

4. `.reduce()`

Một công cụ mạnh mẽ và linh hoạt cho phép bạn tính toán một giá trị duy nhất từ một mảng các giá trị.

```js
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return;
}, initialValue);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 15

const cart = [
  {
    product: {
      name: "Ao",
      price: 10,
    },
    buy_count: 2,
  },
  {
    product: {
      name: "Quan",
      price: 15,
    },
    buy_count: 8,
  },
  {
    product: {
      name: "Mu",
      price: 50,
    },
    buy_count: 1,
  },
];

const total = cart.reduce((result, current) => {
  return result + current.product.price * current.buy_count;
}, 0);

console.log(total); //190
```

5. `.every()`

Kiểm tra xem thử tất cả các phần từ trong mảng có thõa mãn một điều kiện nào đó không. Nếu tất cả thõa mãn thì trả về `true`, nếu 1 phần từ sai thì trả về `false`

```js
const names = ["Pioneer", "DUT", "ETE"];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); //true

const names = ["Pioneer", "DUT", "ETE", 2023];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); //false
```

6. `.find()`

Trả về phần tử đầu tiên thõa mãn điều kiện

```js
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 30);

console.log(age); // 24
```

7. `.findIndex()`

Tương tự như `.find()`, nhưng sẽ trả về index (vị trí) của phần từ vừa tìm được.

```js
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.findIndex((age) => age < 20);
console.log(age); // 5
```

8. `.some()`

Ngược lại với `.every()`, `.some()`, chỉ cần 1 phần tử thõa mãn điều kiện thì sẽ trả về `true`, không thõa mãn với tất cả phần tử thì sẽ trả về `false`.

```js
const bools = [true, false, false, true];

const areSomeTrue = bools.some((b) => b === true);

console.log(areSomeTrue); //true
```

9.  `.sort()`

Sắp xếp thử tự trong mảng theo thứ tự tăng dần hoặc giảm dần

```js
//Sorting string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

// Sorting Numeric values
const numbers = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result.
console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); //[100, 37, 9.81, 3.14]

// Sorting Object Arrays
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users);
/*
[
  { name: 'Elias', age: 22 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Asabeneh', age: 150 }
]
*/
```

### 2.5. Destructuring và Spreading

#### 2.5.1. Destructuring

Destructuring cho phép trích xuất các giá trị từ một mảng hoặc đối tượng vào các biến riêng lẻ một cách dễ dàng.

1. Destructing Arrays

```js
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree); //  1 2 3

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); //Asabeneh Brook David John

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd); //["HTML", "CSS", "JS", "React"]
console.log(backEnd); //["Node", "Express", "MongoDB"]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]


```

2. Destructing Objects

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter); //20 10 200 undefined

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter({ width: 30, height: 20 })); // 100
```

#### 2.5.1. Spreading

1. Arrays

```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers); //[0, 2, 4, 6, 8, 10]
console.log(oddNumbers);
console.log(wholeNumbers);
```

2. Objects

```js
const user = {
  name: "Pioneer",
  title: "Programmer",
  country: "Viet Nam",
  city: "Da Nang",
};

const copiedUser1 = { ...user };
const copiedUser2 = { ...user, title: "Club" };
console.log(copiedUser1); //{name: "Pioneer",title: "Programmer",country: "Viet Nam",city: "Da Nang"};
console.log(copiedUser2); //{name: "Pioneer",title: "Club",country: "Viet Nam",city: "Da Nang"};

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]
```

### 2.6. Callbacks Function

Một hàm gọi lại là một hàm được truyền như một đối số vào hàm khác. Sau khi thực hiện một số xử lý, hàm này sẽ được gọi bởi hàm mà nó được truyền vào.

Mục đích Sử Dụng:

- Xử lý Bất đồng bộ: Trong các hoạt động như yêu cầu mạng, đọc/ghi file, hoặc bất kỳ hoạt động nào mà kết quả không có ngay lập tức, callback được sử dụng để xử lý kết quả sau khi hoạt động hoàn thành.
- Tùy chỉnh Hành vi: Trong các tình huống như sắp xếp, lọc, hoặc biến đổi dữ liệu, callback cho phép người dùng định nghĩa logic cụ thể.

```js
//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);
```

#### 2.6.1. Promise

Promise trong JavaScript là một cơ chế để xử lý các hoạt động bất đồng bộ một cách linh hoạt hơn so với các hàm gọi lại (callbacks) truyền thống. Một Promise đại diện cho một giá trị chưa được biết đến khi nó được tạo, nhưng hứa hẹn sẽ cung cấp một giá trị vào một thời điểm nào đó trong tương lai.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});
promise
  .then((value) => {
    // Xử lý kết quả thành công
  })
  .catch((error) => {
    // Xử lý kết quả thất bại
  });

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
// ["HTML", "CSS", "JS"]

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
// Something wrong has happened
```

#### 2.6.2. Fetch API

Fetch API trong JavaScript là một cách hiện đại và mạnh mẽ để thực hiện các yêu cầu HTTP (như GET, POST, PUT, DELETE, v.v.) từ máy chủ web.

HTTP Method:

- GET: Dùng để yêu cầu dữ liệu từ một nguồn đã chỉ định.
- POST: Dùng để gửi dữ liệu đến máy chủ để tạo hoặc cập nhật tài nguyên.
- PUT: Dùng để gửi dữ liệu đến máy chủ để tạo mới hoặc thay thế một tài nguyên hiện có.
- DELETE: Dùng để xóa tài nguyên đã chỉ định.

```js
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
  .then((data) => console.log(data)) // Xử lý dữ liệu JSON
  .catch((error) => console.error("Error:", error)); // Xử lý lỗi

fetch("https://api.example.com/submit", {
  method: "POST", // Phương thức HTTP
  headers: {
    "Content-Type": "application/json", // Loại nội dung
    // Các header khác nếu cần
  },
  body: JSON.stringify({ key: "value" }), // Dữ liệu được gửi
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### 2.6.3. Async và Await

Đây là 1 cách để xử lí Promise dễ hiểu và dễ viết

```js
const url = "https://api.example.com/submit";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
```
