import profilePic from "../assets/img/profile-pic.png";

export const BioSection = () => {
  const bioDetails = {
    name: "Shalom Hunukumbura",
    birthday: "31 August 1999",
    phone: "+94 76 164 5296",
    email: "benjaminshalom1999@gmail.com",
  };

  return (
    <>
      <div
        id="about"
        className="flex flex-col text-gray-500 text-center p-10 bg-white bg-opacity-50 mt-5 ml-20 mr-20 h-80 items-center justify-center"
      >
        <h2 className="font-bold mb-7 text-3xl">ABOUT ME</h2>
        <p className="text-lg">
          I’m <span className="font-bold">Shalom Hunukumbura</span>, a
          full-stack developer with a passion for creating efficient and
          user-friendly web applications. With experience in the MERN stack,
          TypeScript, and Angular, I’ve developed the skills needed to bring
          your ideas to life and make your projects a success
        </p>
      </div>

      
      <div
        id="about"
        className="mt-15 p-10 rounded-xl shadow-lg bg-gray-100 w-full max-w-md mx-auto transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:ring-opacity-50 flex flex-col items-center justify-center"
      >
        <div className="flex justify-center items-center mb-7">
          <img
            src={profilePic}
            alt="profilePic"
            className="rounded-full border-4 border-gray-200 w-52 h-52 object-cover"
          />
        </div>
        <p className="text-lg font-medium mb-3">
          <span className="font-bold">Name:</span> {bioDetails.name}
        </p>
        <p className="text-lg font-medium mb-3">
          <span className="font-bold">Birthday:</span> {bioDetails.birthday}
        </p>
        <p className="text-lg font-medium mb-3">
          <span className="font-bold">Phone Number:</span> {bioDetails.phone}
        </p>
        <p className="text-lg font-medium mb-3">
          <span className="font-bold">E-Mail:</span> {bioDetails.email}
        </p>
      </div>
    </>
  );
};
