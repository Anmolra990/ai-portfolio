import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-200">
      <div className="max-w-6xl mx-auto px-6 py-20">

        
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
             AI Interview Prep
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Practice Frontend, React, and Next.js interviews with
            real-world questions and detailed answers.
            Improve your confidence and prepare for your next job interview.
          </p>

          <Link
            href="/interview"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
          >
             Start Interview
          </Link>
        </div>

        
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
              60+
            </h2>
            <p className="text-gray-600">
              Interview Questions
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              3
            </h2>
            <p className="text-gray-600">
              Developer Roles
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">
              100%
            </h2>
            <p className="text-gray-600">
              Free Practice
            </p>
          </div>
        </div>

      
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Available Roles
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full">
              Frontend Developer
            </span>

            <span className="bg-green-100 text-green-700 px-5 py-3 rounded-full">
              React Developer
            </span>

            <span className="bg-purple-100 text-purple-700 px-5 py-3 rounded-full">
              Next.js Developer
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}