import React, { useMemo, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import "./TermsConditions.css";
 
const termsData = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content: [
      "These Terms & Conditions constitute a legally binding electronic agreement between Dhatvi Business Solutions Private Limited (ZestBot) and all Users, Customers, Vendors, and Merchants.",
      "By accessing, registering, or using the ZestBot platform, you agree to be bound by these Terms.",
      "If you do not agree with these Terms, you must not use the Platform."
    ],
  },
 
  {
    id: 2,
    title: "Nature of Platform",
    content: [
      "ZestBot operates as a technology-enabled marketplace acting only as an intermediary.",
      "The Platform connects Customers, Vendors, and Delivery Partners.",
      "ZestBot does not own inventory or sell products directly."
    ],
  },
 
  {
    id: 3,
    title: "Definitions",
    content: [
      "Platform means the ZestBot website and mobile application.",
      "Customer means a person placing an order.",
      "Vendor means a registered seller.",
      "Order means a purchase request placed through the Platform."
    ],
  },
 
  {
    id: 4,
    title: "Eligibility",
    content: [
      "Users must be at least 18 years old.",
      "Users must be legally competent to enter into a binding agreement.",
      "Vendors must possess all applicable registrations and licenses."
    ],
  },
 
  {
    id: 5,
    title: "User Account & Security",
    content: [
      "Users must provide accurate information.",
      "Users are responsible for maintaining account confidentiality.",
      "Any unauthorized account activity should be reported immediately."
    ],
  },
 
  {
    id: 6,
    title: "Services Offered",
    content: [
      "Marketplace listing and discovery.",
      "Vendor subscription services.",
      "Payment facilitation.",
      "Logistics support where applicable.",
      "Marketing and promotional services."
    ],
  },
 
  {
    id: 7,
    title: "Vendor Obligations",
    content: [
      "Comply with all applicable laws.",
      "Ensure product authenticity and quality.",
      "Provide accurate product information.",
      "Fulfill confirmed orders promptly."
    ],
  },
 
  {
    id: 8,
    title: "Subscription Model",
    content: [
      "Vendors may subscribe to available membership plans.",
      "Subscription benefits depend on the selected plan.",
      "Subscription fees are non-refundable."
    ],
  },
 
  {
    id: 9,
    title: "Product Listings & Content",
    content: [
      "Vendors are responsible for all uploaded content.",
      "The Company may remove listings that violate policies.",
      "Uploaded content may be used to operate and promote the Platform."
    ],
  },
 
  {
    id: 10,
    title: "Order Process & Contract Formation",
    content: [
      "Orders placed by Customers constitute an offer to purchase.",
      "A contract is formed only after Vendor acceptance.",
      "The Platform acts only as an intermediary."
    ],
  },
 
  {
  id: 11,
  title: "Payment Terms",
  content: [
    "Payments can be made through UPI, Debit/Credit Cards, Net Banking, Digital Wallets, and other supported methods.",
    "All payments are processed through authorized third-party payment gateways.",
    "Vendor settlements are processed as per the Platform settlement cycle after successful order completion.",
    "The Platform may deduct applicable commissions, taxes, refunds, chargebacks, and penalties before settlement."
  ],
},
 
{
  id: 12,
  title: "Shipping & Delivery",
  content: [
    "Vendors are responsible for packaging, dispatch, and timely fulfillment of orders.",
    "The Platform may facilitate logistics through third-party partners.",
    "Delivery timelines may vary depending on location and operational conditions."
  ],
},
 
{
  id: 13,
  title: "Returns, Refunds & Cancellations",
  content: [
    "Returns and refunds are governed by the Platform's Return Policy.",
    "Eligible refunds will be processed through the original payment method.",
    "Vendors are responsible for accepting valid return requests."
  ],
},
 
{
  id: 14,
  title: "Customer Obligations",
  content: [
    "Customers must provide accurate and up-to-date information.",
    "Customers must use the Platform only for lawful purposes.",
    "Fraudulent, abusive, or deceptive activities are strictly prohibited."
  ],
},
 
{
  id: 15,
  title: "Prohibited Activities",
  content: [
    "Users shall not list or sell illegal, counterfeit, or restricted products.",
    "Users shall not violate intellectual property rights.",
    "Users shall not attempt unauthorized access to the Platform."
  ],
},
 
{
  id: 16,
  title: "Intellectual Property",
  content: [
    "All Platform software, trademarks, logos, designs, and content belong to the Company or its licensors.",
    "Users may not copy, reproduce, or distribute Platform content without authorization."
  ],
},
 
{
  id: 17,
  title: "Data Protection",
  content: [
    "Personal data is processed in accordance with applicable Indian laws.",
    "User information is collected for service delivery, payment processing, customer support, and legal compliance."
  ],
},
 
{
  id: 18,
  title: "Limitation of Liability",
  content: [
    "The Company is not responsible for product quality, defects, or Vendor performance.",
    "Maximum liability is limited to the amount paid by the Customer for the relevant transaction."
  ],
},
 
{
  id: 19,
  title: "Indemnity",
  content: [
    "Users agree to indemnify the Company against claims arising from misuse of the Platform, policy violations, fraud, or legal non-compliance."
  ],
},
 
{
  id: 20,
  title: "Termination",
  content: [
    "The Company may suspend or terminate accounts for fraud, policy violations, or legal non-compliance.",
    "Users may discontinue use of the Platform at any time."
  ],
},
 
{
  id: 21,
  title: "Communication",
  content: [
    "Users agree to receive communications through Email, SMS, and in-app notifications regarding transactions, services, and promotional updates."
  ],
},
 
{
  id: 22,
  title: "Grievance Redressal",
  content: [
    "Grievances may be submitted to the Company's Grievance Officer.",
    "Complaints will generally be acknowledged within 48 hours and resolved within 30 days."
  ],
},
 
{
  id: 23,
  title: "Limitation of Claims",
  content: [
    "Claims relating to Platform usage must be initiated within the applicable limitation period described in these Terms."
  ],
},
 
{
  id: 24,
  title: "Governing Law & Jurisdiction",
  content: [
    "These Terms are governed by the laws of India.",
    "Courts located in Hyderabad shall have jurisdiction, subject to applicable dispute resolution provisions."
  ],
},
 
{
  id: 25,
  title: "Dispute Resolution",
  content: [
    "Disputes should first be resolved through mutual discussion.",
    "Unresolved disputes may be referred to arbitration in accordance with applicable law."
  ],
},
 
{
  id: 26,
  title: "Force Majeure",
  content: [
    "The Company shall not be liable for delays or failures caused by events beyond its reasonable control, including natural disasters, government actions, network failures, or cyber incidents."
  ],
},
 
{
  id: 27,
  title: "Amendments",
  content: [
    "The Company may update these Terms from time to time.",
    "Continued use of the Platform after updates constitutes acceptance of the revised Terms."
  ],
},
 
{
  id: 28,
  title: "Electronic Consent",
  content: [
    "By using the Platform or clicking 'I Agree', you provide legally binding electronic consent to these Terms."
  ],
},
 
{
  id: 29,
  title: "Contact Details",
  content: [
    "Dhatvi Business Solutions Private Limited",
    "Email: info@dhatvibs.com",
    "Address: 1st Floor, Street No.7, PB House, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana - 500081"
  ],
},
];
 
const TermsConditions = () => {
  const [activeSections, setActiveSections] = useState([1]);
  const [search, setSearch] = useState("");
 
  const filteredTerms = useMemo(() => {
    return termsData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
 
  const toggleSection = (id) => {
    if (activeSections.includes(id)) {
      setActiveSections(activeSections.filter((item) => item !== id));
    } else {
      setActiveSections([...activeSections, id]);
    }
  };
 
  const expandAll = () => {
    setActiveSections(termsData.map((item) => item.id));
  };
 
  const collapseAll = () => {
    setActiveSections([]);
  };
 
  return (
    <section className="terms-page">
 
      <div className="terms-hero">
 
        <span className="terms-tag">
          Terms & Conditions
        </span>
 
        <h1>
          Terms & Conditions
        </h1>
 
        <p>
          Please read these Terms & Conditions carefully before using the
          ZestBot platform. These terms govern your use of our services
          and ensure a safe experience for all users.
        </p>
 
        <div className="terms-updated">
          Last Updated : July 2026
        </div>
 
      </div>
 
      <div className="terms-toolbar">
 
        <div className="terms-search">
 
          <FaSearch />
 
          <input
            type="text"
            placeholder="Search Terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
 
        </div>
 
        <div className="terms-buttons">
 
          <button onClick={expandAll}>
            Expand All
          </button>
 
          <button onClick={collapseAll}>
            Collapse All
          </button>
 
        </div>
 
      </div>
 
      <div className="terms-list">
 
        {filteredTerms.map((item) => {
 
          const isOpen = activeSections.includes(item.id);
 
          return (
 
            <div
              key={item.id}
              className={`terms-card ${isOpen ? "active" : ""}`}
            >
 
              <button
                className="terms-header"
                onClick={() => toggleSection(item.id)}
              >
 
                <span>
                  {item.id}. {item.title}
                </span>
 
                {isOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
 
              </button>
 
              <div
                className={`terms-content ${
                  isOpen ? "show" : ""
                }`}
              >
 
                <ul>
 
                  {item.content.map((point, index) => (
 
                    <li key={index}>
                      {point}
                    </li>
 
                  ))}
 
                </ul>
 
              </div>
 
            </div>
 
          );
 
        })}
 
      </div>
 
    </section>
  );
};
 
export default TermsConditions;