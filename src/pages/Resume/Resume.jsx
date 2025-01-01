export default function Resume() {
  return (
    <div id="resume" className="ml-72 mt-36 p-10 w-[70vw] h-screen">
      <h1 className="text-4xl font-bold pb-3 broder border-b-2 border-yellow-300 inline-block">
        Resume
      </h1>
      <div className="grid md:grid-cols-2 mt-10 gap-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold text-gray-700">
                  Bachelor Of Engineering in Information Technology
                </h3>
                <p className="text-gray-600">2022 - 2026</p>
                <p className="italic mt-2">
                  JSPM Bhivarabai Sawant Institute Of Technology And Research,
                  Wagholi, Pune
                </p>
                <p className="mt-2">S.E SGPA - 8.23</p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold text-gray-700">12th CBSE</h3>
                <p className="text-gray-600">2021 - 2022</p>
                <p className="italic mt-2">
                  Air Force School, Chandannagar 9BRD, Pune-14
                </p>
                <p className="mt-2">Score in Percentage - 85.4</p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold text-gray-700">10th CBSE</h3>
                <p className="text-gray-600">2019 - 2020</p>
                <p className="italic mt-2">
                  Air Force School, Chandannagar 9BRD, Pune-14
                </p>
                <p className="mt-2">Score in Percentage - 93</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold text-gray-700">
                  Full stack Developer Intern
                </h3>
                <p className="text-gray-600">June 2024 - Present</p>
                <p className="italic mt-2">Azranta , Pune</p>
                <ul className="mt-4 space-y-2 list-disc ml-4">
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.
                  </li>
                  <li>
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold text-gray-700">
                  GRAPHIC DESIGN SPECIALIST
                </h3>
                <p className="text-gray-600">2017 - 2018</p>
                <p className="italic mt-2">
                  Stepping Stone Advertising, New York, NY
                </p>
                <ul className="mt-4 space-y-2 list-disc ml-4">
                  <li>
                    Developed numerous marketing programs (logos,
                    brochures,infographics, presentations, and advertisements).
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
