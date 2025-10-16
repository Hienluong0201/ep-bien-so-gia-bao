import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-center text-gray-200 overflow-hidden"
    >
      {/* Ánh sáng nền mờ */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Hiệu ứng ánh sáng quét nhẹ */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <Container>
        <SectionHeader
          kicker="Liên hệ"
          title="ĐẶT ÉP BIỂN SỐ GIA BẢO NGAY HÔM NAY"
          subtitle="Tư vấn nhanh – Ép biển số bền đẹp – Giao hàng toàn quốc."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl mt-10 bg-neutral-900/60 border border-yellow-400/30 rounded-2xl p-10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,215,0,0.2)]"
        >
          {/* Nút Liên hệ */}
          <motion.a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <Phone className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Liên hệ qua Zalo</span>
          </motion.a>

          {/* Hotline */}
          <p className="mt-6 text-base text-yellow-300">
            Hoặc gọi trực tiếp hotline:&nbsp;
            <a
              href="tel:0972555038"
              className="underline text-yellow-400 hover:text-yellow-300 transition"
            >
              0972 555 038
            </a>
          </p>

          {/* Dòng mô tả nhỏ */}
          <p className="mt-6 text-sm text-gray-400">
            Ép Biển Số Gia Bảo – Dịch vụ ép biển số ô tô & xe máy cao cấp,  
            đạt chuẩn quốc tế CE, bền đẹp và sang trọng.
          </p>

          {/* Hiệu ứng biểu tượng ánh sáng */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex justify-center mt-8"
          >
            <Sparkles className="w-6 h-6 text-yellow-400 opacity-70" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
