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
          subtitle="Chuyên ép biển số cao cấp – bền đẹp – bảo hành 24 tháng."
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
            sử dụng công nghệ ép máy thuỷ lực tiên tiến cùng vật liệu phản quang.
            Chúng tôi mang đến sản phẩm có độ bền cao, chống nước, chống oxy hoá
            và giữ màu sắc như mới theo thời gian.
          </p>

          {/* 🎥 Video giới thiệu từ YouTube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.25)] border border-yellow-500/20 max-w-4xl mx-auto aspect-video"
          >
            <iframe
               src="https://www.youtube.com/embed/wIL_VT3qBPE"
              title="Video giới thiệu Ép Biển Số Gia Bảo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>

            {/* Hiệu ứng nền ánh vàng */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
          </motion.div>

          {/* ✅ Danh sách ưu điểm */}
          <ul className="mt-10 grid gap-3 sm:gap-4 text-sm sm:text-base sm:grid-cols-2 text-left">
            <li className="text-yellow-300">
              Công nghệ ép thủy lực tiên tiến – bền màu, chống nước tuyệt đối.
            </li>
            <li className="text-gray-200">
              Chất liệu inox phản quang cao cấp – sáng bóng, kiếng chống va đập.
            </li>
            <li className="text-yellow-300">
              Phù hợp cho cả xe ô tô & xe máy – đa dạng kích thước, kiểu dáng tinh tế.
            </li>
            <li className="text-gray-200">
              Thiết kế sắc nét, từng chi tiết được gia công tỉ mỉ, đẳng cấp.
            </li>
            <li className="text-yellow-300">
              Phục hồi và làm mới biển số cũ – bền đẹp như mới chỉ sau 15 phút.
            </li>
            <li className="text-gray-200">
              Tư vấn tận tâm – dịch vụ chuyên nghiệp, uy tín hàng đầu tại Việt Nam.
            </li>
            <li className="text-yellow-300">
              Bảo hành 24 tháng – cam kết chất lượng và sự hài lòng tuyệt đối.
            </li>
            <li className="text-gray-200">
              Hơn 10.000 khách hàng tin tưởng – đánh giá 5★ trên toàn quốc.
            </li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
