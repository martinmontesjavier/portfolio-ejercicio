import { Redes } from "./redes";

export function Home() {
  return (
    <div className="text-2xl mt-2">
      <div className="relative" style={{
        backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(src/imagenes/common-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '1.5rem 2rem', // Reducido el padding para dispositivos pequeños
      }}>     
        <Redes className="lg:block absolute left-0 top-1/4 mt-24 py-5 flex flex-col justify-center items-start px-4 bg-white" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-bold text-4xl lg:text-7xl text-black">HEY, I'M JAVIER MARTIN</h1>
          <h5 className="text-gray-700 mt-6">
            A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
          </h5>
          <div className="mt-6">
            <button className="py-3 px-8 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
              PROJECTS
            </button>
          </div>
        </div>
        <Redes className="lg:hidden fixed bottom-5 right-5 py-5 flex justify-center items-center bg-white rounded-full shadow-md" />
      </div>
    </div>
  );
}
