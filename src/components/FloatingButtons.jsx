import zaloIcon from "../../img/Zalo.png";
import facebookIcon from "../../img/facebook.png";
import tiktokIcon from "../../img/tiktok.png";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[100000] flex flex-col gap-4">
      <a href="https://zalo.me/0972555038" target="_blank" rel="noopener noreferrer"
         className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-110 transition-all duration-500">
        <img src={zaloIcon} alt="Zalo" className="w-8 h-8" />
        <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 bg-black/80 text-yellow-300 text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300">
          Chat Zalo
        </span>
      </a>

      <a href="https://www.facebook.com/share/1CwLUXSkB8/" target="_blank" rel="noopener noreferrer"
         className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-110 transition-all duration-500 delay-100">
        <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
        <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 bg-black/80 text-yellow-300 text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300">
          Trang Facebook
        </span>
      </a>

      <a href="https://www.tiktok.com/@epbiensobao?_t=ZS-90eIuhpMd9e&_r=1" target="_blank" rel="noopener noreferrer"
         className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-110 transition-all duration-500 delay-200">
        <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
        <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 bg-black/80 text-yellow-300 text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300">
          Xem TikTok
        </span>
      </a>
    </div>
  );
}
