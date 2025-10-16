import { Facebook } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[100000] flex flex-col gap-4">
      {/* 🟡 Zalo */}
      <a
        href="https://zalo.me/0972555038"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-pulse"
      >
        {/* Logo Zalo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8 text-black"
          fill="currentColor"
        >
          <path d="M7 4h34a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H14l-8 7v-7H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm7 10v2H9v14H7V16h7zm5.5 0h1.9l4.4 11.2L30.8 16h2l-5.3 13.8h-2L19.5 16zm18.3 0h1.9l5.3 13.8h-2l-1.1-3.1h-6.3l-1.1 3.1h-1.9L37.8 16zm0.9 2.1L36 24.1h4l-2.1-6z" />
        </svg>

        <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 bg-black/80 text-yellow-300 text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300">
          Chat Zalo
        </span>
      </a>

      {/* 🟡 Facebook */}
      <a
        href="https://m.me/yourpage" // 🔗 thay link thật vào đây
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-pulse delay-150"
      >
        <Facebook className="w-8 h-8 text-black" />
        <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 bg-black/80 text-yellow-300 text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300">
          Chat Facebook
        </span>
      </a>
    </div>
  );
}
