import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// ✅ Import 10 ảnh khác nhau
import bo1 from "../../img/bo1.jpg";
import bo2 from "../../img/bo3.jpg";
import bo3 from "../../img/bo1.jpg";
import bo4 from "../../img/bo3.jpg";
import bo5 from "../../img/bo1.jpg";
import bo6 from "../../img/bo3.jpg";
import bo7 from "../../img/bo1.jpg";
import bo8 from "../../img/bo3.jpg";
import bo9 from "../../img/bo1.jpg";
import bo10 from "../../img/bo3.jpg";

export default function Projects() {
  const plates = [
    {
      title: "Mẫu Ép Biển Số Ô Tô Cao Cấp",
      image: bo1,
      description:
        "Công nghệ ép nhiệt tiên tiến – phẳng tuyệt đối, bền màu, sang trọng và tinh tế.",
    },
    {
      title: "Ép Biển Số Xe Máy Gia Bảo",
      image: bo2,
      description:
        "Thiết kế chuẩn form, ép khít, bảo vệ biển số xe khỏi va đập và thời tiết.",
    },
    {
      title: "Phiên Bản Phản Quang Chuẩn CE",
      image: bo3,
      description:
        "Phản quang sáng rõ, đạt tiêu chuẩn châu Âu CE – nổi bật cả ngày lẫn đêm.",
    },
    {
      title: "Ép Biển Số Ô Tô 4 Chỗ",
      image: bo4,
      description:
        "Ép chuẩn, bền màu, giữ nguyên độ phản quang và thẩm mỹ cao cấp.",
    },
    {
      title: "Ép Biển Số Xe Tải & Xe Khách",
      image: bo5,
      description:
        "Phù hợp kích thước lớn, bề mặt sáng bóng, chống rỉ sét và phồng rộp.",
    },
    {
      title: "Ép Biển Số Màu Vàng Xe Kinh Doanh",
      image: bo6,
      description:
        "Công nghệ ép hiện đại – giữ màu vàng tươi, không bong tróc theo thời gian.",
    },
    {
      title: "Biển Số Inox Phản Quang Cao Cấp",
      image: bo7,
      description:
        "Chất liệu inox sáng bóng – bền vượt thời gian, phản quang cực mạnh.",
    },
    {
      title: "Ép Biển Số Theo Yêu Cầu",
      image: bo8,
      description:
        "Nhận thiết kế theo mẫu riêng, phù hợp phong cách từng dòng xe.",
    },
    {
      title: "Biển Số Ô Tô Sang Trọng",
      image: bo9,
      description:
        "Kết hợp công nghệ ép thủy lực và phản quang – sang trọng, đẳng cấp.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-gray-100 overflow-hidden"
    >
      {/* Ánh sáng nền */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl" />

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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/70 border border-yellow-400/20 shadow-[0_0_25px_rgba(255,215,0,0.08)] hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all duration-500"
            >
              {/* Ảnh sản phẩm */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Nội dung */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Tư vấn ngay</span>
                </motion.a>
              </div>

              {/* Viền sáng */}
              <div className="absolute inset-0 border border-yellow-400/10 rounded-2xl group-hover:border-yellow-400/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
