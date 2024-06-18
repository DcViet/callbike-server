# callbike-server

<h2>Ứng dụng Callbike hoạt động như thế nào?</h2>

Callbike là dự án cá nhân nhằm mục đích học tập và tìm hiểu các kỹ thuật lập trình, áp dụng công nghệ. Ở mức độ này callbike không thể so sánh với các hệ thống, ứng dụng công nghệ khác. Tuy nhiên mình đã cố gắng để nó được hoàn thành tốt nhất. 

Callbike là xử lý tất cả dữ liệu. Từ thời điểm người dùng đăng ký/ đăng nhập vào ứng dụng, đưa ra yêu cầu đi xe cho đến khi kết thúc chuyến đi và phản hồi – tất cả những hành động này đều tạo ra một lượng dữ liệu. 

Mình đặt Callbike đang phát triển như 1 ứng dụng Uber, Grab, Be, hay các ứng dụng đặt xe khác. Đồng nghĩa nó có thể tạo ra lượng lớn dữ liệu nếu nó thật sự hoạt động, bao gồm thông tin về hành khách, vị trí của họ, thẻ tín dụng, tài xế ở gần, đánh giá và xếp hạng của tài xế, chi tiết xe và chi phí dựa trên khoảng cách và thời gian. Mình đã tưởng tượng cần phải thu thập, lưu trữ và phân tích tất cả thông tin này một cách hiệu quả. Thật sự thách thức, nhưng Callbike đã làm được điều đó một cách liền mạch với lượng người dùng nhất định.
Callbike lưu trữ tất cả dữ liệu này trong cơ sở dữ liệu của mình ngay sau khi người dùng thực hiện hành động đầu tiên. Sau đó, nó xử lý các yêu cầu đi xe, sử dụng thuật toán để khớp người đó với người lái xe gần đó. 

Đối với Uber thuật toán của họ yêu cầu ứng dụng gửi yêu cầu đến tất cả các tài xế lân cận cho đến khi một trong số họ chấp nhận yêu cầu. Callbike xử lý ở level đơn giản thôi, là tìm ra tài xế gần nhất (trong tất cả tài xế khả dụng) và yêu cầu họ nhận chuyến đi. 


Điều thật sự phức tạp.
Đối với Uber nó bao gồm nhiều công nghệ được triển khai và đóng góp vào vòng đời của ứng dụng tổng thể. Callbike chỉ sử dụng các công nghệ để mô phỏng trực quan nhằm giúp các chức năng hoạt động. 
Phát triển ứng dụng di động: Callbike được xây dựng với mục tiêu triển khai nhanh, đáp ứng nhiều thiết bị. React native và khung phát triển Expo là phương án được mình lựa chọn, tuy nhiên mình đã cố gắng để đảm bảo trải nghiệm trực quan, thân thiện nhất cho người dùng (khách hàng và tài xế).

![img_wireframe-workflow.png]

Xử lý dữ liệu mối quan hệ: Callbike sử dụng sequelize để tương tác với cơ sở dữ liệu postgreSQL. Các thông tin về người dùng, chuyến đi, đánh giá được tổ chức lưu trữ để khi cần truy xuất có thể quản lý dễ dàng.

![img_database-postgreSQL]

Xử lý dữ liệu theo thời gian thực: Ứng dụng sử dụng xử lý dữ liệu theo thời gian thực để đảm bảo rằng cả người lái xe và người lái xe đều được thông báo về chuyến đi ước tính và thời gian đến nơi.. Công nghệ này thu thập thông tin từ cảm biến GPS, dữ liệu giao thông thời gian thực, v.v.

Tính toán lộ trình: Callbike sử dụng các dịch vụ bản đồ mã nguồn mở OSRM để lấy thông tin về địa điểm, lộ trình, ETA theo API OSRM cung cấp. 

Theo dõi vị trí: Callbike theo dõi vị trí của cả khách hàng và tài xế bằng cách tự động cập nhật theo thời gian thực (ở Uber họ sử dụng công nghệ theo dõi GPS). Nhờ đó, cả hai đều có thể nhận được thông tin cập nhật vị trí theo thời gian thực và xem xe đang di chuyển trên bản đồ (có độ trễ đôi chút).

Xử lý thanh toán: 

Cơ sở hạ tầng đám mây: 

Hiện tại phần xử lý thanh toán, mình chưa cập nhật trong phiển bản mã nguồn này, hình thức đưa callbike lên cơ sở hạ tầng đang được xem xét. Nếu bạn thấy bài viết hữu ích, và muốn đọc những bài viết tiếp theo cũng như cùng phát triển, hãy theo dõi và ủng hộ mình tại [Github/dcviet](https://github.com/DcViet/) :octocat:

<a href="https://github.com/DcViet"><img height="25" title="Counter" src="https://komarev.com/ghpvc/?username=DcViet&color=blueviolet&style=flat-square" alt="GitHub profile view counter"></a>

<a href="https://www.buymeacoffee.com/tranducviez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Tặng ly cà phê" style="height: 60px !important;width: 217px !important;" ></a>
