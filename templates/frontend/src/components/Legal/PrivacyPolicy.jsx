import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 font-inter">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Privacy Policy</h2>

      <p className="mb-4">
        Your privacy is important to us at
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {" "}
          {import.meta.env.VITE_WEBSITE_NAME}
        </span>
        . This Privacy Policy describes how we collect, use, and protect your
        personal and financial data when you use our services through our bank
        application. By using our application, you agree to the terms of this
        policy.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h3>
      <p className="mb-4">
        We collect personal and financial information necessary to provide you
        with banking services, including but not limited to:
      </p>
      <ul className="list-none pl-6 mb-4">
        <li>
          👉 Personal identification information, such as name, address, date of
          birth, and contact details.
        </li>
        <li>
          👉 Financial information, including account balances, transaction
          history, and payment details.
        </li>
        <li>
          👉 Technical information, such as IP address, device information, and
          usage data, to improve our services.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h3>
      <p className="mb-4">
        The information we collect is used to provide, personalize, and improve
        our banking services. This includes:
      </p>
      <ul className="list-none pl-6 mb-4">
        <li>👉 Processing transactions and managing your account.</li>
        <li>👉 Providing customer support and addressing your inquiries.</li>
        <li>
          👉 Complying with legal obligations and regulatory requirements.
        </li>
        <li>👉 Conducting data analysis and enhancing security measures.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing Your Information
      </h3>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We
        may share your information only in the following circumstances:
      </p>
      <ul className="list-none pl-6 mb-4">
        <li>
          👉 With service providers and partners who assist us in operating and
          maintaining our services.
        </li>
        <li>
          👉 With government authorities and law enforcement when required by
          law.
        </li>
        <li>
          👉 In connection with corporate transactions, such as mergers or
          acquisitions.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        4. Security of Your Information
      </h3>
      <p className="mb-4">
        We prioritize the security of your data and implement measures to
        protect it from unauthorized access, alteration, or disclosure. However,
        no method of transmission over the internet or electronic storage is
        100% secure, and we cannot guarantee absolute security.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        5. Your Rights and Choices
      </h3>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information as required by applicable law. You may also opt out of
        certain data collection practices by adjusting your account settings.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        6. Changes to Our Privacy Policy
      </h3>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. Any changes will be posted on
        this page, and we encourage you to review this policy periodically.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h3>
      <p className="mb-4">
        If you have any questions or concerns about our Privacy Policy, please
        contact us at
        <span className="underline text-blue-600 font-inter font-semibold">
          {" "}
          {import.meta.env.VITE_WEBSITE_EMAIL}
        </span>
        .
      </p>

      <p className="text-sm text-gray-600 mt-6">Last updated: [06/Nov/2024]</p>
    </div>
  );
}

export default PrivacyPolicy;
