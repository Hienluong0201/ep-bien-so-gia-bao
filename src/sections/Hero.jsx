export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",      }}
    >
      <div className="bg-black/70 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-blue-400 mb-4 drop-shadow-md">
          ÉP BIỂN SỐ GIA BẢO
        </h1>
        <p className="text-gray-200 mb-6 max-w-lg leading-relaxed">
          Dịch vụ ép biển số cao cấp – bền đẹp – chống phồng rộp – đạt chuẩn quốc tế CE.  
          Bảo vệ biển số xe của bạn một cách sang trọng và đẳng cấp.
        </p>
        <a
          href="https://zalo.me/0972555038"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-400 transition"
        >
          Liên hệ Zalo
        </a>
      </div>
    </section>
  )
}
