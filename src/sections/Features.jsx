export default function Features() {
  const items = [
    {
      title: "Công nghệ ép nhiệt tiên tiến",
      desc: "Sử dụng máy ép hiện đại giúp biển số phẳng tuyệt đối, bền màu, không phồng rộp theo thời gian.",
    },
    {
      title: "Vật liệu cao cấp chuẩn CE",
      desc: "Chất liệu phản quang đạt tiêu chuẩn châu Âu, chống trầy xước, chịu được nắng mưa khắc nghiệt.",
    },
    {
      title: "Gia công tỉ mỉ – Đẳng cấp khác biệt",
      desc: "Mỗi sản phẩm được hoàn thiện thủ công với độ chính xác cao, mang dấu ấn riêng của chủ xe.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-neutral-900 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-8">
        Ưu điểm nổi bật
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-neutral-800 rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
