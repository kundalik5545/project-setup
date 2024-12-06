import React from "react";

function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        Terms and Conditions of Use
      </h2>

      <p className="mb-4">
        Welcome to{" "}
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {import.meta.env.VITE_WEBSITE_NAME}
        </span>
        . By accessing and using our bank application, you agree to the
        following terms and conditions. Please read them carefully.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h3>
      <p className="mb-4">
        By creating an account and using our services, you agree to be bound by
        these Terms and Conditions, as well as any policies referenced herein.
        If you do not agree with any part of these terms, please refrain from
        using our services.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2. Account Registration and Security
      </h3>
      <p className="mb-4">
        You are required to provide accurate, current, and complete information
        during registration and to update your information as necessary. You are
        responsible for maintaining the confidentiality of your account and
        password and agree to notify us immediately of any unauthorized access
        or security breach.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        3. Use of Our Services
      </h3>
      <p className="mb-4">
        Our bank application is provided solely for your personal use in
        managing your financial accounts. You agree not to use the services for
        any unlawful or prohibited purposes, and you will not engage in any
        activity that disrupts the functioning of the application.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Fees and Charges</h3>
      <p className="mb-4">
        Certain services may be subject to fees, which will be disclosed prior
        to service use. You agree to pay any applicable fees and charges and
        understand that failure to do so may result in suspension or termination
        of your account.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        5. Intellectual Property
      </h3>
      <p className="mb-4">
        All content, including text, images, and software, is the property of{" "}
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {import.meta.env.VITE_WEBSITE_NAME}
        </span>{" "}
        or its licensors. You may not copy, modify, or distribute any part of
        the application without our prior written permission.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        6. Limitation of Liability
      </h3>
      <p className="mb-4">
        To the fullest extent permitted by law,{" "}
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {import.meta.env.VITE_WEBSITE_NAME}
        </span>{" "}
        is not liable for any direct, indirect, incidental, or consequential
        damages arising from the use or inability to use our services. This
        limitation applies even if we have been advised of the possibility of
        such damages.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        7. Termination of Account
      </h3>
      <p className="mb-4">
        We reserve the right to terminate or suspend your account without notice
        if you breach any of these terms, or if we deem it necessary for
        security or operational reasons. Upon termination, your right to access
        our services will cease immediately.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h3>
      <p className="mb-4">
        We may update these Terms and Conditions from time to time to reflect
        changes in our practices or legal requirements. Any changes will be
        posted on this page, and we encourage you to review these terms
        periodically.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h3>
      <p className="mb-4">
        These terms are governed by and construed in accordance with the laws of
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {" "}
          {import.meta.env.VITE_WEBSITE_Jurisdiction}
        </span>
        . Any disputes arising from or related to these terms will be subject to
        the exclusive jurisdiction of the courts of{" "}
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {" "}
          {import.meta.env.VITE_WEBSITE_Jurisdiction}
        </span>
        .
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h3>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at{" "}
        <span className="underline text-blue-600 font-inter font-semibold">
          {import.meta.env.VITE_WEBSITE_EMAIL}
        </span>
        .
      </p>

      <p className="text-sm text-gray-600 mt-6">Last updated: [Date]</p>
    </div>
  );
}

export default TermsAndConditions;
