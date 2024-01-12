BT1: Cho một mảng các đối tượng người dùng, tạo một mảng mới chứa tên đầy đủ của mỗi người dùng (tên và họ).

```js
const users = [
  { firstName: "Pioneer", lastName: "Club" },
  { firstName: "ETE", lastName: "DUT" },
];

// Output: ["Pioneer Club", "ETE DUT"]
```

BT2: Tính trung bình cộng của một mảng số.

```js
const numbers = [1, 4, 3, 6, 3, 6, 8, 11, 4, 6];
```

BT Tổng hợp

Yêu Cầu: Bạn có một mảng các đối tượng người dùng, với mỗi người dùng có các thuộc tính: name, age, và score. Hãy thực hiện các nhiệm vụ sau:

1. Lọc ra người dùng trên 18 tuổi. (.filter())
2. Tính điểm trung bình của người dùng trên 18 tuổi.
3. Tính điểm trung bình của người dùng trên 22 tuổi và điểm trên 80.
4. Tìm người dùng có điểm cao nhất và trả về tên của họ.
5. Sắp xếp mảng người dùng theo tuổi tăng dần.

```js
const users = [
  { name: "Alice", age: 22, score: 90 },
  { name: "Bob", age: 15, score: 85 },
  { name: "Chloe", age: 28, score: 75 },
  { name: "Dennis", age: 30, score: 95 },
  { name: "Elaine", age: 16, score: 70 },
  { name: "Frank", age: 18, score: 80 },
];
```

BT:
Bạn có một mảng chứa thông tin về các cuốn sách, với mỗi cuốn sách có các thuộc tính như title, author, year, và genres (một mảng chứa các thể loại). Hãy thực hiện các nhiệm vụ sau:

1. Lọc ra các cuốn sách được xuất bản sau năm 2000 và thuộc thể loại 'Science Fiction'.
2. Tìm cuốn sách cũ nhất trong mảng.
3. Tạo một mảng mới chứa tên tác giả, không trùng lặp.
4. Kiểm tra xem tất cả cuốn sách có được xuất bản sau năm 1900 không.
5. Sắp xếp các cuốn sách theo năm xuất bản, từ cũ đến mới.
6. Tính số lượng sách cho mỗi thể loại.

```js
const books = [
  {
    title: "Book One",
    author: "Author A",
    year: 2001,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Book Two",
    author: "Author B",
    year: 1985,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Book Three",
    author: "Author C",
    year: 2020,
    genres: ["Science Fiction", "Thriller"],
  },
  {
    title: "Book Four",
    author: "Author A",
    year: 1999,
    genres: ["Fantasy", "Horror"],
  },
  {
    title: "Book Five",
    author: "Author B",
    year: 2010,
    genres: ["Science Fiction"],
  },
];
```
