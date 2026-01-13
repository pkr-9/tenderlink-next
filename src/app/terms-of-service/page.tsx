// src/pages/TermsOfServicePage.tsx

const TermsOfServicePage = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-slide-up">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: November 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you")
              and TenderLink ("we," "our," "us"), concerning your access to and
              use of the tenderlink.tech website as well as any other media
              form, media channel, mobile website or mobile application related,
              linked, or otherwise connected thereto (collectively, the "Site").
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks,
              and logos contained therein (the "Marks") are owned or controlled
              by us or licensed to us.
            </p>

            <h2>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>
                All information you submit (e.g., via contact form) is truthful
                and accurate.
              </li>
              <li>
                You will not use the Site for any illegal or unauthorized
                purpose.
              </li>
              <li>
                Your use of the Site will not violate any applicable law or
                regulation.
              </li>
            </ul>

            <h2>4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of
              India. TenderLink and yourself irrevocably consent that the courts
              of Mumbai, India shall have exclusive jurisdiction to resolve any
              dispute which may arise in connection with these terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
