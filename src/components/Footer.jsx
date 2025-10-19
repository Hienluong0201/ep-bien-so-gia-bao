import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-center text-neutral-300">
      {/* 🔻 Nội dung chính */}
      <div className="py-10">
        <Container>
          {/* © Bản quyền */}
          <p className="text-sm">
            © {new Date().getFullYear()} •{" "}
            <span className="text-yellow-400 font-semibold">
              Ép Biển Số Gia Bảo
            </span>{" "}
            – Bền đẹp • Chống nước • Bảo hành 24 tháng.
          </p>

          {/* Liên hệ */}
          <p className="mt-2 text-sm">
            Liên hệ Zalo:&nbsp;
            <a
              href="https://zalo.me/0972555038"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              0972 555 038
            </a>
            &nbsp;• Hotline:&nbsp;
            <a
              href="tel:0972555038"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              0972 555 038
            </a>
          </p>

          {/* Mô tả */}
          <p className="mt-4 text-xs text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Ép Biển Số Gia Bảo – Dịch vụ ép biển số ô tô & xe máy cao cấp,
            sử dụng công nghệ ép thủy lực, mica phản quang chuẩn ISO, viền inox 304 chống nước tuyệt đối.
          </p>

          <p className="text-yellow-400 text-sm font-medium">
            Chất lượng – Uy tín – Đẳng cấp.
          </p>

          {/* Bộ đếm truy cập */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-yellow-400 text-sm font-medium">
              Tổng lượt truy cập
            </span>
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=21449238&style=0027&nbdigits=5&type=page&initCount=1000"
              alt="Visitor Counter"
              className="rounded-md shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            />
            <p className="text-xs text-neutral-500 mt-2">
              Cảm ơn hơn{" "}
              <span className="text-yellow-400 font-semibold">10.000+</span> khách hàng đã tin tưởng dịch vụ Gia Bảo.
            </p>
          </div>
        </Container>
      </div>

      {/* 🗺️ Google Maps */}
      <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden border-t-4 border-yellow-400 shadow-[0_-4px_30px_rgba(255,215,0,0.2)]">
        <iframe
          title="Bản đồ cửa hàng Ép Biển Số Gia Bảo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.197733788002!2d106.67621!3d10.7938376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529005541bb95%3A0xa0a971c48fa7ea65!2zw4lwIGJp4buDbiBz4buRIEdpYSBC4bqjbw!5e0!3m2!1svi!2s!4v1760779485213!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "brightness(1.08) contrast(1.15) saturate(1.2)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* ✨ Hiệu ứng sáng nhẹ phía dưới */}
        <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-yellow-400/10 to-transparent blur-[40px] pointer-events-none" />

        {/* 🟡 Viền sáng sang trọng */}
        <div className="absolute inset-0 border-t border-yellow-400/40 pointer-events-none" />

        {/* 📍 Nút xem bản đồ lớn hơn — nằm trên cùng góc phải */}
        <a
          href="https://maps.app.goo.gl/HmmvBzhv1wqKaJtBA"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-transform hover:scale-105"
        >
          📍 Xem bản đồ lớn hơn
        </a>
      </div>
    </footer>
  );
}
