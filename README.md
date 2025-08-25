# _EA
# EA Cậu Vàng - Website Landing Page

Website giới thiệu Expert Advisor EA Cậu Vàng với cấu trúc modular và khoa học.

## 📁 Cấu trúc Project

```
EAForex/
├── index.html              # Trang chính (layout + navigation)
├── pages/                  # Các trang nội dung riêng biệt
│   ├── home.html          # Trang chủ (hero + updates)
│   ├── features.html      # Trang tính năng
│   ├── backtest.html      # Trang backtest & hiệu suất
│   ├── download.html      # Trang tải về & testimonials
│   ├── faq.html           # Trang câu hỏi thường gặp
│   └── contact.html       # Trang liên hệ
├── assets/
│   ├── css/
│   │   └── style.css      # CSS chung cho toàn bộ website
│   └── js/
│       └── main.js        # JavaScript chính (navigation, page loading)
├── Report-159468482.pdf   # File PDF báo cáo backtest
└── README.md              # Tài liệu hướng dẫn (file này)
```

## 🚀 Tính năng

### Navigation System
- **Single Page Application (SPA)**: Tất cả nội dung được tải động qua JavaScript
- **Responsive Design**: Hỗ trợ đầy đủ mobile và desktop
- **Active State Management**: Tự động highlight menu đang active

### Modular Architecture
- **Tách biệt nội dung**: Mỗi menu một file HTML riêng
- **CSS/JS độc lập**: Styles và scripts được tổ chức trong thư mục `assets/`
- **Dễ bảo trì**: Có thể chỉnh sửa từng phần mà không ảnh hưởng phần khác

### Performance
- **Lazy Loading**: Chỉ tải nội dung khi cần
- **Minimal Bundle**: CSS và JS được tối ưu hóa
- **CDN Integration**: Sử dụng Tailwind CSS từ CDN

## 🛠️ Cách sử dụng

### 1. Mở website
Mở file `index.html` trong trình duyệt hoặc deploy lên web server.

### 2. Chỉnh sửa nội dung
- **Trang chủ**: Chỉnh sửa `pages/home.html`
- **Tính năng**: Chỉnh sửa `pages/features.html`
- **Backtest**: Chỉnh sửa `pages/backtest.html`
- **Tải về**: Chỉnh sửa `pages/download.html`
- **FAQ**: Chỉnh sửa `pages/faq.html`
- **Liên hệ**: Chỉnh sửa `pages/contact.html`

### 3. Chỉnh sửa giao diện
- **CSS chung**: Chỉnh sửa `assets/css/style.css`
- **Navigation**: Chỉnh sửa phần header trong `index.html`
- **Footer**: Chỉnh sửa phần footer trong `index.html`

### 4. Thêm tính năng JavaScript
- **Functions chung**: Thêm vào `assets/js/main.js`
- **Page-specific**: Thêm scripts riêng trong từng file HTML

## 📝 Thêm menu mới

1. **Tạo file HTML mới** trong thư mục `pages/`
   ```html
   <!-- pages/new-page.html -->
   <section class="max-w-7xl mx-auto px-6 py-20">
     <h2 class="text-3xl sm:text-4xl font-extrabold">Tiêu đề trang mới</h2>
     <!-- Nội dung của bạn -->
   </section>
   ```

2. **Thêm menu vào navigation** trong `index.html`
   ```html
   <a href="#" onclick="loadPage('new-page')" class="nav-item hover:text-white" data-page="new-page">Menu mới</a>
   ```

## 🎨 Customization

### Colors
Website sử dụng Tailwind CSS với color scheme:
- **Primary**: Cyan (cyan-400, cyan-500)
- **Secondary**: Indigo (indigo-400, indigo-500)
- **Background**: Slate (slate-950, slate-900)
- **Text**: Slate (slate-100, slate-300)

### Animations
- **Floating shapes**: Animation cho các hình trang trí
- **Gradient background**: Background động với gradient
- **Smooth scrolling**: Cuộn mượt giữa các section

## 🌐 Deployment

### Local Development
Mở `index.html` trực tiếp trong trình duyệt.

### Web Hosting
Upload toàn bộ thư mục lên web server. Đảm bảo:
- File `index.html` ở root directory
- Thư mục `pages/` và `assets/` được upload đầy đủ
- File PDF có thể truy cập được

### Domain & HTTPS
- Cấu hình domain trỏ về thư mục chứa website
- Bật HTTPS cho bảo mật tốt hơn

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: No external dependencies
- **Font**: Inter (Google Fonts)

## 📞 Hỗ trợ

Nếu cần hỗ trợ kỹ thuật hoặc có câu hỏi về cấu trúc website, vui lòng liên hệ qua các kênh đã được cấu hình trong trang Contact.
