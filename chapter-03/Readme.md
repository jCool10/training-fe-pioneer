# Chương 3: CSS cơ bản

## 1. Giới thiệu

CSS hoặc Cascading Style Sheets là ngôn ngữ được sử dụng để tạo kiểu cho giao diện người dùng của bất kỳ trang web nào.

## 2. Cách sử dụng CSS

### 2.1. Liên Kết CSS với HTML

- Inline CSS: Trực tiếp thêm CSS vào trong các thẻ HTML sử dụng thuộc tính style.

```html
<p style="color: red;">Đoạn văn màu đỏ</p>
```

<p style="color: red;">Đoạn văn màu đỏ</p>

- Internal CSS: Đặt CSS trong thẻ `<style>` ở phần `<head>` của tài liệu HTML. Dùng cho styles chỉ áp dụng cho trang đó.

- External CSS: Tạo file CSS riêng (ví dụ: `styles.css`) và liên kết nó với HTML sử dụng thẻ `<link>`. Đây là phương pháp được khuyến khích vì nó giúp quản lý và bảo trì code dễ dàng hơn.

### 2.2. Cú pháp

```CSS
selector {
  property: value;
}
```

## 3. Những thứ nên học

### 3.1. Selectors trong CSS

Selectors trong CSS được dùng để xác định các HTML elements mà bạn muốn style. Có nhiều loại selectors khác nhau, mỗi loại phục vụ cho mục đích khác nhau:

1. Type Selectors (Tag Selectors): Chọn tất cả các elements dựa trên tên tag. Ví dụ: `p` sẽ chọn tất cả các thẻ `<p>`.

2. Class Selectors: Chọn tất cả các elements có class cụ thể. Được bắt đầu bằng dấu chấm. Ví dụ: `.className` sẽ chọn tất cả các elements có `class="className"`.
3. ID Selectors: Chọn một element duy nhất có ID cụ thể. Bắt đầu bằng dấu hash (#). Ví dụ: `#header` sẽ chọn element có `id="header"`.
4. Attribute Selectors: Chọn elements dựa trên thuộc tính và giá trị của chúng. Ví dụ: `[type="text"]` sẽ chọn tất cả các elements có thuộc tính `type="text"`.
5. Pseudo-class Selectors: Chọn elements trong trạng thái đặc biệt. Ví dụ: `a:hover` sẽ áp dụng style khi người dùng di chuột qua liên kết.
6. Pseudo-element Selectors: Chọn và style một phần của element. Ví dụ: `p::first-line` sẽ style dòng đầu tiên của mỗi đoạn văn `p`.
7. Descendant Selectors: Chọn một element nằm bên trong một element khác. Ví dụ: `div p` sẽ chọn tất cả các thẻ `p` nằm trong `div`.
8. Child Selectors: Chọn trực tiếp các child elements. Ví dụ: `ul > li` sẽ chọn tất cả các `li` là trực tiếp con của `ul`.
9. Sibling Selectors: Chọn các siblings của một element. Ví dụ: `h1 + p` sẽ chọn thẻ `p` ngay sau một `h1`.

### 3.2. Properties trong CSS

Properties là những quy tắc style mà bạn áp dụng cho các elements được chọn. Mỗi property có một hoặc nhiều giá trị. Dưới đây là một số properties phổ biến:

1. Color Properties: Đặt màu cho text (`color`) và background (`background-color`).
2. Text Properties: Bao gồm font (`font-family`), size (`font-size`), weight (`font-weight`), và các thuộc tính liên quan đến text như `text-align`, `text-decoration`.
3. Box Model Properties: Bao gồm `margin`, `border`, `padding`, và `width/height`. Đây là những thuộc tính quan trọng để sắp xếp và định hình layout.
4. Positioning Properties: Đặt vị trí của elements sử dụng `position`, `top`, `right`, `bottom`, `left`, và `z-index`.
5. Display Properties: Quyết định cách một element được hiển thị trên trang. Các giá trị phổ biến bao gồm `block`, `inline`, `inline-block`, `flex`, `grid`.
6. Flexbox Properties: Điều chỉnh layout dựa trên Flexbox model, bao gồm `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-self`.
7. Grid Properties: Để quản lý layout dựa trên Grid model, sử dụng các thuộc tính như `grid-template-columns`, `grid-template-rows`, `grid-gap`, `grid-area`.
8. Transform Properties: Áp dụng các biến đổi hình học như transform: `rotate()`, `scale()`, `translate()`, `skew()`.
9. Transition Properties: Để tạo hiệu ứng chuyển đổi mượt mà khi thay đổi properties, sử dụng `transition`,` transition-property`, `transition-duration`, `transition-timing-function`.
10. Animation Properties: Định nghĩa keyframes và kiểm soát animations sử dụng `animation-name`, `animation-duration,` `animation-timing-function`, `animation-delay`, `animation-iteration-count`.

### 3.2. Box Model trong CSS

Box Model là một khái niệm cốt lõi trong CSS, giúp hiểu cách các elements được hiển thị và bố trí trên trang web. Mỗi element được coi như một hộp (box) với các thành phần sau:

1. Content: Nơi chứa nội dung thực tế của element, như văn bản, hình ảnh.
2. Padding: Khoảng cách bên trong giữa nội dung và border. Padding tăng kích thước tổng thể của element nhưng không ảnh hưởng đến màu nền.
3. Border: Đường viền bao quanh padding và nội dung. Kích thước của border cũng ảnh hưởng đến kích thước tổng thể của element.
4. Margin: Khoảng cách bên ngoài giữa các elements. Margin không ảnh hưởng đến kích thước của element nhưng tạo khoảng trống xung quanh nó.

### 3.3. Positioning trong CSS

Positioning trong CSS quyết định cách một element được đặt và bố trí trên trang. Các loại position chính bao gồm:

1. Static: Đây là giá trị mặc định. Các elements được sắp xếp theo thứ tự bình thường trong document flow.
2. Relative: Đặt element tương đối so với vị trí ban đầu của nó. Bạn có thể sử dụng `top`, `right`, `bottom`, `left` để di chuyển element từ vị trí ban đầu của nó.
3. Absolute: Đặt element tương đối so với parent gần nhất có position khác static. Nếu không có, nó sẽ tương đối với `<html>`.
4. Fixed: Giữ element cố định so với viewport, ngay cả khi cuộn trang.
5. Sticky: Kết hợp giữa `relative` và `fixed`. Element chuyển từ `relative` sang `fixed` dựa trên vị trí cuộn.

### 3.4. Layouts trong CSS

Layouts trong CSS đề cập đến cách sắp xếp và bố trí các phần tử trên trang web. Có một số kỹ thuật layout chính trong CSS:

1. Floats: Truyền thống, floats được sử dụng để tạo layout nhưng hiện nay ít phổ biến do sự xuất hiện của Flexbox và Grid.
2. Positioning: Dùng các thuộc tính position (relative, absolute, fixed, sticky) để kiểm soát vị trí của các elements.
3. Flexbox: Hệ thống một chiều cho phép linh hoạt sắp xếp các items theo hàng ngang hoặc dọc. Phù hợp cho các components và small-scale layouts.
4. CSS Grid: Hệ thống hai chiều mạnh mẽ để tạo ra các grid-based layouts. Phù hợp cho các trang web có cấu trúc phức tạp và large-scale layouts.
5. Multiple-column Layout: Dùng để tạo layout với nhiều cột, tương tự như trong báo chí và tạp chí.

### 3.4. Responsive Design trong CSS

Responsive Design là một phương pháp thiết kế web nhằm mục đích đảm bảo rằng nội dung và layout của một trang web có thể phản hồi linh hoạt tới kích thước và độ phân giải màn hình của các thiết bị khác nhau. Mục tiêu chính là cung cấp trải nghiệm người dùng tối ưu trên nhiều loại thiết bị như desktop, tablet, và điện thoại di động, mà không cần thiết kế nhiều phiên bản của trang web.

1. Media Queries: Cho phép áp dụng các quy tắc CSS khác nhau dựa trên các đặc điểm của thiết bị, chẳng hạn như chiều rộng, chiều cao, độ phân giải màn hình. Ví dụ, bạn có thể có một bộ CSS cho màn hình lớn và một bộ khác cho màn hình nhỏ.

2. Flexible Grids: Sử dụng phần trăm hoặc các đơn vị khác thay vì pixel cố định để tạo ra các layout linh hoạt, có thể thích ứng với kích thước màn hình khác nhau.

3. Flexible Images: Hình ảnh phải có thể điều chỉnh kích thước để phù hợp với các container khác nhau. Thông thường sử dụng `max-width: 100%` để đảm bảo rằng chúng không bao giờ vượt quá kích thước của container.

4. Viewport Units: Sử dụng các đơn vị như `vw` `(viewport width)` và `vh` `(viewport height)` để xác định kích thước của các elements dựa trên kích thước của viewport, giúp tạo ra layout phản hồi.

### 3.5. Transitions trong CSS

Transitions cho phép bạn tạo ra sự thay đổi dần dần của một số thuộc tính từ trạng thái này sang trạng thái khác. Bạn có thể kiểm soát tốc độ của sự chuyển đổi, cũng như cách sự chuyển đổi diễn ra qua thời gian.

Cách Sử Dụng:

1. Transition Property: Xác định thuộc tính CSS nào sẽ áp dụng transition.
2. Transition Duration: Thời gian mà transition diễn ra.
3. Transition Timing Function: Tốc độ của transition có thay đổi không và thay đổi như thế nào qua thời gian.
4. Transition Delay: Thời gian chờ trước khi transition bắt đầu.

### 3.6. Animations trong CSS

Animations cho phép bạn tạo ra các hiệu ứng động mà không cần sử dụng JavaScript. Bạn có thể tạo ra một chuỗi các thay đổi đối với một hoặc nhiều thuộc tính CSS, và điều khiển cách thức và thời gian mà sự thay đổi diễn ra.

Cách Sử Dụng:

1. @keyframes Rule: Xác định các bước của animation.
2. Animation Name: Tên gọi của `@keyframes` bạn muốn áp dụng.
3. Animation Duration: Thời gian mà animation diễn ra.
4. Animation Timing Function: Tốc độ của animation có thay đổi không và thay đổi như thế nào qua thời gian.
5. Animation Delay: Thời gian chờ trước khi animation bắt đầu.
6. Animation Iteration Count: Số lần animation sẽ chạy.
7. Animation Direction: Xác định liệu animation sẽ chạy lùi lại sau khi đạt đến cuối keyframes hay không.
