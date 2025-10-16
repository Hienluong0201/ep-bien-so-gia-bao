import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center text-gray-200"
    >
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
          className="mx-auto max-w-3xl"
        >
          <p className="leading-relaxed text-lg mb-10 text-gray-300">
            “Ép Biển Số Gia Bảo” là đơn vị chuyên ép biển số xe ô tô và xe máy cao cấp,
            sử dụng công nghệ ép nhiệt tiên tiến cùng vật liệu phản quang đạt chuẩn CE.
            Chúng tôi mang đến sản phẩm có độ bền cao, chống phồng rộp, chống oxy hoá
            và giữ màu sắc như mới theo thời gian.
          </p>

          {/* 🎥 Video giới thiệu từ Google Drive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.25)] border border-yellow-500/20 max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.25)] border border-yellow-500/20 max-w-4xl mx-auto aspect-video">
  <iframe
    src="https://drive.google.com/file/d/1O8gZtih7VBNBmxt9QukywJYaTDpCkFki/preview"
    allow="autoplay; fullscreen"
    className="w-full h-full rounded-2xl"
  ></iframe>
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
</div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
          </motion.div>

          <ul className="mt-10 grid gap-4 text-sm sm:grid-cols-2 text-left text-gray-300">
            <li>💎 Công nghệ ép nhiệt tiên tiến – bền màu, không bong tróc.</li>
            <li>🛠️ Chất liệu phản quang cao cấp – đạt chuẩn châu Âu CE.</li>
            <li>🚗 Phù hợp cho cả xe ô tô & xe máy, đa dạng kiểu dáng.</li>
            <li>⚡ Giao hàng nhanh – tư vấn thiết kế tận tâm, uy tín hàng đầu.</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
