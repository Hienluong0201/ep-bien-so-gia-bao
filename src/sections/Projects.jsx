import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";


const bo1 = "https://i.postimg.cc/j2g5QjdZ/anh14.jpg";
const bo2 = "https://i.postimg.cc/QCxCT7sk/anh8.jpg";
const bo3 = "https://i.postimg.cc/HnsnyMHJ/anh4.jpg";
const bo4 = "https://i.postimg.cc/x8T8zmYX/anh5.jpg";
const bo5 = "https://i.postimg.cc/MHKHQBxR/anh6.jpg";
const bo6 = "https://i.postimg.cc/BbQbKFsC/anh9.jpg";
const bo7 = "https://i.postimg.cc/vTqBLmHV/anh10.jpg";
const bo8 = "https://i.postimg.cc/Zn7RFqKp/anh11.jpg";
const bo9 = "https://i.postimg.cc/2yc6F584/anh12.jpg";

export default function Projects() {
  const plates = [
  {
    title: "Mẫu Ép Biển Số Ô Tô Cao Cấp",
    image: bo1,
    description:
      "Biển số nền trắng cho xe cao cấp - gắm Cờ – ép thủy lực phản quang, sắc nét, bền màu và chống nước tuyệt đối.",
  },
  {
  title: "Ép Biển Số Xe Máy Cao Cấp",
  image: bo2,
  description:
    "Biển số xe máy phản quang – ép thủy lực chuẩn form, chống nước tuyệt đối, sáng bóng và bền màu theo thời gian.",
},

  {
    title: "Phiên Bản Biển Số Phản Quang Cao Cấp",
    image: bo3,
    description:
      "Phản quang sáng rõ, nhìn nổi bật cả ngày lẫn đêm – ép chuẩn, không phồng rộp, chống trầy xước.",
  },
  {
    title: "Ép Biển Số Ô Tô 4 Chỗ Sang Trọng",
    image: bo4,
    description:
      "Ép chuẩn thủy lực, bền màu, giữ nguyên độ phản quang và viền sắc nét – đậm chất cao cấp.",
  },
  {
    title: "Ép Biển Số Xe Tải & Xe Khách",
    image: bo5,
    description:
      "Ép chắc chắn, bề mặt sáng bóng – chống rỉ sét, bong tróc và chịu thời tiết khắc nghiệt.",
  },
  {
    title: "Biển Số Màu",
    image: bo6,
    description:
      "Màu tươi đặc trưng, ép thủy lực bền bỉ – không bong, không phai, phù hợp với các loại xe.",
  },
  {
    title: "Biển Số Inox Phản Quang Siêu Bền",
    image: bo7,
    description:
      "Chất liệu inox sáng bóng – bền vượt thời gian, phản quang cực mạnh, tạo điểm nhấn đẳng cấp.",
  },
  {
    title: "Ép Biển Số Theo Yêu Cầu Riêng",
    image: bo8,
    description:
      "Nhận thiết kế tùy chọn: viền, màu, quốc kỳ... phù hợp phong cách và cá tính từng dòng xe.",
  },
  {
    title: "Bộ Sưu Tập Biển Số Ô Tô Sang Trọng",
    image: bo9,
    description:
      "Kết hợp công nghệ ép thủy lực và phản quang – tạo độ sáng hoàn hảo, sang trọng và nổi bật.",
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
