import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { FaChevronDown, FaChevronUp, FaSearch, FaTimes } from "react-icons/fa";
import "./PrivacyPolicy.css";

const privacyData = [
  {
    id: 1,
    title: "Applicability and Scope",
    content: [
      "This Privacy Policy describes:",
      "The types of information Zestbot may collect from you when you access or use our Services.",
      "How we collect, use, maintain, protect, and disclose that information."
    ],
    extraContent: [
      "This policy applies to information collected:",
      "• Through the Zestbot website, mobile application, and related online services.",
      "• Through email, text messages, and other electronic communications sent through or related to the Services.",
      "This policy does not apply to third-party services or platforms that may be linked from our Services. We recommend reviewing their privacy policies separately.",
      "By using our Services or registering an account, you consent to the collection, use, disclosure, and storage of your information as described in this Privacy Policy."
    ]
  },
  {
    id: 2,
    title: "Permissible Age",
    content: [
      "The Services are intended for individuals 18 years of age or older, unless permitted under applicable local laws.",
      "We do not knowingly collect personal information from individuals below the permissible age. If we discover that such information has been collected, we will take steps to delete it."
    ]
  },
  {
    id: 3,
    title: "Information We Collect",
    content: [
      "We may collect the following categories of information:"
    ],
    subsections: [
      {
        title: "3.1 Personal Information",
        text: "Personal information refers to information that identifies or can be used to identify an individual. This may include:",
        items: [
          "Name",
          "Age",
          "Address",
          "Email address",
          "Phone number",
          "Postal code",
          "Date of birth",
          "Gender",
          "Account credentials",
          "Profile details"
        ]
      },
      {
        title: "3.2 Order and Transaction Information",
        text: "When you use our Services to place orders or make purchases, we may collect:",
        items: [
          "Order history",
          "Delivery address",
          "Billing information",
          "Payment details",
          "Purchase preferences",
          "Payment information may be processed through CCAvenue gateway providers."
        ],
        extra: "Zestbot does not store credit or debit card information. Payment processing is handled by secure third-party payment gateway providers that comply with PCI-DSS standards."
      },
      {
        title: "3.3 User Content",
        text: "Information that you provide while using the platform, including:",
        items: [
          "Reviews",
          "Feedback",
          "Support requests",
          "Communications with delivery partners or sellers"
        ]
      },
      {
        title: "3.4 Communications",
        text: "We may collect records of communications between you and:",
        items: [
          "Customer support",
          "Delivery partners",
          "Sellers or service providers"
        ],
        extra: "These communications may be recorded for quality assurance and training purposes."
      }
    ]
  },
  {
    id: 4,
    title: "Information Collected Automatically",
    content: [
      "When you access our Services, we may automatically collect certain information about your device and usage, including:"
    ],
    subsections: [
      {
        title: "Device Information",
        items: [
          "IP address",
          "Device type",
          "Operating system",
          "Browser type",
          "Internet connection details"
        ]
      },
      {
        title: "Usage Information",
        items: [
          "Pages viewed",
          "Time spent on pages",
          "Features used",
          "Search queries",
          "Click activity"
        ]
      },
      {
        title: "Location Information",
        text: "If you enable location services, we may collect your GPS location data to:",
        items: [
          "Provide location-based services",
          "Improve delivery accuracy",
          "Personalize recommendations"
        ]
      },
      {
        title: "Cookies and Tracking Technologies",
        text: "We may use:",
        items: [
          "Cookies",
          "Pixel tags",
          "Web beacons",
          "Mobile device identifiers"
        ],
        extraText: "These help us:",
        extraItems: [
          "Recognize returning users",
          "Save preferences",
          "Improve service performance",
          "Provide personalized advertisements"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Information Collected From Third Parties",
    content: [
      "We may collect information from:",
      "Social media platforms (if you sign in using them)",
      "Marketing partners",
      "Advertising networks",
      "Analytics providers",
      "Surveys, Feedback forms and promotional campaigns",
      "This information may be combined with information collected directly from you."
    ]
  },
  {
    id: 6,
    title: "How We Use Your Information",
    content: [
      "Zestbot may use your information for the following purposes:",
      "Providing personalized features and recommendations",
      "Offer promotions via email, SMS, WhatsApp and push notifications",
      "Providing and operating our Services",
      "Processing orders and transactions",
      "Facilitating deliveries through delivery partners",
      "Facilitating interactions with business partners(restaurants/vendors)",
      "Responding to customer support requests",
      "Improving platform functionality",
      "Detecting fraud or suspicious activity",
      "Conducting marketing research and statistical analytics",
      "Sending service notifications and updates",
      "Complying with legal obligations",
      "We may also anonymize or aggregate data for analytics and research purposes."
    ]
  },
  {
    id: 7,
    title: "Advertisements on the Platform",
    content: [
      "Zestbot may partner with third-party advertising networks and service providers to display advertisements on the Platform. These third parties may use certain non-personal information about your visits to our Platform and other websites or applications in order to provide advertisements that may be relevant to your interests.",
      "The information used for advertising purposes may include data such as:"
    ],
    items: [
      "Device type and identifiers",
      "Browser type and operating system",
      "Pages visited on the Platform",
      "Time spent on pages or interactions with advertisements",
      "General location information",
      "Other anonymous usage statistics"
    ],
    extraContent: [
      "This information does not include personally identifiable information such as your name, address, email address, or telephone number unless explicitly provided by you with your consent.",
      "These advertising partners may use technologies such as cookies, web beacons, mobile advertising identifiers (such as Google Advertising ID – GAID), or similar tracking technologies to collect and process such information for the purpose of delivering targeted advertisements and measuring advertising effectiveness.",
      "You may choose to opt out of personalized advertising by enabling the “Opt Out of Ads Personalization” option available in your mobile device’s settings. Once this option is enabled, your device will limit the use of advertising identifiers for personalized ads. In such cases, Zestbot and its advertising partners will not have access to your advertising identifier (such as GAID) for the purpose of delivering personalized advertisements.",
      "Please note that opting out of personalized advertising will not eliminate advertisements entirely, but the ads you see may be less relevant to your interests.",
      "Zestbot does not control the privacy practices of third-party advertisers and encourages users to review the privacy policies of such third parties for additional information on their data practices."
    ]
  },
  {
    id: 8,
    title: "Marketing and Promotional Communications",
    content: [
      "We may send you communications about:"
    ],
    items: [
      "Offers",
      "Discounts",
      "New features",
      "Promotional campaigns"
    ],
    extraText: "These communications may be sent via:",
    extraItems: [
      "Email",
      "SMS",
      "Push notifications",
      "Phone calls",
      "Messaging applications"
    ],
    footerText: "You may opt out of promotional communications at any time by following the unsubscribe instructions."
  },
  {
    id: 9,
    title: "Sharing of Information",
    content: [
      "We may share your information with:"
    ],
    subsections: [
      {
        title: "9.1 Service Providers",
        text: "Third-party vendors that assist in:",
        items: [
          "Payment processing",
          "Order fulfillment",
          "Delivery services",
          "Marketing services",
          "Analytics services",
          "Customer support"
        ]
      },
      {
        title: "9.2 Sellers and Brands",
        text: "Your information may be shared with sellers to:",
        items: [
          "Process orders",
          "Resolve complaints",
          "Improve product quality"
        ]
      },
      {
        title: "9.3 Corporate Affiliates",
        text: "Entities that are part of the Zestbot corporate group or affiliates."
      },
      {
        title: "9.4 Legal Authorities",
        text: "We may disclose information if required to:",
        items: [
          "Comply with applicable laws",
          "Respond to legal processes",
          "Prevent fraud or illegal activity",
          "Protect the rights and safety of users"
        ]
      },
      {
        title: "9.5. Business Transfers",
        text: "In the event of a merger, acquisition, restructuring, or sale of assets, user information may be transferred as part of the business assets."
      }
    ]
  },
  {
    id: 10,
    title: "Data Security",
    content: [
      "We implement appropriate technical, administrative, and physical safeguards to protect your information from:"
    ],
    items: [
      "Unauthorized access",
      "Data loss",
      "Misuse",
      "Alteration"
    ],
    extraContent: [
      "Payment transactions are processed through secure and CCAvenue payment gateways.",
      "However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      "Users are responsible for maintaining the confidentiality of their account credentials."
    ]
  },
  {
    id: 11,
    title: "Data Retention",
    content: [
      "Zestbot will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including providing our Services, complying with legal obligations, resolving disputes, enforcing agreements, and maintaining security of the Platform.",
      "The retention period may vary depending on the type of information and the purpose for which it was collected. For example:"
    ],
    items: [
      "Account information may be retained for as long as your account remains active.",
      "Transaction and order information may be retained for accounting, tax, and regulatory compliance purposes.",
      "Communication records may be retained for customer support, training, and dispute resolution."
    ],
    extraContent: [
      "If you request deletion of your account, we will take reasonable steps to delete or anonymize your personal information. However, certain information may be retained in backup systems or records where required by law, for fraud prevention, dispute resolution, or to enforce our legal agreements."
    ]
  },
  {
    id: 12,
    title: "Cross-Border Data Transfers",
    content: [
      "Your information may be transferred to, stored, and processed in locations outside your state, province, or country where Zestbot or its service providers operate.",
      "These locations may have data protection laws that differ from those in your jurisdiction. By using our Services and submitting your personal information, you consent to the transfer, storage, and processing of your information in such jurisdictions in accordance with this Privacy Policy.",
      "Zestbot takes reasonable steps to ensure that any such cross-border data transfers comply with applicable data protection laws and that appropriate safeguards are implemented to protect your personal information."
    ]
  },
  {
    id: 13,
    title: "Your Rights",
    content: [
      "Subject to applicable laws, you may have the right to:"
    ],
    items: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your account",
      "Withdraw consent for marketing communications"
    ],
    extraContent: [
      "To exercise these rights, please contact us through the details provided below."
    ]
  },
  {
    id: 14,
    title: "Account Deletion",
    content: [
      "If you wish to delete your Zestbot account, you may submit a request through the Contact Us section of the platform.",
      "Once deleted:",
      "Your account cannot be restored",
      "Some information may remain in backup storage for legal or regulatory purposes."
    ]
  },
  {
    id: 15,
    title: "Third-Party Links",
    content: [
      "Our Services may contain links to third-party websites or services.",
      "Zestbot is not responsible for the privacy practices of such third-party platforms. We recommend reviewing their privacy policies before sharing personal information."
    ]
  },
  {
    id: 16,
    title: "Policy Updates",
    content: [
      "Zestbot may update or modify this Privacy Policy from time to time to reflect:",
      "Changes in laws",
      "Changes in business practices",
      "Updates to platform features",
      "Any updates will be posted on the platform. Continued use of the Services after updates constitutes acceptance of the revised policy."
    ]
  },
  {
    id: 17,
    title: "Contact Us",
    content: [
      "If you have questions regarding this Privacy Policy or the handling of your personal information, please contact:",
      "Zestbot – Data Protection Officer",
      "Email: info@zestbot.in"
    ]
  }
];

const PrivacyPolicy = ({ isModal = false, isOpen = true, onClose = () => {} }) => {
  const [activeSections, setActiveSections] = useState([1]);
  const [search, setSearch] = useState("");
  const overlayRef = useRef(null);

  const filteredPrivacy = useMemo(() => {
    if (!search.trim()) return privacyData;
    const lowerSearch = search.toLowerCase();
    return privacyData.filter((item) => {
      if (item.title && item.title.toLowerCase().includes(lowerSearch)) return true;
      if (item.content && item.content.some((text) => text.toLowerCase().includes(lowerSearch))) return true;
      if (item.items && item.items.some((it) => it.toLowerCase().includes(lowerSearch))) return true;
      if (item.extraContent && item.extraContent.some((text) => text.toLowerCase().includes(lowerSearch))) return true;
      if (item.extraText && item.extraText.toLowerCase().includes(lowerSearch)) return true;
      if (item.extraItems && item.extraItems.some((it) => it.toLowerCase().includes(lowerSearch))) return true;
      if (item.footerText && item.footerText.toLowerCase().includes(lowerSearch)) return true;
      if (item.subsections && item.subsections.some((sub) => 
        (sub.title && sub.title.toLowerCase().includes(lowerSearch)) ||
        (sub.text && sub.text.toLowerCase().includes(lowerSearch)) ||
        (sub.items && sub.items.some((it) => it.toLowerCase().includes(lowerSearch))) ||
        (sub.extra && sub.extra.toLowerCase().includes(lowerSearch)) ||
        (sub.extraText && sub.extraText.toLowerCase().includes(lowerSearch)) ||
        (sub.extraItems && sub.extraItems.some((it) => it.toLowerCase().includes(lowerSearch)))
      )) return true;
      return false;
    });
  }, [search]);

  const toggleSection = (id) => {
    if (activeSections.includes(id)) {
      setActiveSections(activeSections.filter((item) => item !== id));
    } else {
      setActiveSections([...activeSections, id]);
    }
  };

  const expandAll = () => setActiveSections(privacyData.map((item) => item.id));
  const collapseAll = () => setActiveSections([]);

  useEffect(() => {
    if (!isModal || !isOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isModal, isOpen, onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  const content = (
    <>
      {!isModal && (
        <div className="privacy-hero">
          <h1 className="privacy-hero-title">Privacy Policy – Zestbot</h1>
          <p className="privacy-hero-subtitle">
            DHATVI BUSINESS SOLUTIONS PRIVATE LIMITED (“Company”, “we”, “us”, or “our”) is committed to protecting the privacy and security of your personal information. Your privacy is important to us, and maintaining your trust is paramount.
          </p>
          <p className="privacy-hero-subtitle">
            This Privacy Policy explains how we collect, use, process, store, and disclose information about you when you use our website, mobile application, or any services provided through our platform (collectively referred to as the “Services”).
          </p>
          <p className="privacy-hero-subtitle">
            By accessing or using Zestbot’s Services, you agree to the terms of this Privacy Policy in addition to our Terms of Use. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
          <p className="privacy-hero-contact">
            If you have any questions regarding this Privacy Policy, please contact us at: <a href="mailto:info@zestbot.in">info@zestbot.in</a>
          </p>
        </div>
      )}

      {isModal && (
        <div className="privacy-intro-box">
          <p>
            DHATVI BUSINESS SOLUTIONS PRIVATE LIMITED (“Company”, “we”, “us”, or “our”) is committed to protecting the privacy and security of your personal information. Your privacy is important to us, and maintaining your trust is paramount.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, store, and disclose information about you when you use our website, mobile application, or any services provided through our platform (collectively referred to as the “Services”).
          </p>
          <p>
            By accessing or using Zestbot’s Services, you agree to the terms of this Privacy Policy in addition to our Terms of Use. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
          <p className="privacy-intro-contact">
            If you have any questions regarding this Privacy Policy, please contact us at: <a href="mailto:info@zestbot.in">info@zestbot.in</a>
          </p>
        </div>
      )}

      <div className="privacy-toolbar">
        <div className="privacy-search">
          <FaSearch className="privacy-search-icon" />
          <input
            type="text"
            className="privacy-search-input"
            placeholder="Search privacy policy..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="privacy-search-clear" onClick={() => setSearch("")} aria-label="Clear search">
              <FaTimes />
            </button>
          )}
        </div>

        <div className="privacy-actions">
          <button className="privacy-btn privacy-btn-primary" onClick={expandAll}>Expand All</button>
          <button className="privacy-btn privacy-btn-ghost" onClick={collapseAll}>Collapse All</button>
        </div>
      </div>

      <div className="privacy-list">
        {filteredPrivacy.length === 0 && (
          <div className="privacy-empty">No matching clauses found.</div>
        )}

        {filteredPrivacy.map((item) => {
          const isOpenItem = search.trim() !== "" ? true : activeSections.includes(item.id);
          return (
            <div key={item.id} className={`privacy-item ${isOpenItem ? "is-open" : ""}`}>
              <button
                type="button"
                className="privacy-item-header"
                onClick={() => toggleSection(item.id)}
                aria-expanded={isOpenItem}
              >
                <span className="privacy-item-title">
                  <span className="privacy-item-number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  {item.title}
                </span>
                {isOpenItem ? <FaChevronUp className="privacy-chevron" /> : <FaChevronDown className="privacy-chevron" />}
              </button>

              <div className="privacy-item-body">
                <div className="privacy-item-content">
                  {item.content && item.content.map((point, index) => (
                    <p key={index} className="privacy-paragraph">{point}</p>
                  ))}

                  {/* Rendering Subsections (e.g. 3.1, 3.2, etc.) */}
                  {item.subsections && (
                    <div className="privacy-subsections">
                      {item.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="privacy-subsection-card">
                          <h4 className="privacy-sub-title">{sub.title}</h4>
                          {sub.text && <p className="privacy-paragraph">{sub.text}</p>}
                          {sub.items && (
                            <ul className="privacy-bullet-list">
                              {sub.items.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                          {sub.extra && <p className="privacy-paragraph privacy-extra-note">{sub.extra}</p>}
                          {sub.extraText && <p className="privacy-paragraph">{sub.extraText}</p>}
                          {sub.extraItems && (
                            <ul className="privacy-bullet-list">
                              {sub.extraItems.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Rendering simple list items */}
                  {item.items && (
                    <ul className="privacy-bullet-list">
                      {item.items.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {/* Rendering supplementary extra list/text items */}
                  {item.extraText && <p className="privacy-paragraph">{item.extraText}</p>}
                  {item.extraItems && (
                    <ul className="privacy-bullet-list">
                      {item.extraItems.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {item.extraContent && item.extraContent.map((point, index) => (
                    <p key={index} className="privacy-paragraph">{point}</p>
                  ))}

                  {item.footerText && <p className="privacy-paragraph privacy-footer-note">{item.footerText}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div
        ref={overlayRef}
        className="privacy-overlay"
        onMouseDown={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <div className="privacy-modal">
          <div className="privacy-modal-header">
            <div>
              <h2 id="privacy-modal-title" className="privacy-modal-title">Privacy Policy</h2>
              <p className="privacy-modal-subtitle">Zestbot Privacy & Security Protection</p>
            </div>
            <button type="button" className="privacy-close-btn" onClick={onClose} aria-label="Close">
              <FaTimes />
            </button>
          </div>
          <div className="privacy-modal-body">{content}</div>
        </div>
      </div>
    );
  }

  return <div className="privacy-page">{content}</div>;
};

export default PrivacyPolicy;
