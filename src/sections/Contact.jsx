import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionHeader
          kicker="Liên hệ"
          title="Đặt ép biển số Gia Bảo ngay hôm nay"
          subtitle="Tư vấn nhanh – Ép biển số bền đẹp – Giao hàng toàn quốc."
        />

        <div className="mx-auto max-w-xl text-center">
          <Button
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
          >
            <Phone className="h-4 w-4 mr-2" /> Liên hệ qua Zalo
          </Button>

          <p className="mt-3 text-sm text-neutral-700">
            Hoặc gọi trực tiếp hotline:&nbsp;
            <a
              href="tel:0972555038"
              className="underline text-blue-600 hover:text-blue-500"
            >
              0972 555 038
            </a>
          </p>

          <p className="mt-6 text-xs text-neutral-500">
            Ép Biển Số Gia Bảo – Dịch vụ ép biển số ô tô & xe máy cao cấp, chuẩn quốc tế CE.
          </p>
        </div>
      </Container>
    </section>
  )
}
