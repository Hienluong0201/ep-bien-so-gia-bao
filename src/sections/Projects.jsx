import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  // Danh sách sản phẩm ép biển số hiển thị trong grid
  const plates = [
    {
      title: 'Ép Biển Số Ô Tô Cao Cấp',
      image:
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      description:
        'Sử dụng công nghệ ép nhiệt hiện đại – bề mặt phẳng tuyệt đối, phản quang sắc nét, chống phồng rộp.',
    },
    {
      title: 'Ép Biển Số Xe Máy Gia Bảo',
      image:
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      description:
        'Thiết kế gọn gàng, ép chuẩn form, đảm bảo độ bền màu – bảo vệ biển số bền đẹp theo năm tháng.',
    },
    {
      title: 'Phiên Bản Phản Quang Chuẩn CE',
      image:
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      description:
        'Chất liệu phản quang đạt tiêu chuẩn châu Âu CE – nổi bật cả ngày lẫn đêm, khẳng định đẳng cấp chủ xe.',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <Container>
        <SectionHeader
          kicker="Bộ sưu tập"
          title="Sản phẩm Ép Biển Số Gia Bảo"
          subtitle="Tinh tế – Bền đẹp – Chuẩn quốc tế CE"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plates.map((p) => (
            <ProjectCard
              key={p.title}
              project={{
                title: p.title,
                description: p.description,
                image: p.image,
                link: 'https://zalo.me/0987654321', // Liên kết Zalo để tư vấn trực tiếp
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
