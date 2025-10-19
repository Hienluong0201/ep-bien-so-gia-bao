import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Store, Newspaper, MessageCircle, Image } from "lucide-react";
import { Link } from "react-router-dom";
const img1 = "https://i.postimg.cc/sgVBFbbX/backgout1.jpg";
const img2 = "https://i.postimg.cc/PJ3xzqr1/anh2.png";
const img3 = "https://i.postimg.cc/SxyX0HHR/cuahang4.jpg";
const images = [img1, img2, img3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      {/* Background slider */}
      <div className="absolute inset-0 w-full h-full flex">
        <motion.div
          className="flex w-full h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Nội dung Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl w-[90%] p-8 sm:p-10 rounded-3xl bg-black/60 backdrop-blur-xl border border-yellow-400/30 shadow-[0_0_35px_rgba(255,215,0,0.35)]"
      >
        {/* Tiêu đề */} 
        <h1 className="text-3xl sm:text-3xl font-extrabold text-yellow-400 mb-5 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] tracking-wide">
          ÉP BIỂN SỐ GIA BẢO 
        </h1>

        {/* Mô tả */}
      <p className="text-gray-200 text-base sm:text-lg mb-6 leading-relaxed text-center">
        <span className="block">Dịch vụ ép biển số ô tô & xe máy cao cấp.</span>
        <span className="block">Phục hồi biển số cũ đẹp như mới.</span>
        <span className="block">chống nước tuyệt đối – sáng bóng bền màu.</span>
        <span className="block">Áp dụng công nghệ máy ép thủy lực hiện đại.</span>
        <span className="block">Bảo hành 24 tháng – đẹp như mới.</span>
        <span className="block mt-3 font-semibold text-yellow-400">
          Bảo vệ biển số – khẳng định phong cách và đẳng cấp.
        </span>
      </p>



        {/* 🎯 4 Nút – chia 2 hàng */}
        <div className="grid grid-cols-2 gap-4 justify-center">
          {/* Zalo */}
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Zalo</span>
          </a>

          {/* Bộ mẫu */}
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-xl transition-transform hover:scale-105"
          >
            <Image className="w-5 h-5" />
            <span>Bộ mẫu</span>
          </a>

          {/* Cửa hàng */}
          <Link
            to="/location"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            <Store className="w-5 h-5" />
            <span>Cửa hàng</span>
          </Link>

          {/* Tin tức */}
          <Link
            to="/tin-tuc"
            className="flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            <Newspaper className="w-5 h-5" />
            <span>Tin tức</span>
          </Link>
        </div>
      </motion.div>

      {/* Dấu chấm chuyển slide */}
      <div className="absolute bottom-6 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === index ? "bg-yellow-400 scale-125" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
