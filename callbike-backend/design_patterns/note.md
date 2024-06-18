
### Creational Design Patterns:

1. **Factory Method Pattern**:
   - **Mô tả**: Factory Method Pattern tách biệt quy trình tạo đối tượng khỏi lớp cụ thể của đối tượng, cho phép lớp con quyết định loại đối tượng cụ thể nào được tạo.
   - **Áp dụng**: Bạn có thể tạo một `CustomerTypeFactory` để xác định loại khách hàng (khách hàng thông thường, khách hàng VIP) và trả về một đối tượng tương ứng với mỗi loại.

2. **Builder Pattern**:
   - **Mô tả**: Builder Pattern cho phép bạn tạo ra các đối tượng phức tạp bằng cách xây dựng chúng từ các phần tử đơn giản và theo thứ tự nhất định.
   - **Áp dụng**: Bạn có thể tạo một `BookingBuilder` để xây dựng thông tin đặt xe từ các thuộc tính tùy chọn như số điện thoại, địa chỉ, tọa độ GPS, và hẹn giờ đặt xe.

### Structural Design Patterns:

1. **Adapter Pattern**:
   - **Mô tả**: Adapter Pattern chuyển đổi giao diện của một lớp thành một giao diện khác mà khách hàng mong muốn sử dụng.
   - **Áp dụng**: Bạn có thể tạo một `CallCenterAdapter` để chuyển đổi dữ liệu từ cuộc gọi điện thoại hoặc từ ứng dụng di động thành các đối tượng có thể xử lý bởi hệ thống.

2. **Facade Pattern**:
   - **Mô tả**: Facade Pattern cung cấp một giao diện đơn giản cho một tập hợp các giao diện trong một hệ thống phức tạp.
   - **Áp dụng**: Bạn có thể tạo một `BookingFacade` để cung cấp một giao diện đơn giản cho việc đặt xe, ẩn đi chi tiết triển khai của việc đặt xe qua cuộc gọi điện thoại hoặc ứng dụng di động.

### Behavioral Design Patterns:

1. **Observer Pattern**:
   - **Mô tả**: Observer Pattern cho phép một hoặc nhiều đối tượng (observers) được thông báo về thay đổi trong một đối tượng khác (subject).
   - **Áp dụng**: Bạn có thể sử dụng Observer Pattern để thông báo cho các tài xế khi có yêu cầu đặt xe mới từ khách hàng.

2. **Strategy Pattern**:
   - **Mô tả**: Strategy Pattern định nghĩa một tập hợp các thuật toán, đóng gói mỗi thuật toán, và làm cho chúng có thể hoán đổi lẫn nhau.
   - **Áp dụng**: Bạn có thể sử dụng Strategy Pattern để lựa chọn chiến lược gửi thông báo cho khách hàng, dựa trên cách mà họ sử dụng hệ thống.

3. **Chain of Responsibility Pattern**:
   - **Mô tả**: Chain of Responsibility Pattern cho phép bạn xác định một chuỗi các đối tượng xử lý một yêu cầu, mỗi đối tượng trong chuỗi quyết định xử lý hoặc chuyển tiếp yêu cầu cho đối tượng tiếp theo trong chuỗi.
   - **Áp dụng**: Bạn có thể sử dụng Chain of Responsibility Pattern để xác định và chuyển tiếp thông tin đặt xe đến tài xế gần nhất và thỏa mãn điều kiện khoảng cách GPS.