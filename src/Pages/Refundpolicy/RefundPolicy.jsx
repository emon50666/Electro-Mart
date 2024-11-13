
const RefundPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
       
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 md:text-4xl">
          Refund Policy - Electro Mart
        </h1>
  
        <section className="mb-6">
          <p className="text-base sm:text-lg text-gray-700">
            At Electro Mart, we strive to ensure that our customers are completely satisfied with their purchases. If you are not satisfied with the product you received, our refund and return policy provides comprehensive guidelines to address your concerns. Please read the following information carefully.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Eligibility for Returns
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Our policy lasts 30 days. If 30 days have passed since your purchase, we are unfortunately unable to offer you a refund or exchange. To be eligible for a return, your item must:
          </p>
          <ul className="list-disc ml-6 mt-3 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Be unused and in the same condition that you received it.</li>
            <li>Be in the original packaging.</li>
            <li>Include the receipt or proof of purchase.</li>
          </ul>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Certain products may not be eligible for returns, such as perishable goods, custom orders, or items marked as non-returnable. Please check the product description for return eligibility.
          </p>
        </section>
  
        {/* Conditions for Return */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Conditions for Return
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer. The return of the product will only be accepted under the following conditions:
          </p>
          <ul className="list-disc ml-6 mt-3 text-base sm:text-lg text-gray-700 space-y-2">
            <li>The product is defective or damaged upon arrival.</li>
            <li>Incorrect item was shipped (different model, color, or product).</li>
            <li>The product does not match the description provided on our website.</li>
          </ul>
        </section>
  
        {/* Non-Returnable Items */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Non-Returnable Items
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Certain products are exempt from being returned, including:
          </p>
          <ul className="list-disc ml-6 mt-3 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Gift cards.</li>
            <li>Downloadable software products.</li>
            <li>Some health and personal care items.</li>
            <li>Items on final sale or clearance.</li>
          </ul>
        </section>
  
        {/* Refunds */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Refunds (if applicable)
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mt-3">
            If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
          </p>
          <ul className="list-disc ml-6 mt-3 text-base sm:text-lg text-gray-700 space-y-2">
            <li>Refunds will be processed within 7–14 business days, depending on your payment provider.</li>
            <li>If you paid by credit or debit card, the refund will be credited to the original card used.</li>
            <li>For payments via PayPal, the refund will be sent to your PayPal account.</li>
            <li>We cannot refund any extra charges made by the payment provider (e.g., foreign exchange fees).</li>
          </ul>
        </section>
  
        {/* Late or Missing Refunds */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Late or Missing Refunds (if applicable)
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            If you haven’t received a refund yet, please check your bank account or payment provider again. Then contact your credit card company or bank, as it may take some time before your refund is officially posted.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            If you’ve done all of this and you still have not received your refund, please contact us at <a href="mailto:support@electromart.com" className="text-blue-500">support@electromart.com</a>.
          </p>
        </section>
  
        {/* Sale Items */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Sale Items
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Only regular priced items may be refunded. Unfortunately, sale items cannot be refunded unless they are defective.
          </p>
        </section>
  
        {/* Exchanges */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Exchanges (if applicable)
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:support@electromart.com" className="text-blue-500">support@electromart.com</a> and send your item to our returns address.
          </p>
        </section>
  
        {/* Shipping for Returns */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Shipping for Returns
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            To return your product, you should mail it to: Electro Mart Returns, 1234 Example Street, Dhaka, Bangladesh.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Depending on where you live, the time it may take for your exchanged product to reach you may vary.
          </p>
        </section>
  
        {/* Final Notes */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            If you have any questions about our refund and return policy, please contact us at <a href="mailto:support@electromart.com" className="text-blue-500">support@electromart.com</a>.
          </p>
        </section>
      </div>
    );
};

export default RefundPolicy;