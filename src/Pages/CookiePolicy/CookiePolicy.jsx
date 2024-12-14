import { FaCookieBite, FaEnvelope } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-lg text-gray-600">Your guide to cookies and how we use them at Electro Mart.</p>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {/* Introduction */}
        <section className="p-8 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains how Electro Mart uses cookies and similar technologies to recognize you when you visit our website. It outlines the types of information we gather, how that information is used, and your choices regarding cookies.
          </p>
        </section>

        {/* What Are Cookies? */}
        <section className="p-8 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cookies are small text files stored on your device or computer when you visit a website. They allow websites to remember information about your visit, such as your preferences, login details, and activities, which can improve your browsing experience.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 border-l-4 border-blue-500 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Session Cookies</h3>
              <p className="text-gray-700 text-sm">Temporary cookies that are deleted after your browsing session ends.</p>
            </div>
            <div className="p-6 border-l-4 border-green-500 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
              <p className="text-gray-700 text-sm">Cookies that stay on your device until they expire or are deleted.</p>
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="p-8 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-lg shadow">
              <strong className="text-gray-900">To Enhance Website Performance:</strong> Analyze website performance to improve usability.
            </li>
            <li className="p-4 rounded-lg shadow">
              <strong className="text-gray-900">To Remember Your Preferences:</strong> Save your preferences for a personalized experience.
            </li>
            <li className="p-4 rounded-lg shadow">
              <strong className="text-gray-900">To Track User Behavior:</strong> Understand user interactions to refine services.
            </li>
            <li className="p-4 rounded-lg shadow">
              <strong className="text-gray-900">For Marketing and Advertising:</strong> Serve targeted ads based on browsing habits.
            </li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="p-8 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about our Cookie Policy, please contact us:
          </p>
          <div className="flex items-center text-blue-600 font-semibold">
            <FaEnvelope className="mr-2 text-xl" />
            <a href="mailto:support@electromart.com" className="underline">support@electromart.com</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
