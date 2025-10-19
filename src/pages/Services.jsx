import React from "react";
import { Shield, Star, Wrench, RefreshCcw, Sparkles, Paintbrush, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="bg-black/95 min-h-screen text-gray-100 px-6 md:px-12 py-24">
      {/* 🔥 Banner đầu trang */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] uppercase">
          DỊCH VỤ ÉP BIỂN SỐ GIA BẢO
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Ép Biển Số Gia Bảo – chuyên ép biển số ô tô, xe máy, phục hồi biển cũ, dán tem cờ - logo & ép viền inox cao cấp.
          Công nghệ ép thủy lực chuẩn Đức – sáng bóng, bền đẹp, chống nước tuyệt đối.
        </p>
      </section>

      {/* ⚙️ Danh sách dịch vụ */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Ép biển xe máy */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Wrench className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Ép Biển Số Xe Máy</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Sử dụng mica phản quang Nhật, ép viền kín khít bằng máy thủy lực – không đọng nước, không phồng mép. 
            Đảm bảo bền đẹp 5+ năm, bảo hành 24 tháng.
          </p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Liên hệ Zalo
          </a>
        </div>

        {/* Ép biển ô tô */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Shield className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Ép Biển Số Ô Tô</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Mica chống tia UV, viền inox sáng gương, ép thủy lực nhập khẩu Đức. 
            Giúp biển số bền màu, sang trọng và chống nước tuyệt đối.
          </p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Đặt lịch ngay
          </a>
        </div>

        {/* Phục hồi biển cũ */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
          <RefreshCcw className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Phục Hồi Biển Số Cũ</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Làm sạch – tẩy gỉ – ép lại phản quang và phủ lớp chống tia UV. 
            Biển cũ trở lại sáng bóng như mới, giữ nguyên số khung, số máy.
          </p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Gửi ảnh biển cần phục hồi
          </a>
        </div>

        {/* Dán tem phản quang */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Paintbrush className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Dán Tem cờ - tem logo & Trang Trí</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dán tem logo - tem cờ (theo yêu cầu), thẩm mỹ và sang trọng.
            Tăng độ phản sáng, an toàn khi di chuyển ban đêm.
          </p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Xem mẫu tem
          </a>
        </div>

        {/* Ép viền inox */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Sparkles className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Ép Viền Inox Cao Cấp</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Viền inox nguyên khối cao cấp , ép thủy lực công xuất cao bo khít – chống rỉ sét, 
            bảo vệ biển khỏi va đập, tăng độ sang trọng cho xe.
          </p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Nhận báo giá
          </a>
        </div>

        {/* Gói VIP */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500">
  <Star className="w-12 h-12 text-yellow-400 mb-4" />
  <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
    Gói Chuẩn Meka 3 Ly – Chuẩn ISO
  </h2>
  <p className="text-gray-300 mb-4 leading-relaxed">
    Sử dụng <strong>mica 3 ly cao cấp đạt chuẩn ISO</strong>, ép thủy lực kín mép – 
    chống nước tuyệt đối. Đảm bảo độ bền, sáng bóng và thẩm mỹ vượt trội cho cả xe máy và ô tô.
  </p>
  <a
    href="https://zalo.me/0972555038"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
  >
    Đặt Gói Chuẩn
  </a>
</div>

      </section>

      {/* 🌟 Ưu điểm */}
      <section className="text-center mt-28 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Vì sao khách hàng chọn Ép Biển Số Gia Bảo?
        </h2>
        <ul className="text-gray-300 space-y-3 text-lg leading-relaxed">
          <li>Công nghệ ép thủy lực & chân không chuẩn Đức – bền 5–10 năm</li>
          <li>Chất liệu mica, inox, titan cao cấp – sáng bóng & sang trọng</li>
          <li>Bảo hành 12–24 tháng – lỗi 1 đổi 1 ngay tại cửa hàng</li>
          <li>Nhận làm theo yêu cầu: kích thước, viền, tem, logo cá nhân</li>
          <li>Giao hàng toàn quốc – hỗ trợ online qua Zalo 24/7</li>
        </ul>
        <div className="mt-10">
          <Link
            to="/location"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            <Phone className="w-5 h-5" />
            <span>Xem địa chỉ cửa hàng</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
