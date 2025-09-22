export default function Projects() {
  const projects = [
    {
      name: "E-Commerce Website",
      desc: "Website thương mại điện tử với Spring Boot + Angular",
      link: "https://github.com/phanvodinh/E-commerce"
    },
    {
      name: "ERP System (Demo)",
      desc: "Quản lý kho và sản xuất, tích hợp MyBatis + Angular",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-6">
      <h1 className="text-2xl md:text-4xl font-pixel mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="border border-gray-700 p-6 rounded-xl bg-gray-900 shadow-lg">
            <h2 className="text-lg font-pixel mb-2">{p.name}</h2>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              className="px-3 py-1 bg-white text-black font-pixel rounded hover:bg-gray-200"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
