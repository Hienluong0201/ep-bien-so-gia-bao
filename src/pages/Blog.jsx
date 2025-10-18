import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main className="px-6 md:px-10 py-24 bg-black/95 min-h-screen text-center text-gray-100">
      {/* 📰 Tiêu đề trang */}
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-14 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] uppercase">
        Tin Tức & Kinh Nghiệm Ép Biển Số Xe
      </h1>

      {/* 💡 Giới thiệu ngắn */}
      <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-16 leading-relaxed">
        Cập nhật những mẹo bảo dưỡng, phục hồi và ép biển số ô tô – xe máy mới nhất.
        Gia Bảo luôn mang đến các giải pháp{" "}
        <span className="text-yellow-400 font-semibold">
          ép biển chuẩn, bền đẹp, sang trọng
        </span>{" "}
        giúp bảo vệ biển số và tăng tính thẩm mỹ cho xe.
      </p>

      {/* Danh sách bài viết */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Bài viết 1 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <Link to="/tin-tuc/ep-bien-xe-may-mica" className="block h-full">
            <img
              src="https://i.postimg.cc/PJ3xzqr1/anh2.png"
              alt="Ép biển số xe máy cao cấp"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 text-left">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Vì sao nên ép biển số xe máy bằng mica phản quang?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ép biển mica phản quang giúp chống nước, không phai màu, giữ nguyên form chuẩn quy định.
                Ngoài ra còn giúp biển sáng rõ khi đi đêm – an toàn & sang trọng hơn...
              </p>
              <span className="inline-block text-yellow-400 font-semibold hover:underline">
                Đọc thêm →
              </span>
            </div>
          </Link>
        </article>

        {/* Bài viết 2 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <Link to="/tin-tuc/ep-bien-oto" className="block h-full">
            <img
              src="https://i.postimg.cc/QdFnffh8/anhbv1.jpg"
              alt="Ép biển ô tô cao cấp"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 text-left">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Ép biển số ô tô – sang trọng, chống nước tuyệt đối
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Biển số ô tô được ép thủy lực bằng mica cao cấp và viền inox sáng bóng.
                Giúp chống trầy xước, không ố vàng, bền màu suốt 5–10 năm.
              </p>
              <span className="inline-block text-yellow-400 font-semibold hover:underline">
                Đọc thêm →
              </span>
            </div>
          </Link>
        </article>

        {/* Bài viết 3 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <Link to="/tin-tuc/phuc-hoi-bien-so-cu" className="block h-full">
            <img
              src="https://i.postimg.cc/g2xBggm6/anhbv2.jpg"
              alt="Phục hồi biển cũ xe máy ô tô"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 text-left">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Phục hồi biển số cũ – sáng bóng như mới
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Làm sạch, tẩy gỉ, phủ phản quang và ép lại viền inox giúp biển số cũ trở lại như mới.
                Giữ nguyên số khung & thông tin gốc của xe.
              </p>
              <span className="inline-block text-yellow-400 font-semibold hover:underline">
                Đọc thêm →
              </span>
            </div>
          </Link>
        </article>

        {/* Bài viết 4 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <Link to="/tin-tuc/dan-tem-phan-quang" className="block h-full">
            <img
              src="https://i.postimg.cc/qvNZ114h/anhbv4.jpg"
              alt="Dán tem phản quang biển số"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 text-left">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Dán tem phản quang – điểm nhấn sang trọng cho biển số
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dán tem phản quang, tem quốc kỳ hoặc logo cá nhân giúp biển số nổi bật hơn, 
                tăng an toàn khi di chuyển ban đêm.
              </p>
              <span className="inline-block text-yellow-400 font-semibold hover:underline">
                Đọc thêm →
              </span>
            </div>
          </Link>
        </article>

        {/* Bài viết 5 */}
        <article className="bg-gray-900/80 border border-yellow-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <Link to="/tin-tuc/bao-hanh-ep-bien" className="block h-full">
            <img
              src="https://i.postimg.cc/SxyX0HHR/cuahang4.jpg"
              alt="Bảo hành ép biển số"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 text-left">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                Bảo hành 24 tháng – ép biển số đẹp, bền và an toàn
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mọi khách hàng tại Gia Bảo đều được bảo hành lên đến 24 tháng – lỗi đổi mới 1:1.
                Cam kết chất lượng, uy tín hàng đầu tại TP.HCM.
              </p>
              <span className="inline-block text-yellow-400 font-semibold hover:underline">
                Đọc thêm →
              </span>
            </div>
          </Link>
        </article>
      </div>

      {/* CTA cuối trang */}
      <div className="mt-20">
        <p className="text-gray-300 text-lg mb-8">
          Đặt lịch ép biển ngay hôm nay – nhận ưu đãi giảm 10% cho khách hàng mới!
        </p>
        <a
          href="https://zalo.me/0972555038"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-10 py-4 rounded-full transition-transform hover:scale-105 shadow-[0_0_25px_rgba(255,215,0,0.5)]"
        >
          📞 Liên hệ Zalo: 0972 555 038
        </a>
      </div>

      <p className="text-gray-500 mt-10 text-sm">
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
