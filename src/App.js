import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
    setCurrentYear(date.getFullYear());

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all policy sections
    const sections = document.querySelectorAll('.policy-section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    // Observe intro and table of contents
    const intro = document.querySelector('.intro');
    const toc = document.querySelector('.table-of-contents');
    if (intro) observer.observe(intro);
    if (toc) observer.observe(toc);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      id: 'section-0',
      title: '1. Information We Collect',
      content: (
        <>
          <h3>Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, username, and profile information you provide</li>
            <li><strong>Contact Information:</strong> Phone number, mailing address (if provided)</li>
            <li><strong>Payment Information:</strong> Payment details processed through secure third-party payment processors</li>
            <li><strong>Profile Data:</strong> Avatar, bio, preferences, and other information you choose to share</li>
          </ul>
          <h3>Automatically Collected Information</h3>
          <p>We may automatically collect certain technical information when you use our app:</p>
          <ul>
            <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
            <li><strong>Usage Data:</strong> Features used, time spent, actions performed within the app</li>
            <li><strong>Log Data:</strong> IP address, browser type, access times, and referring website addresses</li>
            <li><strong>Location Data:</strong> Approximate location based on IP address (with your consent where required)</li>
          </ul>
        </>
      )
    },
    {
      id: 'section-1',
      title: '2. How We Use Your Information',
      content: (
        <>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Service Provision:</strong> To provide, maintain, and improve our application and services</li>
            <li><strong>Account Management:</strong> To create and manage your account, authenticate your identity</li>
            <li><strong>Communication:</strong> To send you important updates, security alerts, and support messages</li>
            <li><strong>Personalization:</strong> To customize your experience and provide relevant content</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and improve our app's performance and features</li>
            <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
          </ul>
        </>
      )
    },
    {
      id: 'section-2',
      title: '3. Information Sharing',
      content: (
        <>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party companies that perform services on our behalf (e.g., hosting, analytics, payment processing)</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, financing, or acquisition of all or a portion of our business</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights, property, or safety</li>
            <li><strong>With Your Consent:</strong> When you explicitly consent to sharing for specific purposes</li>
          </ul>
          <p className="note"><strong>Note:</strong> We do not sell your personal information to third parties for their marketing purposes.</p>
        </>
      )
    },
    {
      id: 'section-3',
      title: '4. Data Security',
      content: (
        <>
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using modern encryption protocols</li>
            <li><strong>Access Controls:</strong> Strict access controls and authentication for our systems</li>
            <li><strong>Regular Audits:</strong> Regular security reviews and vulnerability assessments</li>
            <li><strong>Secure Storage:</strong> Your data is stored in secure, SOC-compliant data centers</li>
          </ul>
          <p className="warning">While we take reasonable measures to protect your information, no method of transmission over the internet is 100% secure.</p>
        </>
      )
    },
    {
      id: 'section-4',
      title: '5. Cookies & Tracking Technologies',
      content: (
        <>
          <p>We use cookies and similar tracking technologies to collect and track information:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic functionality and security</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our app</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect app functionality.</p>
        </>
      )
    },
    {
      id: 'section-5',
      title: '6. Your Rights',
      content: (
        <>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Objection:</strong> Object to processing of your personal data</li>
            <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the Contact section.</p>
        </>
      )
    },
    {
      id: 'section-6',
      title: '7. Third-Party Services',
      content: (
        <>
          <p>Our application may integrate with third-party services. These services have their own privacy policies:</p>
          <ul>
            <li><strong>Analytics Services:</strong> Google Analytics, Mixpanel, or similar (for usage insights)</li>
            <li><strong>Authentication:</strong> OAuth providers (Google, Facebook, Apple, etc.)</li>
            <li><strong>Payment Processors:</strong> Stripe, PayPal, or other payment services</li>
            <li><strong>Cloud Services:</strong> AWS, Google Cloud, Azure, or similar infrastructure providers</li>
          </ul>
          <p>We encourage you to review the privacy policies of these third-party services.</p>
        </>
      )
    },
    {
      id: 'section-7',
      title: '8. Children\'s Privacy',
      content: (
        <>
          <p>Our application is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
          <p>If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information.</p>
        </>
      )
    },
    {
      id: 'section-8',
      title: '9. International Data Transfers',
      content: (
        <>
          <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information, we ensure appropriate safeguards are in place to protect your privacy and rights.</p>
        </>
      )
    },
    {
      id: 'section-9',
      title: '10. Changes to This Policy',
      content: (
        <>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes by:</p>
          <ul>
            <li>Posting the new policy on this page</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending you an email or in-app notification (for significant changes)</li>
          </ul>
          <p>Your continued use of our application after the effective date of the revised policy constitutes your acceptance of the changes.</p>
        </>
      )
    },
    {
      id: 'section-10',
      title: '11. Contact Us',
      content: (
        <>
          <p>If you have any questions, concerns, or requests regarding this privacy policy or your personal information, please contact us:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:asifhasan10122000@gmail.com">asifhasan10122000@gmail.com</a></p>
            <p><strong>Address:</strong><br />Asivision</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: {currentDate}</p>
          </div>
        </header>

        <main className="main-content">
          <section className="intro">
            <p>
              This Privacy Policy describes how this application ("we", "our", or "us") collects, uses, and protects your personal information. By using our application, you agree to the terms of this policy.
            </p>
          </section>

          <nav className="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <button onClick={() => scrollToSection(section.id)} className="toc-link">
                    {section.title.replace(/^\d+\.\s/, '')}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="policy-sections">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="policy-section">
                <div className="section-header">
                  <h2>{section.title}</h2>
                </div>
                <div className="section-content">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </main>

        <footer className="footer">
          <div className="license-section">
            <h3>MIT License</h3>
            <p className="license-text">
              Copyright © {currentYear} Asivision
            </p>
            <p className="license-text">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            </p>
            <p className="license-text">
              The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            </p>
            <p className="license-text">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
          <p className="footer-note">This privacy policy template is provided under the MIT License and can be freely modified and used for any application.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
