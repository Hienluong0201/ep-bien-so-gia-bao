import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main className="px-6 md:px-10 py-24 bg-black/95 min-h-screen text-center text-gray-100">
      {/* Tiêu đề trang */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-14 drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
        Tin tức & Mẹo bảo vệ biển số
      </h1>

      {/* Danh sách bài viết */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Bài viết 1 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-all duration-500">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
            alt="Ép biển số mica"
            className="w-full h-64 object-cover"
          />
          <div className="p-8 text-left">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              5 lợi ích khi ép biển số mica chính hãng
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mica chính hãng giúp bảo vệ biển số khỏi trầy xước, phai màu và
              tăng độ sang trọng cho xe. Hãy chọn loại đạt chuẩn quốc tế CE để
              đảm bảo độ bền và thẩm mỹ...
            </p>
            <Link
                to="/tin-tuc/ep-bien-so-mica"
                className="inline-block text-yellow-400 font-semibold hover:underline hover:text-yellow-300 transition"
                >
                Đọc thêm →
                </Link>

          </div>
        </article>

        {/* Bài viết 2 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] transition-all duration-500">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
            alt="Biển số ô tô đẹp"
            className="w-full h-64 object-cover"
          />
          <div className="p-8 text-left">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Cách nhận biết mica ép biển số kém chất lượng
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mica rẻ tiền dễ nứt, bong mép, ố vàng sau vài tháng. Khi ép biển
              số, hãy chọn cơ sở uy tín để tránh hư hại và mất thẩm mỹ...
            </p>
         <Link
            to="/tin-tuc/mica-kem-chat-luong"
            className="inline-block text-yellow-400 font-semibold hover:underline hover:text-yellow-300 transition"
            >
            Đọc thêm →
        </Link>

          </div>
        </article>
      </div>

      {/* Gợi ý thêm */}
      <p className="text-gray-400 mt-16 text-sm">
        Cập nhật tin tức mới mỗi tuần — theo dõi fanpage{" "}
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-yellow-400 hover:underline"
        >
          Ép Biển Số Gia Bảo
        </a>
        .
      </p>
    </main>
  );
}
