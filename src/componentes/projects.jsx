export function Projects() {
  return (
    <div className="container mx-auto p-4 mt-10 lg:mt-24">
      <h2 className="text-center text-4xl lg:text-6xl font-bold">PROJECTS</h2>
      <div className="flex flex-col items-center">
        <div className="border-b-4 border-b-purple-400 w-20 flex my-2"></div>
      </div>
      
      <p className="mb-5 text-center">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="lg:w-1/2">
          <img src="src/imagenes/dopefolio.jpeg" className="w-full" alt="Dopefolio"></img>
        </div>
        <div className="lg:w-1/2 p-6 lg:p-24">
          <h3 className="text-lg lg:text-2xl">Dopefolio</h3>
          <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
          <button className="py-3 px-8 mt-4 lg:mt-8 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">CASE STUDY</button>
        </div>
      </div>
    </div>
  )
}
