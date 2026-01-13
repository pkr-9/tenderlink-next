const PrivacyPolicyPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-slide-up">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: November 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to TenderLink ("we," "our," "us"). We are committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website tenderlink.tech.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personally identifiable
                information, such as your name, email address, and telephone
                number, that you voluntarily give to us when you fill out a
                contact form.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers
                automatically collect when you access the Site, such as your IP
                address, your browser type, your operating system, your access
                times, and the pages you have viewed directly before and after
                accessing the Site.
              </li>
            </ul>

            <h2>3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Respond to your inquiries and offer support.</li>
              <li>Email you regarding our services.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience.
              </li>
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at: info@tenderlink.tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
