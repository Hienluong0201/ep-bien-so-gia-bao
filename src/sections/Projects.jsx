import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Projects() {
  const plates = [
    {
      title: "Ép Biển Số Ô Tô Cao Cấp",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      description:
        "Sử dụng công nghệ ép nhiệt hiện đại – bề mặt phẳng tuyệt đối, phản quang sắc nét, chống phồng rộp.",
    },
    {
      title: "Ép Biển Số Xe Máy Gia Bảo",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
      description:
        "Thiết kế gọn gàng, ép chuẩn form, đảm bảo độ bền màu – bảo vệ biển số bền đẹp theo năm tháng.",
    },
    {
      title: "Phiên Bản Phản Quang Chuẩn CE",
      image:
        "https://images.unsplash.com/photo-1517949908112-22a08a29a448?auto=format&fit=crop&w=1200&q=80",
      description:
        "Chất liệu phản quang đạt tiêu chuẩn châu Âu CE – nổi bật cả ngày lẫn đêm, khẳng định đẳng cấp chủ xe.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-gray-100 overflow-hidden"
    >
      {/* Ánh sáng nền */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Hiệu ứng ánh sáng quét */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      /> */}

      <Container>
        <SectionHeader
          kicker="Bộ sưu tập"
          title="SẢN PHẨM ÉP BIỂN SỐ GIA BẢO"
          subtitle="Tinh tế – Bền đẹp – Chuẩn quốc tế CE"
        />

        {/* Lưới ảnh sản phẩm */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {plates.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/70 border border-yellow-400/20 shadow-[0_0_25px_rgba(255,215,0,0.08)] hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-500"
            >
              {/* Ảnh sản phẩm */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Lớp ánh sáng chạy ngang ảnh */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Nội dung */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Nút tư vấn */}
               <motion.a
  href="https://zalo.me/0972555038"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    animate={{ x: ["-100%", "100%"] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
  />
  <MessageCircle className="w-5 h-5 relative z-10" />
  <span className="relative z-10">Tư vấn ngay</span>
</motion.a>

              </div>

              {/* Hiệu ứng viền sáng */}
              <div className="absolute inset-0 border border-yellow-400/10 rounded-2xl group-hover:border-yellow-400/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
