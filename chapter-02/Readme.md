# Chương 2: HTML cơ bản

## 1. Giới thiệu

HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn được sử dụng để tạo ra các trang web. Nó cung cấp cấu trúc cơ bản của trang web, cho phép chúng ta định nghĩa các phần tử như văn bản, hình ảnh, và liên kết. Đặc điểm chính của HTML là sử dụng các "thẻ" (tags) để đánh dấu nội dung, giúp trình duyệt biết cách hiển thị nội dung đó.

## 2. Những thứ nên học

### 2.1. Cú Pháp HTML:

- `<!DOCTYPE html>`: Mọi tài liệu HTML bắt đầu với khai báo <!DOCTYPE html> để nói với trình duyệt rằng đây là một trang HTML5.

- `<html>`: Là thẻ gốc của mọi tài liệu HTML, bao gồm hai phần chính là `<head>` và `<body>`.

  - `<head>`: Chứa các thông tin meta, liên kết đến tệp CSS, và script.
    - `<title>`: Định nghĩa tiêu đề của trang web.
  - `<body>`: Là nơi chứa nội dung thực tế của trang web, bao gồm văn bản, hình ảnh, video, và nhiều hơn nữa.

Thẻ cơ bản khác:

- `<p>`: Cho đoạn văn
- `<a>`: Cho liên kết
- `<img>`: Cho hình ảnh
- `<ul>` và `<li>`: Danh sách không có thứ tự
- `<h1>` đến `<h6>`: Thẻ heading

> Note
>
> Tự đóng thẻ và thẻ cần đóng: Biết được thẻ nào cần một thẻ đóng và thẻ nào là tự đóng (ví dụ: `<img />`, `<br />`).

### 2.2. Thuộc Tính HTML

Thuộc tính `class` và `id`: Dùng để xác định định danh và phân loại các phần tử, hỗ trợ cho việc tạo kiểu CSS và tương tác JavaScript.

Thuộc tính `style`: Cho phép bạn áp dụng kiểu CSS trực tiếp lên phần tử HTML.

Thuộc tính `src`, `href`: Dùng trong các thẻ như `<img>`, `<a>` để chỉ định nguồn hình ảnh và đích của liên kết.

Thuộc tính `alt`: Mô tả nội dung của hình ảnh, quan trọng cho truy cập web và SEO.

### 2.3. Cấu trúc trang
