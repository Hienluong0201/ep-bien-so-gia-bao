import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { MapPin, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Location() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ảnh nền hero to full màn hình */}
      <div className="relative w-full h-[100vh]">
      <img
      src="/img/cuahang.jpg"
      alt="Cửa hàng Ép Biển Số Gia Bảo"
      className="absolute inset-0 w-full h-full object-cover brightness-75"
    />
        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/80 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-white transition shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại trang chủ
          </Link>
        </div>

        {/* Tiêu đề nằm giữa ảnh */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Cửa Hàng Ép Biển Số Gia Bảo
          </h1>
          <p className="text-lg max-w-2xl">
            Đến trực tiếp cửa hàng để xem mẫu thật, trải nghiệm quy trình ép biển cao cấp chuẩn CE quốc tế.
          </p>
        </div>
      </div>

      {/* Nội dung chi tiết */}
      <section id="location" className="py-28 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <SectionHeader
            kicker="THÔNG TIN CỬA HÀNG"
            title="Ép Biển Số Gia Bảo"
            subtitle="Địa điểm chính thức tại trung tâm Phú Nhuận – chuyên ép biển số ô tô & xe máy cao cấp, công nghệ ép nhiệt chuẩn CE."
          />

          {/* Mô tả chi tiết */}
          <div className="mx-auto max-w-4xl text-center text-neutral-800 leading-relaxed mb-16">
            <p className="text-2xl font-semibold mb-6">
              🎯 <strong>Ép Biển Số Gia Bảo</strong> – địa chỉ tin cậy hàng đầu tại TP.HCM trong lĩnh vực ép biển số cao cấp.
            </p>

            <p className="text-xl mb-8">
              Cửa hàng trang bị <strong>máy ép nhiệt hiện đại</strong>, đảm bảo biển số phẳng tuyệt đối, phản quang chuẩn CE, 
              bền màu và sang trọng.  
              <br /><br />
              Khách hàng có thể trực tiếp xem quy trình ép, lựa chọn mẫu và nhận biển ngay trong ngày.
            </p>
          </div>

          {/* Ưu điểm */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20 text-left text-lg text-gray-800">
            <div className="p-6 bg-white rounded-xl shadow-md">
              💎 Biển phản quang cao cấp – sắc nét, sáng đẹp, chuẩn châu Âu CE.
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              ⚙️ Ép nhiệt tiên tiến – không phồng rộp, không bong keo.
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              🚗 Nhận ép cho ô tô & xe máy – thiết kế theo yêu cầu riêng.
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              📦 Giao nhanh, bảo hành dài hạn, hỗ trợ toàn quốc.
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div className="mx-auto max-w-3xl text-center text-gray-900">
            <h3 className="text-3xl font-bold mb-4">Liên hệ & Địa chỉ cửa hàng</h3>
            <p className="text-xl mb-6">
              📍 <strong>Địa chỉ:</strong> 121 Đ. Trần Huy Liệu, Phường 11, Phú Nhuận, TP. Hồ Chí Minh  
              <br />
              ⏰ <strong>Giờ làm việc:</strong> 8h00 - 19h00 (Thứ 2 - CN)
              <br />
              ☎️ <strong>Hotline:</strong>{' '}
              <a href="tel:0972555038" className="text-blue-600 underline hover:text-blue-500 font-semibold">
                0972 555 038
              </a>
            </p>

            {/* Nút mở Google Maps */}
            <a
              href="https://maps.app.goo.gl/NajMmXXPRcv2XdLu5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-500 transition"
            >
              <MapPin className="w-6 h-6" />
              Mở Google Maps để xem đường đi
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
