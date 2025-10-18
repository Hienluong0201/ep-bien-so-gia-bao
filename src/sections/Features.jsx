import {
  Wrench,
  Shield,
  Gem,
  Star,
  Settings,
  Truck,
  CheckCircle,
  Award,
  Zap,
  Users,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      title: "Công nghệ ép nhiệt tiên tiến",
      desc: "Ép phẳng tuyệt đối, không phồng rộp – độ bền vượt trội theo thời gian.",
      icon: <Wrench className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Vật liệu inox cao cấp",
      desc: "Phản quang cao cấp, chống trầy xước, chịu được nắng mưa khắc nghiệt.",
      icon: <Shield className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Thiết kế sang trọng",
      desc: "Tinh xảo đến từng chi tiết – tôn lên đẳng cấp và phong cách của chủ xe.",
      icon: <Gem className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Bảo hành 24 tháng",
      desc: "Cam kết chất lượng – bảo vệ quyền lợi khách hàng tuyệt đối.",
      icon: <CheckCircle className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Phục hồi biển số cũ",
      desc: "Làm mới nhanh chóng, sáng bóng, giữ nguyên độ phản quang như mới.",
      icon: <Settings className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Tư vấn tận tâm",
      desc: "Đội ngũ chuyên nghiệp hỗ trợ chọn kiểu dáng phù hợp phong cách xe.",
      icon: <Users className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Gia công chính xác cao",
      desc: "Công nghệ CNC tiên tiến – chuẩn từng milimet, sắc nét vượt trội.",
      icon: <Truck className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Phù hợp mọi dòng xe",
      desc: "Tùy chỉnh linh hoạt – từ xe máy, ô tô, đến xe sang trọng.",
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Đạt tiêu chuẩn kiểm định",
      desc: "Được chứng nhận an toàn & chất lượng cao trên toàn quốc.",
      icon: <Award className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Khách hàng đánh giá 5★",
      desc: "Hơn 10.000 khách hàng tin tưởng và quay lại sử dụng dịch vụ.",
      icon: <Star className="w-10 h-10 text-yellow-400" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-neutral-900 to-black text-center overflow-hidden">
      {/* Tiêu đề */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-12 tracking-wide drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
        ƯU ĐIỂM NỔI BẬT
      </h2>

      {/* Dải chạy ngang */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-6">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] sm:min-w-[360px] bg-neutral-900/70 border border-yellow-500/30 rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(255,215,0,0.08)] hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-yellow-400/10 border border-yellow-400/40">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed break-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          width: 200%;
          animation: marquee 45s linear infinite;
        }

        /* Cho phép text xuống dòng thay vì kéo dài ra */
        p {
          white-space: normal !important;
        }
      `}</style>
    </section>
  );
}
