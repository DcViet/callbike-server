const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'dt21880291', password: '0291', first_name: 'Duc', last_name: 'Truong' },
  { id: 2, username: 'dc', password: 'ad', first_name: 'ad', last_name: 'admin' },
];

// Khóa bí mật để ký JWT
const JWT_SECRET = 's3cr3t';

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET);
};

// Hàm xử lý đăng nhập
const authSignin = (req, res) => {
  const { username, password } = req.body;
  
  console.log('Received login request with:', { username, password });

  try {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      return res.status(401).send('Thông tin đăng nhập không hợp lệ');
    }
    // tao token và trả về thông tin người dùng
    const token = generateToken(user.id);
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Đã xảy ra lỗi khi xử lý yêu cầu');
  }
};


module.exports = { authSignin};
