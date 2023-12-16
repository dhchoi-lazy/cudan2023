const TOC = () => {
  return (
    <section className="bg-[#fdf5e6] p-48 flex min-h-screen min-w-screen flex-col">
      <h1 className="text-3xl font-bold mb-6 mr-6">Table of Contents</h1>
      <div className="mt-10 flex flex-col items-center -translate-x-20">
        <ul className="space-y-4 flex flex-col ">
          <li className="flex items-center">
            <a className="flex items-center" href="#introduction">
              <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
                1
              </span>
              <span className="flex-1">Introduction</span>
            </a>
          </li>

          <li className="flex items-center">
            <a className="flex items-center" href="#data">
              <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
                2
              </span>
              <span className="flex-1">Data Description</span>
            </a>
          </li>

          <li className="flex items-center">
            <a className="flex items-center" href="#method">
              <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
                3
              </span>
              <span className="flex-1">
                Method: Measuring Career Success of Yangban
              </span>
            </a>
          </li>

          <li className="flex items-center">
            <a className="flex items-center" href="#result">
              <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
                4
              </span>
              <span className="flex-1">Result</span>
            </a>
          </li>
          <li className="flex items-center">
            <a className="flex items-center" href="#conclusion">
              <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
                5
              </span>
              <span className="flex-1">Conclusion</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TOC;
