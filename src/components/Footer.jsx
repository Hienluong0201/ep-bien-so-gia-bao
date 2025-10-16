import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-10 text-center">
      <Container>
        {/* Dòng bản quyền */}
        <p className="text-sm text-neutral-300">
          © {new Date().getFullYear()} • <span className="text-yellow-400 font-semibold">Ép Biển Số Gia Bảo</span> – Bền đẹp & Chuẩn quốc tế CE.
        </p>

        {/* Dòng liên hệ */}
        <p className="mt-2 text-sm text-neutral-400">
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
    </footer>
  )
}
