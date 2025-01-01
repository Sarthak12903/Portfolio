import { useState } from "react";
import { Download, Eye, X } from "lucide-react";
export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Sarthak's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {" "}
      <div id="resume" className="ml-72 mt-36 p-10 w-[70vw] h-screen">
        <h1 className="text-4xl font-bold pb-3 broder border-b-2 w-20 border-blue-300 inline-block">
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
              <h2 className="text-2xl font-bold mb-6">
                Professional Experience
              </h2>
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
                      Designed and developed intuitive user interfaces for video
                      surveillance systems, enhancing user experience and
                      functionality.
                    </li>
                    <li>
                      Led the web development aspect of a barcode reader
                      project, ensuring seamless integration and performance.
                    </li>
                    <li>
                      Collaborated with cross-functional teams on a CRM project,
                      contributing to front-end and web-based solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-8 bg-blue-100 flex py-24 rounded-2xl border-dotted border-2 border-slate-500 justify-center gap-4">
          <button
            onClick={() => setShowPreview(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Eye className="w-5 h-5" />
            Preview Resume
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-8">
              <iframe
                src="/Resume.pdf"
                className="w-full h-[80vh]"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
