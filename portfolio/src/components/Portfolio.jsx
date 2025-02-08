import blogApp from "../assets/img/blogApp.png";
import chatApp from "../assets/img/chatApp.png";
import ems from "../assets/img/ems.png";
import landingPage from "../assets/img/landingPage.png";

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Blog App",
            image: blogApp,
            github: "https://github.com/ShalomHunukumbura/pen-and-pixel",
            live: "https://github.com/ShalomHunukumbura/pen-and-pixel",
        },
        {
            id: 2,
            title: "Chat App",
            image: chatApp,
            github: "https://github.com/ShalomHunukumbura/whizchat",
            live: "https://github.com/ShalomHunukumbura/whizchat",
        },
        {
            id: 3,
            title: "Employee Management System",
            image: ems,
            github: "https://github.com/ShalomHunukumbura/EMS-AngularJS",
            live: "https://github.com/ShalomHunukumbura/EMS-AngularJS",
        },
        {
            id: 4,
            title: "React-Tailwind Landing Page",
            image: landingPage,
            github: "https://github.com/ShalomHunukumbura/react-tailwind-app",
            live: "https://github.com/ShalomHunukumbura/react-tailwind-app",
        },
        {
            id: 5,
            title: "Netflix-Clone",
            image: netflixClone,
            github: "https://github.com/ShalomHunukumbura/netflix-clone",
            live: "https://github.com/ShalomHunukumbura/netflix-clone",
        },
    ];
    


    return (
        <div id="portfolio" className="py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
                PORTFOLIO
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* Cover Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 backdrop-blur-sm bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center gap-3">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Live Preview
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
