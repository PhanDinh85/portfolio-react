export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/phanvodinh"
        target="_blank"
        className="px-4 py-2 bg-white text-black rounded-lg shadow-lg font-pixel hover:bg-gray-200"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/phandinh2001"
        target="_blank"
        className="px-4 py-2 bg-white text-black rounded-lg shadow-lg font-pixel hover:bg-gray-200"
      >
        LinkedIn
      </a>
      <a
        href="mailto:phandinhforwork@gmail.com"
        className="px-4 py-2 bg-white text-black rounded-lg shadow-lg font-pixel hover:bg-gray-200"
      >
        Email
      </a>
    </div>
  );
}
