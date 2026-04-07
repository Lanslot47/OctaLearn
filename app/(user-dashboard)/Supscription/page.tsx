import Sidebar from "../component/Sidebar";
import { Crown, Zap } from "lucide-react";

const Subscription = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="lg:w-64 w-full">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center text-sm font-semibold text-gray-700 gap-2">
            <Crown size={15} className="text-yellow-500" /> Premium Access
          </span>
        </div>

        {/* Title Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-500 text-md">
            Your trial has ended. Subscribe to continue accessing premium content
          </p>
        </section>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Monthly Plan */}
          <div className="border border-blue-500 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Crown size={35} className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Monthly</h2>
            <p className="text-4xl font-bold text-gray-800 mb-1">#2,000</p>
            <span className="text-gray-500 mb-4">/month</span>

            {/* Features */}
            <div className="space-y-2 w-full">
              {Array(6)
                .fill("Get Unlimited Access To Past Questions")
                .map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="text-blue-500">&#10003;</i>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
            </div>

            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>

          {/* Semester Plan */}
          <div className="border border-blue-500 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow relative">
            <Zap size={35} className="bg-blue-500 text-white p-2 rounded-full mb-4" />
            <h2 className="text-2xl font-bold mb-2">Semester</h2>
            <p className="text-4xl font-bold text-gray-800 mb-1">#10,000</p>
            <span className="text-gray-500 mb-4">/month</span>

            {/* Features */}
            <div className="space-y-2 w-full">
              {Array(6)
                .fill("Get Unlimited Access To Past Questions")
                .map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="text-blue-500">&#10003;</i>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>

          {/* Annual Plan */}
          <div className="border border-blue-500 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Crown size={35} className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Annual</h2>
            <p className="text-4xl font-bold text-gray-800 mb-1">#20,000</p>
            <span className="text-gray-500 mb-4">/year</span>

            {/* Features */}
            <div className="space-y-2 w-full">
              {Array(6)
                .fill("Get Unlimited Access To Past Questions")
                .map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className="text-blue-500">&#10003;</i>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
            </div>

            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Why Subscribe Section */}
        <div className="mt-12 border rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Why Subscribe?</h2>
          <p className="text-gray-500 mb-6">
            Get unlimited access to quality study material and resources
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <i className="text-blue-500">&#10003;</i> Comprehensive Resources
              </h3>
              <p className="text-gray-500 text-sm">
                Access thousands of past questions, notes, and handouts from top Nigerian universities.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <i className="text-blue-500">&#10003;</i> AI-Powered Learning
              </h3>
              <p className="text-gray-500 text-sm">
                Get personalized study recommendations and instant answers to your study questions.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <i className="text-blue-500">&#10003;</i> Study-Buddy Network
              </h3>
              <p className="text-gray-500 text-sm">
                Connect with peers from study groups and collaborate on projects.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-2">
                <i className="text-blue-500">&#10003;</i> Regular Updates
              </h3>
              <p className="text-gray-500 text-sm">
                New materials added weekly. Stay ahead with the latest exam patterns and questions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscription;