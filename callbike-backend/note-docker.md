
cài docker qua homebrew 
sử dụng Docker trên máy chủ Docker
(cài đặt Docker bằng Homebrew trên macOS, Docker Desktop sẽ không được sử dụng. Thay vào đó, Docker sẽ chạy trên máy chủ Docker trên macOS)

```docker --version```
//kiểm tra docker có chạy hay chưa: 
```ps aux | grep dockerd```
 đã cài đặt Docker bằng Homebrew, thì Docker daemon sẽ không được khởi chạy tự động khi bạn khởi động máy tính. Bạn có thể khởi động Docker daemon bằng lệnh sau:
 
```brew services start docker```

---

Lỗi CORS (Cross-Origin Resource Sharing) xảy ra khi trình duyệt không cho phép các yêu cầu từ một origin (nguồn) khác nhau được gửi tới server. Điều này thường xảy ra khi đang phát triển ứng dụng front-end và back-end trên các port khác nhau trong quá trình phát triển và kiểm thử.
=> cần phải cấu hình server để cho phép các yêu cầu CORS từ origin khác. Ở đây, server đang chạy trên http://localhost:4000, trong khi client (trình duyệt) gửi yêu cầu từ http://localhost:8081.
```npm install cors```
