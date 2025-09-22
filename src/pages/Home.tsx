import Avatar from "../components/Avatar";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Avatar />
      <h1 className="text-2xl md:text-4xl font-pixel mb-2">
        PHAN VÕ ĐỊNH
      </h1>
      <p className="text-sm md:text-lg text-gray-400 font-pixel mb-6">
        Software Developer | Làm đủ thứ nhưng chưa đủ tiền
      </p>
      <SocialLinks />
    </div>
  );
}
