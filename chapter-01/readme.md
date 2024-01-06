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
