import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { MapPin, Phone, Clock } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import cuahang4 from "../../img/cuahang4.jpg";

export default function Location() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* 🏪 HERO - Biển số & ánh sáng */}
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden pt-[80px]">
        {/* Ảnh nền thật, mờ nhẹ để chữ nổi */}
        <img
          src={cuahang4}
          alt="Cửa hàng Ép Biển Số Gia Bảo"
          className="absolute inset-0 w-full h-full object-cover saturate-[1.1] contrast-[1.05] brightness-[0.75] blur-[1.5px]"
        />

        {/* Overlay gradient làm dịu nền */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-yellow-400/10 to-transparent blur-[50px]" />

        {/* Khung viền kim loại */}
        <div
          className="absolute top-[90px] bottom-[10px] left-[10px] right-[10px]
                     rounded-3xl border-[8px] border-neutral-300 
                     shadow-[0_0_50px_rgba(255,255,255,0.25),inset_0_0_25px_rgba(0,0,0,0.6)]"
          style={{
            boxShadow:
              "0 0 50px rgba(255,255,255,0.2), inset 0 0 25px rgba(0,0,0,0.6), 0 0 20px rgba(255,200,0,0.1)",
          }}
        />

        {/* Nội dung hero */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1
            className="text-5xl md:text-6xl font-extrabold uppercase mb-5 
                       bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 
                       text-transparent bg-clip-text drop-shadow-[0_3px_10px_rgba(255,215,0,0.4)]"
            style={{ WebkitTextStroke: "1px rgba(0,0,0,0.7)" }}
          >
            CỬA HÀNG GIA BẢO
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Nâng tầm không gian ép biển số Việt Nam — phản quang, viền inox sáng,
            công nghệ ép thủy lực hiện đại, mang đến sự bền bỉ và đẳng cấp khác biệt.
          </p>

          {/* Dải sáng phản chiếu */}
          <div className="mt-6 w-[220px] h-[3px] mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-[1px]" />
        </div>

        {/* Ánh sáng phản chiếu dưới sàn */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-yellow-400/10 to-transparent blur-[50px]" />
      </div>

      {/* 🧱 PHẦN DƯỚI */}
      <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black">
        <Container>
          <SectionHeader
            kicker="ĐỊA ĐIỂM CHÍNH THỨC"
            title="ÉP BIỂN SỐ GIA BẢO"
            subtitle="Trung tâm Phú Nhuận – chuyên ép biển số ô tô, xe máy phản quang, ép thủy lực, viền inox cao cấp."
          />

          {/* Giới thiệu */}
          <div className="mx-auto max-w-3xl text-center text-gray-300 mt-10 mb-20 leading-relaxed">
            <p className="text-xl mb-6">
              <span className="text-yellow-400 font-semibold">Gia Bảo</span> – nơi bạn có thể tận mắt
              thấy quy trình ép biển hiện đại nhất Việt Nam, ứng dụng công nghệ ép thủy lực tiên tiến
              và vật liệu phản quang cao cấp, đảm bảo độ bền, chống nước và sáng bóng vượt thời gian.
            </p>
          </div>

          {/* ⚙️ QUY TRÌNH ÉP BIỂN SỐ */}
          <div className="max-w-5xl mx-auto mb-24">
            <h3 className="text-center text-3xl font-bold text-yellow-400 mb-10">
              Quy trình ép biển số (6 bước)
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  num: 1,
                  title: "Tiếp nhận & tư vấn",
                  desc: "Trao đổi nhu cầu, chọn kiểu hoàn thiện phù hợp xe và ngân sách.",
                  img: cuahang4,
                },
                {
                  num: 2,
                  title: "Vệ sinh & kiểm tra",
                  desc: "Làm sạch, kiểm tra bề mặt – đảm bảo độ bám tốt và an toàn.",
                  img: cuahang4,
                },
                {
                  num: 3,
                  title: "Cắt – canh form",
                  desc: "Cắt khuôn chuẩn, canh lề đúng chuẩn kích thước Việt Nam.",
                  img: cuahang4,
                },
                {
                  num: 4,
                  title: "Ép thủy lực/ép nhiệt",
                  desc: "Ép với mica phản quang, áp lực – nhiệt độ tối ưu, chống bọt.",
                  img: cuahang4,
                },
                {
                  num: 5,
                  title: "Hoàn thiện & chống nước",
                  desc: "Ép viền inox, kiểm tra độ kín, chống nước – chống tia UV.",
                  img: cuahang4,
                },
                {
                  num: 6,
                  title: "Bàn giao & bảo hành",
                  desc: "Vệ sinh cuối, hướng dẫn bảo quản, kích hoạt BH 24 tháng.",
                  img: cuahang4,
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900/70 border border-yellow-400/20
                             shadow-[0_0_18px_rgba(255,215,0,0.08)] hover:shadow-[0_0_28px_rgba(255,215,0,0.2)]
                             hover:border-yellow-400/50 transition-all duration-500"
                >
                  {/* Ảnh bước */}
                  <div className="relative h-44">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Huy hiệu số bước */}
                    <div
                      className="absolute top-3 left-3 w-10 h-10 rounded-full
                                 bg-gradient-to-br from-yellow-400 to-yellow-500
                                 text-black font-extrabold flex items-center justify-center
                                 shadow-[0_0_14px_rgba(255,215,0,0.5)]"
                    >
                      {step.num}
                    </div>
                    {/* lớp mờ ảnh nhẹ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>

                  {/* Nội dung bước */}
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-1">{step.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📍 LIÊN HỆ */}
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              Liên hệ & Địa chỉ cửa hàng
            </h3>

            <div className="space-y-3 text-lg text-gray-300 mb-10">
              <p>
                📍 <strong>121 Trần Huy Liệu</strong>, Phường 11, Phú Nhuận, TP.HCM
              </p>
              <p>
                <Clock className="inline-block w-5 h-5 text-yellow-400 mr-1" />
                Giờ làm việc: <strong>8h00 - 19h00 (Thứ 2 - CN)</strong>
              </p>
              <p>
                <Phone className="inline-block w-5 h-5 text-yellow-400 mr-1" />
                Hotline:{" "}
                <a
                  href="tel:0972555038"
                  className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
                >
                  0972 555 038
                </a>
              </p>
            </div>

            {/* Nút bản đồ */}
            <a
              href="https://maps.app.goo.gl/HmmvBzhv1wqKaJtBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 
                         text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 
                         transition-transform shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            >
              <MapPin className="w-6 h-6" />
              Xem bản đồ chỉ đường
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
