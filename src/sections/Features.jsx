import { motion } from "framer-motion";
import { Wrench, Shield, Gem } from "lucide-react";

export default function Features() {
  const items = [
    {
      title: "Công nghệ ép nhiệt tiên tiến",
      desc: "Sử dụng máy ép hiện đại giúp biển số phẳng tuyệt đối, bền màu, không phồng rộp theo thời gian.",
      icon: <Wrench className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Vật liệu cao cấp chuẩn CE",
      desc: "Chất liệu phản quang đạt tiêu chuẩn châu Âu, chống trầy xước, chịu được nắng mưa khắc nghiệt.",
      icon: <Shield className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Gia công tỉ mỉ – Đẳng cấp khác biệt",
      desc: "Mỗi sản phẩm được hoàn thiện thủ công với độ chính xác cao, mang dấu ấn riêng của chủ xe.",
      icon: <Gem className="w-10 h-10 text-yellow-400" />,
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-center overflow-hidden"
    >
      {/* ✨ Hiệu ứng ánh sáng chạy */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Tiêu đề */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-14 tracking-wide drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
      >
        ƯU ĐIỂM NỔI BẬT
      </motion.h2>

      {/* Danh sách thẻ */}
      <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="group relative p-8 bg-neutral-900/70 border border-yellow-500/20 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.08)] hover:shadow-[0_0_35px_rgba(255,215,0,0.25)] hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-yellow-400/10 border border-yellow-400/40 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
            </div>

            {/* Tiêu đề */}
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all">
              {item.title}
            </h3>

            {/* Nội dung */}
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>

            {/* Hiệu ứng ánh sáng nhỏ */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Ánh sáng nền mờ */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl" />
    </section>
  );
}
