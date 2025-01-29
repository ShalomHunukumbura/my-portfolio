import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaCloud, FaHeadset } from "react-icons/fa";
import { MdSecurity, MdDesignServices } from "react-icons/md";

export const Services = () => {
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Building responsive, high-performance web applications using React, Angular, TypeScript, and Tailwind CSS.",
            icon: <FaLaptopCode size={40} className="text-blue-600" />
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Developing scalable backend systems using Node.js, Express, MongoDB, and Firebase for real-time applications.",
            icon: <FaServer size={40} className="text-green-600" />
        },
        {
            id: 3,
            title: "Full-Stack Web Apps",
            description: "Creating complete MERN stack applications, integrating frontend, backend, authentication, and real-time data handling.",
            icon: <FaCode size={40} className="text-red-600" />
        },
        {
            id: 4,
            title: "Cloud & Deployment",
            description: "Deploying applications using AWS (S3, EC2), Vercel, and Firebase, ensuring security and scalability.",
            icon: <FaCloud size={40} className="text-yellow-600" />
        },
        {
            id:5,
            title: "API Development & Integration",
            description: " Building secure and efficient REST & WebSocket APIs for seamless communication between services",
            icon: <MdSecurity size={40} className="text-purple-600"/>
        },
        {
            id:6,
            title: "Technical Support & Optimization",
            description: "Optimizing website performance, debugging issues, and providing ongoing support for applications.",
            icon: <FaHeadset size={40} className="text-pink-600"/>
        }
    ]

    return(
        <section id="services" className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10" > What I Do</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.id} className=" p-6 bg-white  rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300" >
                        <div className="mb-4" >{service.icon}</div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>

                    </div>
                ))}

            </div>

        </section>
    )
}