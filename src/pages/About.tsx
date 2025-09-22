import {
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type Translation = {
  title: string;
  intro: string;
  skills: string;
  experience: string;
  education: string;
  certifications: string;
  exp: {
    uni: string[];
    isv: string[];
    altek: string[];
  };
};

const translations: Record<"vi" | "en", Translation> = {
  vi: {
    title: "Về tôi",
    intro: "Xin chào 👋 Tôi là Phan Võ Định, Backend Developer với nền tảng Java, Spring Boot, MyBatis và hệ thống ERP.",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    education: "Giáo dục",
    certifications: "Chứng nhận",
    exp: {
      uni: [
        "Phối hợp với IT Manager và các phòng ban để phân tích & thu thập yêu cầu.",
        "Phát triển & duy trì RESTful APIs và module frontend phục vụ vận hành.",
        "Chuyển đổi dữ liệu từ Excel sang hệ thống ERP.",
        "Hỗ trợ migrate từ hệ thống cũ sang ERP mới.",
        "Triển khai tính năng mới dựa trên feedback.",
      ],
      isv: [
        "Phát triển hệ thống quản lý phụ tùng ô tô cho Toyota và Honda.",
        "Làm việc trực tiếp với khách hàng & viết tài liệu chức năng.",
        "Refactor API cũ và phát triển phiên bản mới.",
        "Debug & đảm bảo chất lượng code.",
        "Tối ưu hiệu năng & UX.",
      ],
      altek: [
        "Phát triển API ngân hàng bằng Java & Dropwizard.",
        "Duy trì chất lượng code, áp dụng code convention.",
        "Fix bug, tối ưu hiệu suất hệ thống.",
        "Nắm bắt quy trình nghiệp vụ sản phẩm.",
      ],
    },
  },
  en: {
    title: "About Me",
    intro: "Hello 👋 I’m Phan Võ Định, a Backend Developer with strong expertise in Java, Spring Boot, MyBatis, and ERP systems.",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    exp: {
      uni: [
        "Collaborated with IT Manager and departments to analyze & gather requirements.",
        "Developed & maintained RESTful APIs and frontend modules.",
        "Migrated data from Excel to ERP system.",
        "Assisted in system migration with minimal downtime.",
        "Implemented new features based on feedback.",
      ],
      isv: [
        "Developed automotive parts management system for Toyota & Honda.",
        "Worked directly with clients and wrote technical documents.",
        "Refactored legacy APIs and built new versions.",
        "Debugged & ensured code quality.",
        "Optimized performance & user experience.",
      ],
      altek: [
        "Developed banking APIs using Java & Dropwizard.",
        "Maintained code quality and coding standards.",
        "Fixed bugs and optimized system performance.",
        "Learned and adapted to product business processes.",
      ],
    },
  },
};

export default function About() {
  const { lang } = useLanguage();
  const content = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-pixel mb-10">{content.title}</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Avatar + intro */}
        <div className="md:col-span-1 flex flex-col items-center">
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=PhanVoDinh"
            alt="Avatar"
            className="w-40 h-40 mb-6 border-4 border-gray-700 rounded-xl shadow-lg bg-gray-900"
          />
          <h2 className="text-xl font-pixel">Phan Võ Định</h2>
          <p className="text-gray-400 font-pixel text-sm mt-2">Backend Developer</p>
          <p className="text-gray-500 text-center mt-4 text-sm">{content.intro}</p>
        </div>

        {/* Content right */}
        <div className="md:col-span-2 space-y-6 max-w-2xl text-left mx-auto">
          {/* Skills */}
          <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-green-400" size={20} />
              <h2 className="text-lg font-pixel text-gray-300">{content.skills}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Java, Spring Boot, Spring MVC, MyBatis, Hibernate, Redis</li>
              <li>REST API, Swagger, Dropwizard</li>
              <li>Angular, TailwindCSS, PrimeNG</li>
              <li>MySQL, Oracle, PostgreSQL, SQL Server</li>
              <li>Git, Docker, GitLab CI/CD</li>
            </ul>
          </section>

          {/* Experience */}
          <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-blue-400" size={20} />
              <h2 className="text-lg font-pixel text-gray-300">{content.experience}</h2>
            </div>

            <div className="space-y-6 text-gray-400 text-sm">
              {/* Uni-President */}
              <div>
                <h3 className="text-white font-semibold text-base">
                  Software Developer – Uni-President Vietnam
                </h3>
                <p className="italic text-gray-500 mb-2">04/2025 – now | Dĩ An, HCMC</p>
                <ul className="list-disc list-inside space-y-1">
                  {content.exp.uni.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              {/* ISV */}
              <div>
                <h3 className="text-white font-semibold text-base">
                  Software Developer – ISV Vietnam
                </h3>
                <p className="italic text-gray-500 mb-2">04/2024 – 04/2025 | Sài Gòn, HCMC</p>
                <ul className="list-disc list-inside space-y-1">
                  {content.exp.isv.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              {/* Altek */}
              <div>
                <h3 className="text-white font-semibold text-base">
                  Java Developer – Altek Technology
                </h3>
                <p className="italic text-gray-500 mb-2">08/2023 – 12/2023 | Bình Thạnh, HCMC</p>
                <ul className="list-disc list-inside space-y-1">
                  {content.exp.altek.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-yellow-400" size={20} />
              <h2 className="text-lg font-pixel text-gray-300">{content.education}</h2>
            </div>
            <p className="text-gray-400 text-sm">
              <span className="text-white">Nông Lâm University – HCMC</span> (2019 – 2023)
              <br />Information Technology
            </p>
          </section>

          {/* Certifications */}
          <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-purple-400" size={20} />
              <h2 className="text-lg font-pixel text-gray-300">{content.certifications}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Google Professional Certificate – IT Automation with Python (2023)</li>
              <li>Hewlett Packard – Software Engineering Virtual Experience (2023)</li>
              <li>National University of Kaohsiung – Spring Asia Virtual Academy (2022)</li>
              <li>VNU HCM – Artificial Intelligence Training (2021)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
