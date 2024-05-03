export function Menu() {
  return (
    <div className="lg:flex justify-end w-full lg:w-3/4 mt-6 space-x-12">
      <div className="lg:hidden">
        <button className="text-3xl font-bold hover:text-purple-700 transition duration-500 ml-[80%]">
          ☰
        </button>
      </div>
      <div className="hidden lg:flex space-x-12">
        <a href="#home" className="text-lg font-bold hover:text-purple-700 transition duration-500">HOME</a>
        <a href="#about" className="text-lg font-bold hover:text-purple-700 transition duration-500">ABOUT</a>
        <a href="#projects" className="text-lg font-bold hover:text-purple-700 transition duration-500">PROJECTS</a>
        <a href="#contact" className="text-lg font-bold hover:text-purple-700 transition duration-500">CONTACT</a>
      </div>
    </div>
  );
}
