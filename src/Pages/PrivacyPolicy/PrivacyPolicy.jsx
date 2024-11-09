
const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 md:text-4xl">
          Privacy Policy - Electro Mart
        </h1>
  
        {/* Introduction */}
        <section className="mb-6">
          <p className="text-base sm:text-lg text-gray-700">
            At Electro Mart, we value the privacy of our customers and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website and make purchases.
          </p>
        </section>
  
        {/* Information Collection Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We collect personal information that you provide to us when using our website. This may include:
            <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700">
              <li>Your name, email address, and contact details.</li>
              <li>Payment information such as credit card or billing information.</li>
              <li>Order details, including product names and quantities.</li>
              <li>Shipping address and other necessary delivery information.</li>
              <li>IP addresses and browser information for security purposes.</li>
            </ul>
          </p>
        </section>
  
        {/* How We Use Your Information Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We use your information for the following purposes:
            <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700">
              <li>To process and fulfill your orders and provide customer support.</li>
              <li>To communicate with you about your order status, promotions, and updates.</li>
              <li>To improve the functionality and user experience of our website.</li>
              <li>To detect fraud and ensure the security of our website.</li>
              <li>To send marketing communications with your consent.</li>
            </ul>
          </p>
        </section>
  
        {/* Data Protection Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Data Protection</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We take appropriate measures to protect your personal data and ensure it is secure. This includes using secure encryption technologies and limiting access to your information to authorized personnel only. However, please be aware that no method of data transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>
  
        {/* Sharing Your Information Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Sharing Your Information</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We do not sell, rent, or lease your personal information to third parties. However, we may share your data with trusted service providers to help us with the following:
            <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700">
              <li>Payment processing and order fulfillment.</li>
              <li>Providing customer support and marketing communications.</li>
              <li>Website hosting and security services.</li>
            </ul>
            These third parties are obligated to protect your information and use it only for the purpose for which it was provided.
          </p>
        </section>
  
        {/* Cookies Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Cookies</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Our website uses cookies to enhance your user experience. Cookies are small files stored on your device that allow us to track usage patterns and provide you with personalized content. You can control the use of cookies through your browser settings. If you choose to disable cookies, some parts of the website may not function properly.
          </p>
        </section>
  
        {/* Your Rights Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Your Rights</h2>
          <p className="text-base sm:text-lg text-gray-700">
            You have the right to access, update, or delete your personal information at any time. If you wish to exercise any of these rights or have any concerns about your data, please contact us at support@electromart.com.
          </p>
        </section>
  
        {/* Changes to the Privacy Policy Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Changes to the Privacy Policy</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Electro Mart reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated date. By continuing to use the website, you accept any changes to the Privacy Policy.
          </p>
        </section>
  
        {/* Contact Information Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-700">
            If you have any questions or concerns regarding our privacy practices, please feel free to contact us at:
            <br />
            Email: <a href="mailto:support@electromart.com" className="text-blue-500">support@electromart.com</a>
          </p>
        </section>
      </div>
    );
};

export default PrivacyPolicy;