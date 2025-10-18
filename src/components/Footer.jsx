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
            – Bền đẹp & Chuẩn quốc tế CE.
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
          <p className="mt-4 text-xs text-neutral-500 max-w-2xl mx-auto">
            Ép Biển Số Gia Bảo – Dịch vụ ép biển số ô tô & xe máy cao cấp, sử dụng công nghệ ép nhiệt chuẩn CE Châu Âu.  
            Giao hàng toàn quốc • Chất lượng – Uy tín – Đẳng cấp.
          </p>
        </Container>
      </div>
       {/* 🗺️ Google Maps hiển thị trực tiếp */}
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden border-b border-neutral-700">
        <iframe
          title="Bản đồ cửa hàng Ép Biển Số Gia Bảo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2012039377165!2d106.67602167480343!3d10.795659989345708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d3b7dfae07%3A0x8b6b9a5b34e144d2!2zMTIxIMSQLiBUcuG6p24gSHV5IExp4buHdSwgUGjDuiBOaHXhuqVuLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697026664778!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlay hiệu ứng nhẹ để đọc dễ hơn */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      </div>
    </footer>
  )
}
