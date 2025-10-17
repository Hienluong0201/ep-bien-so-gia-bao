import React from "react";
import { Shield, Star, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="bg-black/95 min-h-screen text-gray-100 px-6 md:px-12 py-24">
      {/* 🔥 Banner đầu trang */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
          Dịch Vụ Ép Biển Số Cao Cấp
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Chúng tôi chuyên ép biển số ô tô & xe máy bằng công nghệ ép chân không
          tiêu chuẩn châu Âu – bền đẹp, chống phồng rộp và đạt chuẩn quốc tế CE.
        </p>
      </section>

      {/* ⚙️ Danh sách dịch vụ */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Gói 1 */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Wrench className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            Ép Biển Số Xe Máy
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Mica cao cấp chống trầy, viền nhôm ép chân không, bo góc thẩm mỹ,
            bảo hành 12 tháng. Đảm bảo khít – không phồng mép.
          </p>
          <p className="text-yellow-300 font-bold text-xl mb-6">Từ 150.000đ</p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Liên hệ Zalo
          </a>
        </div>

        {/* Gói 2 */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Shield className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            Ép Biển Số Ô Tô
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Sử dụng kính cường lực Mica siêu trong, chống tia UV, ép kín hoàn
            toàn bằng máy chuyên dụng nhập khẩu Đức.
          </p>
          <p className="text-yellow-300 font-bold text-xl mb-6">Từ 350.000đ</p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Đặt lịch ngay
          </a>
        </div>

        {/* Gói 3 */}
        <div className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-all duration-500">
          <Star className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            Gói VIP Cao Cấp
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Ép biển số tráng gương, viền titan, chống nước tuyệt đối. Dành cho
            khách hàng yêu thích sự khác biệt và độ bền tối đa.
          </p>
          <p className="text-yellow-300 font-bold text-xl mb-6">Từ 500.000đ</p>
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Nhận báo giá
          </a>
        </div>
      </section>

      {/* 🌟 Ưu điểm */}
      <section className="text-center mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Vì sao chọn Ép Biển Số Gia Bảo?
        </h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>✅ Công nghệ ép chân không tiêu chuẩn Đức</li>
          <li>✅ Chất liệu mica & viền nhôm cao cấp – bền đẹp 5+ năm</li>
          <li>✅ Bảo hành 12 tháng – lỗi 1 đổi 1</li>
          <li>✅ Đội ngũ kỹ thuật tay nghề cao – phục vụ tận tâm</li>
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
