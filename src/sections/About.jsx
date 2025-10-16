import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeader
          kicker="Giới thiệu"
          title="Về Ép Biển Số Gia Bảo"
          subtitle="Chuyên ép biển số cao cấp – bền đẹp – chuẩn quốc tế CE."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-neutral-700 dark:text-neutral-300 text-center"
        >
          <p className="leading-relaxed text-lg text-gray-300">
            “Ép Biển Số Gia Bảo” là đơn vị chuyên ép biển số xe ô tô và xe máy cao cấp,
            sử dụng công nghệ ép nhiệt tiên tiến cùng vật liệu phản quang đạt chuẩn CE.
            Chúng tôi mang đến sản phẩm có độ bền cao, chống phồng rộp, chống oxy hoá
            và giữ màu sắc như mới theo thời gian.
          </p>

          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2 text-left">
            <li className="card">💎 Công nghệ ép nhiệt tiên tiến – bền màu, không bong tróc.</li>
            <li className="card">🛠️ Chất liệu phản quang cao cấp – đạt chuẩn châu Âu CE.</li>
            <li className="card">🚗 Phù hợp cho cả xe ô tô & xe máy, đa dạng kiểu dáng.</li>
            <li className="card">⚡ Giao hàng nhanh – tư vấn thiết kế tận tâm, uy tín hàng đầu.</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
