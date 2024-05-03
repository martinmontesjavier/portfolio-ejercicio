export function Footer() {
  return (
    <div className="bg-black p-4 container-fluid mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="order-2 lg:order-1 mb-6 lg:mb-0">
          <h1 className="text-white text-xl lg:text-3xl mb-4 lg:mb-0">
            SOCIAL
          </h1>
          <div className="flex mt-3 lg:mt-0">
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/rammcodes">
              <img className="w-6 h-6 lg:w-8 lg:h-8 mr-2" src="src/imagenes/linkedin-ico.png" alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/rammcodes">
              <img className="w-6 h-6 lg:w-8 lg:h-8 mr-2" src="src/imagenes/github-ico.png" alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/rammcodes">
              <img className="w-6 h-6 lg:w-8 lg:h-8 mr-2" src="src/imagenes/twitter-ico.png" alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://dev.to/rammcodes">
              <img className="w-6 h-6 lg:w-8 lg:h-8 mr-2" src="src/imagenes/blog-ico.png" alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg">
              <img className="w-6 h-6 lg:w-8 lg:h-8" src="src/imagenes/yt-ico.png" alt="" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-white text-xl lg:text-3xl mb-4">
            Javier Martín Montes
          </h2>
          <p className="text-white lg:w-[530px]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        <hr className="border-white" />
        <p className="text-white text-center text-sm mt-5">
          © Copyright 2024 . Made by Javier Martín Montes
        </p>
      </div>
    </div>
  );
}
