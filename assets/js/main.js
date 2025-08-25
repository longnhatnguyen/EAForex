// Common JavaScript functions
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Load home page by default
    loadPage('home');
    updateActiveNav('home');
});

// Page content storage
const pageContent = {
    home: `
    <!-- Hero Section -->
    <section class="relative max-w-7xl mx-auto px-6 pb-24 pt-6 sm:pt-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-black leading-tight">
            Expert Advisor tối ưu <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">hiệu suất</span>,
            giảm <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">rủi ro</span>
          </h1>
          <p class="mt-4 text-slate-300 text-lg">
            EA Cậu Vàng giúp bạn giao dịch tự động theo chiến lược rõ ràng: quản trị vốn, lọc tín hiệu, trailing theo xu hướng.
            Tối giản cấu hình – bật là chạy.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="myfile.zip" download class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95">
              📥 Tải EA miễn phí
            </a>
            <a href="#" onclick="loadPage('features')" class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 font-semibold">
              Xem tính năng
            </a>
          </div>
          <div class="mt-6 flex items-center gap-6 text-sm text-slate-400">
            <div class="flex items-center gap-2"><span class="text-xl">⭐️⭐️⭐️⭐️⭐️</span> 1,200+ người dùng</div>
            <div class="flex items-center gap-2">⏱ Backtest 5 năm</div>
            <div class="flex items-center gap-2">🔒 Không thu thập dữ liệu</div>
          </div>
        </div>

        <!-- PDF Viewer -->
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl blur opacity-25"></div>
          <div class="relative rounded-3xl bg-slate-900/60 border border-white/10 p-2 sm:p-4 backdrop-blur-md flex flex-col items-center justify-center">
            <div class="w-full text-center mb-2 text-slate-300 font-semibold">Báo cáo Backtest (PDF)</div>
            <iframe src="Report-159468482.pdf" class="w-full h-[420px] rounded-xl border border-cyan-500/30 bg-white" style="min-height:320px;" frameborder="0"></iframe>
            <div class="mt-2 text-xs text-slate-400">Nếu không xem được PDF, <a href="Report-159468482.pdf" class="underline hover:text-cyan-400" download>Tải về tại đây</a>.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Update Section -->
    <section class="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-2">
      <div class="relative rounded-3xl bg-gradient-to-r from-cyan-800/40 to-indigo-900/40 border border-cyan-500/20 shadow-lg p-1 mb-10 overflow-hidden">
        <div class="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
        <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl"></div>
        <div class="relative rounded-3xl bg-slate-900/80 p-6 sm:p-8">
          <div class="flex items-center justify-center mb-3">
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-white text-2xl shadow-lg mr-2">🆕</span>
            <h2 class="text-2xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-tight">Cập nhật ngày 24/08</h2>
          </div>
          <div class="grid sm:grid-cols-2 gap-6 mt-2">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">🧑‍💻</span>
                <span class="font-bold text-cyan-300">Ezreal</span>
              </div>
              <ul class="list-disc pl-5 text-slate-300 space-y-1 text-sm">
                <li><b>Limit Buy 0.01</b>: Dừng DCA, không vào thêm lệnh (phục vụ đóng lệnh thủ công sẽ tự động tính lại TP, không mở lệnh mới)</li>
                <li><b>Limit Buy 0.02</b>: Dừng hẳn BOT</li>
                <li><b>Limit Buy 0.03</b>: Chuyển Mode cấp cao nhất (2k5 X1 ≈ 10k x4)</li>
                <li>Tạm bỏ chức năng SL bằng cây cân huệ</li>
              </ul>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">🐫</span>
                <span class="font-bold text-indigo-300">Cammel (Kalistar)</span>
              </div>
              <ul class="list-disc pl-5 text-slate-300 space-y-1 text-sm">
                <li>Nếu không còn lệnh limit buy/sell thì sẽ dời TP về hòa, không cần lãi nữa</li>
                <li>Auto tính lại TP khi có lệnh được đóng thủ công</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    
    features: `
    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-3xl sm:text-4xl font-extrabold">Tính năng nổi bật</h2>
      <p class="mt-2 text-slate-300">Thiết kế để an toàn, đều đặn và dễ dùng cho mọi trader.</p>

      <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">⚙️</div>
          <h3 class="mt-3 font-bold text-lg">Chiến lược rõ ràng</h3>
          <p class="mt-1 text-slate-300">Lọc xu hướng, xác nhận động lượng, tránh vùng nhiễu – hạn chế lệnh xấu.</p>
        </div>
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">🛡️</div>
          <h3 class="mt-3 font-bold text-lg">Quản trị rủi ro</h3>
          <p class="mt-1 text-slate-300">Lot theo vốn, SL/TP động, trailing theo ATR – kiểm soát drawdown.</p>
        </div>
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">⚡</div>
          <h3 class="mt-3 font-bold text-lg">Tối ưu hiệu năng</h3>
          <p class="mt-1 text-slate-300">Thuật toán nhẹ, phản hồi nhanh, tương thích MT4/MT5.</p>
        </div>
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">🧰</div>
          <h3 class="mt-3 font-bold text-lg">Preset sẵn</h3>
          <p class="mt-1 text-slate-300">Nhiều cấu hình đã tối ưu – cài là chạy, không cần tinh chỉnh nhiều.</p>
        </div>
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">📈</div>
          <h3 class="mt-3 font-bold text-lg">Báo cáo</h3>
          <p class="mt-1 text-slate-300">Xuất nhật ký, thống kê lệnh, equity curve ngay trong EA.</p>
        </div>
        <div class="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
          <div class="text-2xl">🔌</div>
          <h3 class="mt-3 font-bold text-lg">Tương thích</h3>
          <p class="mt-1 text-slate-300">Hoạt động tốt trên VPS/PC, broker phổ biến, spread tiêu chuẩn.</p>
        </div>
      </div>
    </section>`,
    
    backtest: `
    <!-- Backtest / Performance Section -->
    <section class="relative">
      <div class="absolute inset-0 grad opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-extrabold">Hiệu suất & Backtest</h2>
            <ul class="mt-4 space-y-2 text-slate-300">
              <li>• Dữ liệu 2019–2024 (5 năm)</li>
              <li>• Profit Factor ~1.7, Winrate ~63%</li>
              <li>• Max Drawdown < 10% với quản trị vốn mặc định</li>
              <li>• Spread chuẩn, không martingale, không grid vô hạn</li>
            </ul>
            <p class="mt-4 text-sm text-slate-400">*Lưu ý: Kết quả quá khứ không bảo đảm lợi nhuận tương lai. Vui lòng test demo trước.</p>
          </div>
          <div>
            <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div class="text-sm text-slate-400">Equity Curve (Minh hoạ)</div>
              <svg viewBox="0 0 640 280" class="w-full mt-3">
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="640" height="280" rx="14" fill="#0b1220"/>
                <polyline fill="url(#g2)" stroke="#6366f1" stroke-width="3" points="0,240 40,238 80,236 120,232 160,228 200,222 240,214 280,206 320,196 360,188 400,176 440,168 480,154 520,138 560,120 600,100 640,76 640,280 0,280"/>
              </svg>
              <div class="mt-4 grid grid-cols-3 gap-4 text-center">
                <div class="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <div class="text-xs text-slate-400">Lợi nhuận năm</div>
                  <div class="text-2xl font-bold">+32%</div>
                </div>
                <div class="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <div class="text-xs text-slate-400">Số lệnh/năm</div>
                  <div class="text-2xl font-bold">420</div>
                </div>
                <div class="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <div class="text-xs text-slate-400">Max DD</div>
                  <div class="text-2xl font-bold">9.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    
    download: `
    <!-- Download / Pricing Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-8 items-end">
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold">Tải EA miễn phí</h2>
          <p class="mt-3 text-slate-300">Bản phát hành ổn định, kèm preset & hướng dẫn cài đặt. Bạn có thể dùng demo trước khi chạy thật.</p>
          <ul class="mt-4 space-y-2 text-slate-300">
            <li>• File: <span class="font-mono">EA_Pro.ex4 / EA_Pro.ex5</span></li>
            <li>• Yêu cầu: MT4/MT5, leverage ≥ 1:100, VPS khuyến nghị</li>
            <li>• Bonus: Template + Preset + PDF hướng dẫn</li>
          </ul>
          <a href="myfile.zip" download class="mt-6 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold shadow-lg shadow-emerald-500/20 hover:opacity-95">📥 Tải trọn bộ (.zip)</a>
        </div>

        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="text-xl font-bold">Bản Pro (tuỳ chọn)</h3>
          <p class="mt-1 text-slate-300">Mở khoá thêm tính năng nâng cao: lọc phiên giao dịch, tin tức, quản trị vốn linh hoạt, thông báo Telegram.</p>
          <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div class="flex items-center gap-2">✅ Lọc phiên & news filter</div>
            <div class="flex items-center gap-2">✅ Chống overtrade</div>
            <div class="flex items-center gap-2">✅ Trailing nâng cao</div>
            <div class="flex items-center gap-2">✅ Cảnh báo Telegram</div>
          </div>
          <a href="#" onclick="loadPage('contact')" class="mt-6 inline-block px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/30">Liên hệ nâng cấp</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative">
      <div class="absolute inset-0 grad opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-6 py-20">
        <h2 class="text-3xl sm:text-4xl font-extrabold">Người dùng nói gì?</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <figure class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <blockquote class="text-slate-300">"Chạy demo 3 tuần thấy vào lệnh rất chọn lọc, drawdown thấp. Phù hợp đánh an toàn."</blockquote>
            <figcaption class="mt-4 text-sm text-slate-400">– Vũ A., Hà Nội</figcaption>
          </figure>
          <figure class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <blockquote class="text-slate-300">"Preset sẵn tiện cực, gắn vô là chạy. Mình dùng VPS 2GB vẫn mượt."</blockquote>
            <figcaption class="mt-4 text-sm text-slate-400">– Minh K., TP.HCM</figcaption>
          </figure>
          <figure class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <blockquote class="text-slate-300">"EA có quản trị vốn tốt, không martingale nên tâm lý nhẹ nhàng hơn."</blockquote>
            <figcaption class="mt-4 text-sm text-slate-400">– Huy N., Đà Nẵng</figcaption>
          </figure>
        </div>
      </div>
    </section>`,
    
    faq: `
    <!-- FAQ Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-3xl sm:text-4xl font-extrabold">Câu hỏi thường gặp</h2>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">EA có dùng martingale hay grid không?</h3>
          <p class="mt-2 text-slate-300">Không. EA tập trung vào chất lượng tín hiệu và quản trị vốn chặt chẽ.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Có hỗ trợ MT4 hay MT5?</h3>
          <p class="mt-2 text-slate-300">Hỗ trợ cả hai phiên bản. File .ex4/.ex5 có trong gói tải về.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Nên chạy ở khung thời gian nào?</h3>
          <p class="mt-2 text-slate-300">Khuyến nghị H1/H4. Bạn có thể backtest để chọn cặp phù hợp.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Có cần VPS không?</h3>
          <p class="mt-2 text-slate-300">Nên dùng VPS để EA hoạt động 24/5 ổn định, tránh gián đoạn kết nối.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Vốn tối thiểu để chạy EA?</h3>
          <p class="mt-2 text-slate-300">Khuyến nghị từ $100 trở lên để có đủ margin cho quản trị rủi ro hiệu quả.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">EA có hoạt động trên mọi cặp tiền tệ?</h3>
          <p class="mt-2 text-slate-300">Tối ưu cho các cặp major như EURUSD, GBPUSD, USDJPY. Có thể test trên các cặp khác.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Làm sao để cập nhật EA?</h3>
          <p class="mt-2 text-slate-300">Chúng tôi sẽ thông báo qua email khi có phiên bản mới. File cập nhật sẽ được gửi miễn phí.</p>
        </div>
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
          <h3 class="font-bold">Có hỗ trợ kỹ thuật không?</h3>
          <p class="mt-2 text-slate-300">Có. Chúng tôi hỗ trợ cài đặt và tối ưu EA qua email hoặc Telegram.</p>
        </div>
      </div>
    </section>`,
    
    contact: `
    <!-- Contact Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold">Liên hệ hỗ trợ</h2>
          <p class="mt-4 text-slate-300">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc cài đặt và tối ưu EA. 
            Gửi thông tin liên hệ hoặc câu hỏi của bạn bên dưới.
          </p>
          
          <div class="mt-8 space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Email</h3>
                <p class="text-slate-300">support@eacauvang.com</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Telegram</h3>
                <p class="text-slate-300">@EACauVangSupport</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Thời gian hỗ trợ</h3>
                <p class="text-slate-300">T2-T6: 9:00 - 18:00 (GMT+7)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
          <h3 class="text-2xl font-extrabold mb-6">Gửi yêu cầu hỗ trợ</h3>
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Tên của bạn</label>
              <input required type="text" placeholder="Nhập tên đầy đủ" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:outline-none focus:border-cyan-400 text-white" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input required type="email" placeholder="example@email.com" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:outline-none focus:border-cyan-400 text-white" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Chủ đề</label>
              <select class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:outline-none focus:border-cyan-400 text-white">
                <option>Hỗ trợ cài đặt EA</option>
                <option>Tối ưu cấu hình</option>
                <option>Báo lỗi</option>
                <option>Yêu cầu tính năng mới</option>
                <option>Nâng cấp Pro</option>
                <option>Khác</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Nội dung</label>
              <textarea required rows="5" placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn..." class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:outline-none focus:border-cyan-400 text-white resize-none"></textarea>
            </div>
            
            <button type="submit" class="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-95">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
      
      <div class="mt-16 rounded-2xl bg-slate-900/60 border border-white/10 p-8">
        <p class="text-xs text-slate-400 text-center">
          <strong>Cảnh báo rủi ro:</strong> Giao dịch ngoại hối/CFD có rủi ro cao. Vui lòng chỉ dùng vốn có thể chấp nhận rủi ro và thử nghiệm trên tài khoản demo trước khi sử dụng tài khoản thực.
        </p>
      </div>
    </section>`
};

// Load page content
function loadPage(page) {
    const content = pageContent[page];
    if (content) {
        document.getElementById('main-content').innerHTML = content;
        updateActiveNav(page);
    } else {
        document.getElementById('main-content').innerHTML = '<div class="text-center py-20"><h2 class="text-2xl text-red-400">Trang không tồn tại</h2></div>';
    }
}

function updateActiveNav(activePage) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('text-white', 'border-b-2', 'border-cyan-400');
        item.classList.add('text-slate-300');
    });
    
    // Add active class to current nav item
    const activeNav = document.querySelector(`[data-page="${activePage}"]`);
    if (activeNav) {
        activeNav.classList.remove('text-slate-300');
        activeNav.classList.add('text-white', 'border-b-2', 'border-cyan-400');
    }
}
