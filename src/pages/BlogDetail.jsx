import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  // Tạm thời dùng dữ liệu mẫu
  const posts = {
    "ep-bien-so-mica": {
      title: "5 lợi ích khi ép biển số mica chính hãng",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
      content: `
        Mica chính hãng giúp bảo vệ biển số xe khỏi trầy xước, phai màu và
        các tác nhân thời tiết. Với lớp phủ trong suốt, mica giúp biển số
        luôn như mới và dễ lau chùi. <br/><br/>
        Ngoài ra, loại mica đạt chuẩn CE còn đảm bảo tính đàn hồi, chịu
        nhiệt, không bị ố vàng sau thời gian dài sử dụng. <br/><br/>
        Khi lựa chọn ép biển số, bạn nên chọn cơ sở uy tín — ÉP BIỂN SỐ
        GIA BẢO luôn sử dụng vật liệu được kiểm định quốc tế, đảm bảo
        độ bền và tính thẩm mỹ cao nhất.
      `,
    },
    "mica-kem-chat-luong": {
      title: "Cách nhận biết mica ép biển số kém chất lượng",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
      content: `
        Nhiều cơ sở sử dụng mica rẻ tiền, dễ nứt hoặc bong mép chỉ sau vài tháng.
        Đặc biệt, mica kém chất lượng thường bị ố vàng, mờ đục và giảm độ trong suốt.
        <br/><br/>
        Hãy quan sát kỹ: nếu mica có bọt khí hoặc vân mờ — đó là dấu hiệu của loại
        không đạt chuẩn. <br/><br/>
        Hãy chọn những nơi uy tín như ÉP BIỂN SỐ GIA BẢO để được bảo hành và sử dụng
        vật liệu đạt tiêu chuẩn CE quốc tế.
      `,
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <main className="text-center text-gray-200 py-32">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Bài viết không tồn tại 😢
        </h1>
        <Link
          to="/tin-tuc"
          className="text-yellow-400 hover:text-yellow-300 underline"
        >
          ← Quay lại trang Tin tức
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 md:px-10 py-24 bg-black/95 min-h-screen text-gray-100">
      <div className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl mb-10 shadow-[0_0_20px_rgba(255,215,0,0.25)]"
        />
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">
          {post.title}
        </h1>
        <article
          className="text-gray-300 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>

        <div className="mt-12">
          <Link
            to="/tin-tuc"
            className="inline-block text-yellow-400 hover:text-yellow-300 font-semibold mt-8 underline"
          >
            ← Quay lại Tin tức
          </Link>
        </div>
      </div>
    </main>
  );
}
