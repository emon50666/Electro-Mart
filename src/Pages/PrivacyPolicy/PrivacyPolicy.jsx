import { FaEnvelope } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          We care about your privacy at Electro Mart.
        </p>
      </header>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Main Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Electro Mart, we prioritize protecting your personal data. This Privacy
              Policy outlines our practices regarding the collection, use, and
              protection of your information when you visit our site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">Information We Collect</h2>
            <ul className="list-inside list-disc text-gray-600 space-y-2">
              <li>Your name, email address, and contact information</li>
              <li>Payment and billing details</li>
              <li>Order history and shipping information</li>
              <li>IP addresses and browser details</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement secure measures to protect your data. However, no online
              transmission or storage method is completely secure.
            </p>
          </section>
        </div>

        {/* Right Column - Complementary Sections */}
        <div className="space-y-8">
          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">How We Use Your Information</h2>
            <ul className="list-inside list-disc text-gray-600 space-y-2">
              <li>To fulfill orders and provide customer support</li>
              <li>To communicate updates and promotions</li>
              <li>To enhance website functionality</li>
              <li>To detect and prevent fraudulent activity</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your data. Limited sharing occurs with trusted providers
              for:
            </p>
            <ul className="list-inside list-disc text-gray-600 space-y-2">
              <li>Payment processing</li>
              <li>Customer support and marketing</li>
              <li>Website hosting and security</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-700 mb-3">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies help us improve your experience by storing preferences and
              tracking usage. You can adjust your browser settings to manage cookies.
            </p>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-3">Your Rights</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          You can request access, updates, or deletion of your data. Contact us at:
        </p>
        <div className="flex justify-center items-center text-blue-600 font-medium">
          <FaEnvelope className="mr-2 text-lg" />
          <a href="mailto:support@electromart.com" className="underline">
            support@electromart.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
