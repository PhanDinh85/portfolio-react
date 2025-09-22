import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-pixel mb-10">Contact</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Left side: Contact info */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg space-y-6 text-left">
          <h2 className="text-lg font-pixel text-gray-300 mb-4">Get in touch</h2>

          <div className="flex items-center gap-3">
            <Mail className="text-pink-400" size={20} />
            <a
              href="mailto:phandinhforwork@gmail.com"
              className="hover:text-gray-300 text-sm"
            >
              phandinhforwork@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="text-blue-400" size={20} />
            <a
              href="https://linkedin.com/in/phandinh2001"
              target="_blank"
              className="hover:text-gray-300 text-sm"
            >
              linkedin.com/in/phandinh2001
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Github className="text-green-400" size={20} />
            <a
              href="https://github.com/phanvodinh"
              target="_blank"
              className="hover:text-gray-300 text-sm"
            >
              github.com/phanvodinh
            </a>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg text-left">
          <h2 className="text-lg font-pixel text-gray-300 mb-4">Send a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-400">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-pink-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-pink-400"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">Message</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-pink-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-pink-400 text-black font-pixel rounded-lg hover:bg-pink-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
