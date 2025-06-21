import TeamCard from "../components/TeamCard";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";
import member6 from "../assets/member6.jpg";

function AboutUs() {
    const team = [
      { name: "Saad Shahid", role: "Founder & Developer", image: member1 },
      { name: "Tayyab", role: "Digital Marketing Wizard", image: member2 },
      { name: "Najam", role: "Accounts Manager", image: member3 },
      { name: "Aleem", role: "UI/UX Designer", image: member4 },
      { name: "Ali Raza", role: "SEO Specialist", image: member5 },
      { name: "Nouman", role: "Customer Support", image: member6 },
    ];
  
    return (
      <section className="py-12 bg-[#F9FAFB] text-center px-4">
        <h2 className="text-6xl text-black font-bold mb-4">About Us</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4 mb-8">
            At Web Crafters, our mission is to empower small businesses through modern, affordable, and stunning web solutions.
        </p>
        <h2 className="text-3xl text-black font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Meet our passionate team of creators, designers, and strategists working together to build stunning digital experiences.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={index * 0.1} // stagger animations
            />
          ))}
        </div>
      </section>
    );
  }
  

export default AboutUs;
