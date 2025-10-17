import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Star, Award, Store } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../img/backgrout.jpg";
import img2 from "../../img/backgrout.jpg";
import img3 from "../../img/backgrout.jpg";

const images = [img1, img2, img3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Tự động chạy slide mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      {/* Slider background */}
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
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hiệu ứng ánh sáng quét */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nội dung hero */}
      <div className="relative z-10 bg-black/60 p-10 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(255,215,0,0.25)] max-w-xl border border-yellow-500/20">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
          ÉP BIỂN SỐ GIA BẢO
        </h1>
        <p className="text-gray-200 mb-8 leading-relaxed text-lg">
          Dịch vụ ép biển số cao cấp – bền đẹp – chống phồng rộp – đạt chuẩn quốc tế CE.  
          Bảo vệ biển số xe của bạn một cách sang trọng và đẳng cấp.
        </p>

        {/* 🎯 Nhóm nút hành động */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Liên hệ Zalo */}
          <a
            href="https://zalo.me/0972555038"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            Liên hệ Zalo
          </a>

          {/* Xem bộ sưu tập */}
          <a
            href="#projects"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
          >
            Xem bộ sưu tập
          </a>

          {/* 🏬 Xem cửa hàng – đồng màu vàng */}
          <Link
            to="/location"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          >
            <Store className="w-5 h-5" />
            <span>Xem cửa hàng</span>
          </Link>
          {/* 📰 Tin tức mới nhất */}
          <Link
            to="/tin-tuc"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
          >
            Tin tức mới nhất
          </Link>
        </div>
      </div>

      {/* Thông tin phụ */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-8 text-yellow-300 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-yellow-400" />
          <span>Bảo hành 12 tháng</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span>Khách hàng đánh giá 5★</span>
        </div>
      </div>

      {/* Dấu chấm chuyển slide */}
      <div className="absolute bottom-8 flex gap-3 z-10">
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
