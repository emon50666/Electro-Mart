

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Terms and Conditions</h1>
  
        {/* Introduction */}
        <section className="mb-6">
          <p className="text-lg text-gray-700">
            Welcome to Electro Mart! These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, you accept these terms and conditions in full. If you do not agree with these terms, do not continue to use Electro Mart's website.
          </p>
        </section>
  
        {/* Intellectual Property Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Intellectual Property</h2>
          <p className="text-lg text-gray-700">
            All content included on this website, such as text, graphics, logos, images, and software, is the property of Electro Mart or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or exploit any content for commercial purposes without written permission from Electro Mart.
          </p>
        </section>
  
        {/* Use of Website Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Use of Website</h2>
          <p className="text-lg text-gray-700">
            By accessing Electro Mart, you agree to:
            <ul className="list-disc pl-6">
              <li>Not use the website in any way that is unlawful, fraudulent, or harmful.</li>
              <li>Not use the website for any illegal or unauthorized purpose.</li>
              <li>Not interfere with the proper functioning of the website.</li>
            </ul>
          </p>
        </section>
  
        {/* Product Information and Pricing */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product Information and Pricing</h2>
          <p className="text-lg text-gray-700">
            Electro Mart strives to provide accurate product descriptions and pricing information. However, errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information at any time without prior notice.
          </p>
        </section>
  
        {/* Orders and Payments Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Orders and Payments</h2>
          <p className="text-lg text-gray-700">
            All orders placed through our website are subject to acceptance. We reserve the right to refuse or cancel orders for any reason, including product availability, errors in pricing or product descriptions, or suspected fraudulent activity. Payments must be made via the payment methods provided on the website.
          </p>
        </section>
  
        {/* Limitation of Liability Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
          <p className="text-lg text-gray-700">
            Electro Mart will not be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use our website or products, even if we have been advised of the possibility of such damages.
          </p>
        </section>
  
        {/* Governing Law Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Governing Law</h2>
          <p className="text-lg text-gray-700">
            These terms and conditions are governed by the laws of [Your Country]. Any disputes arising out of or related to these terms and conditions shall be resolved in the courts of [Your Country].
          </p>
        </section>
  
        {/* Changes to the Terms and Conditions Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Changes to the Terms and Conditions</h2>
          <p className="text-lg text-gray-700">
            Electro Mart reserves the right to modify these terms and conditions at any time. By continuing to use the website, you agree to be bound by the revised terms.
          </p>
        </section>
      </div>
    );
};

export default TermsAndConditions;