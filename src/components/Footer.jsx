import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-center text-neutral-300">
      {/* 🔻 Nội dung Footer */}
      <div className="py-10">
        <Container>
          {/* Dòng bản quyền */}
          <p className="text-sm">
            © {new Date().getFullYear()} •{' '}
            <span className="text-yellow-400 font-semibold">
              Ép Biển Số Gia Bảo
            </span>{' '}
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

          {/* Mô tả ngắn */}
          <p className="mt-4 text-xs text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Ép Biển Số Gia Bảo – Dịch vụ ép biển số ô tô & xe máy cao cấp,  
            sử dụng công nghệ ép thủy lực và mica phản quang bền đẹp theo thời gian.  
            Giao hàng toàn quốc • Chất lượng – Uy tín – Đẳng cấp.
          </p>

          {/* 👁 Bộ đếm lượt truy cập */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-yellow-400 text-sm font-medium">
              👁 Tổng lượt truy cập
            </span>
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=21449238&style=0027&nbdigits=5&type=page&initCount=1000"
              alt="Visitor Counter"
              className="rounded-md shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            />
            <p className="text-xs text-neutral-500 mt-2">
              Cảm ơn hơn <span className="text-yellow-400 font-semibold">10.000+</span> khách hàng đã tin tưởng dịch vụ Gia Bảo.
            </p>
          </div>
        </Container>
      </div>

      {/* 🗺️ Google Maps hiển thị trực tiếp */}
      <div className="relative w-full h-[350px] md:h-[420px] overflow-hidden border-t border-yellow-500/20 shadow-[0_-4px_30px_rgba(255,215,0,0.1)]">
        <iframe
          title="Bản đồ cửa hàng Ép Biển Số Gia Bảo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.614027748759!2d106.67621!3d10.7938376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529005541bb95%3A0xa0a971c48fa7ea65!2zw4lwIGJp4buDbiBz4buRIEdpYSBC4bqjbw!5e0!3m2!1svi!2s!4v1760779485213!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlay hiệu ứng ánh sáng nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 backdrop-blur-[1px]" />

        {/* Viền ánh vàng sang trọng */}
        <div className="absolute inset-0 border-t border-yellow-400/30 pointer-events-none" />
      </div>
    </footer>
  )
}
