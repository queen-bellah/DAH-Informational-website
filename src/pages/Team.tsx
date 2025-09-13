
import { User, Linkedin, Mail, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Aline Mutesi",
      position:  "Founder & CEO ",
      bio: "Passionate about innovation and collaboration, focused on building products that make a real difference.",
      image: "/Teamimage/alie.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/mutesi-aline-05",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "aline.mutesi@dah.com",
      },
    },
    {
      name: "Latifa Umunyana",
      position: "Founder & Head of Data and  AI Architecture",
      bio: "Technical architect specializing in AI/ML and scalable systems.",
      image: "/Teamimage/kalifa.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/latifaumunyana/",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "latifa.umunyana@dah.com",
      },
    },
    {
      name: "Fanny Ingabire",
      position: " Co-Founder & UX/UI Designer ",
      bio: "Creative designer focused on user-centered design and accessibility.",
      image: "/Teamimage/fanny.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/fanny-ingabire-b60a7b2b5/",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "fanny.ingabire@dah.com",
      },
    },
    {
      name: "Queen Bella Umurerwa",
      position: "Co-Founder & CTO ",
      bio: "Full-stack engineer passionate about building accessible platforms.",
      image: "/Teamimage/24.07.24-152 (1).jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/latifa-umunyana",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "queen.bella@dah.com",
      },
    },
    {
      name: "Nancy Shimwe Murangira",
      position: "Co-Founder & Head of Research",
      bio: "Expert in statistical analysis for social impact.",
      image: "/Teamimage/nancy-ishimwe.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/latifa-umunyana",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "nancy.ishimwe@dah.com",
      },
    },
    {
      name: "Shalom Uwamahoro",
      position: "Co-Founder & Product Manager",
      bio: "Vision driven product manager with a strong commitment to creating accessible, user-focused products that drive meaningful change",
      image: "/Teamimage/1000347924 (1).png",
      socials: {
        linkedin: "https://www.linkedin.com/in/shalom-uwamahoro-4b43422b3/",
        twitter: "https://twitter.com/latifa_umunyana",
        email: "shalom.uwamahoro@dah.com",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#E6F4F9] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1931] mb-3">
            Meet The Team
          </h2>
          <p className="text-md text-[#555]">Powered by Innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-5">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#0096C7]/40 shadow-md">
                  {member.image ? (
                   <img
  src={member.image}
  alt={member.name}
  className={`w-full h-full object-cover ${
    member.name === "Aline Mutesi" ? "object-top" : "object-center"
  }`}
/>

                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0096C7]/10">
                      <User className="w-14 h-14 text-[#0096C7]" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#0A1931] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0096C7] font-medium mb-3 text-xs uppercase tracking-wide">
                  {member.position}
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-6 px-2 flex-grow">
                  {member.bio}
                </p>

                <div className="flex items-center justify-center gap-3 mt-auto">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#0096C7] hover:bg-[#0A1931] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#0096C7] hover:bg-[#0A1931] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-9 h-9 bg-[#0096C7] hover:bg-[#0A1931] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
