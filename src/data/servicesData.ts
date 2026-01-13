import {
    Bell,
    Brain,
    FileText,
    ShieldCheck,
    FolderOpen,
    LineChart,
    Handshake,
    Scale,
} from "lucide-react";

type Stat = { label: string; value: string };
type FAQ = { q: string; a: string };
type ProcessStep = { title: string; desc: string };
type PricingTier = {
    name: string;
    price: string;
    subtitle?: string;
    bullets: string[];
    recommended?: boolean;
    href?: string;
};
type ExampleMatch = {
    title: string;
    summary?: string;
    value: string;
    dept: string;
    location: string;
    deadline: string;
    url?: string;
};
type CaseStudy = {
    title: string;
    summary: string;
    challenge: string;
    solution: string;
    metrics: Stat[];
};
type Resource = { label: string; href: string };

export const servicesData = {
    "tender-alerts": {
        title: "Real-Time Tender Alerts",
        icon: Bell,
        summary:
            "Instant notifications via WhatsApp, Email, and SMS for tenders matching your specific criteria.",
        heroImage: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
        description:
            "Never miss a deadline again. Get instant, personalized notifications via WhatsApp, Email, and SMS for new tenders that strictly match your criteria. Our automated system monitors 100+ government and private sources daily.",
        tags: ["Discovery", "Alerts", "WhatsApp", "Email", "Deadline", "GeM"],
        trustBadges: ["Near real-time updates", "Multi-channel alerts", "Source coverage"],
        idealFor: [
            "SMEs that miss deadlines due to late discovery",
            "Companies tracking multiple states/departments",
            "Teams that want daily digest + instant alerts",
        ],
        outcomes: [
            "Discover relevant tenders faster",
            "Reduce manual search time",
            "Avoid missed deadlines and last-minute submissions",
        ],
        painPoints: [
            "Missing critical deadlines due to delayed information.",
            "Wasting hours manually checking dozens of websites daily.",
            "Receiving irrelevant alerts that clutter your inbox.",
            "Portal updates or corrigendums not noticed in time.",
        ],
        statistics: [
            { label: "Daily Alerts", value: "50,000+" },
            { label: "Accuracy", value: "99.8%" },
            { label: "Sources", value: "120+" },
        ] as Stat[],
        requiredDocuments: [
            "Company Profile Registration",
            "Valid Email ID & Phone Number",
            "Preferred Category Selection",
        ],
        features: [
            "Multi-Channel Alerts: WhatsApp, Email, SMS, and Mobile App push notifications.",
            "Keyword Filtering: Alerts based on keywords, locations, departments, and tender values.",
            "Daily Digest: A consolidated morning report of all relevant opportunities.",
            "Corrigendum Tracking: Updates when amendments/clarifications are posted.",
            "Deadline Reminders: Automated reminders before closing time.",
        ],
        deliverables: [
            "Configured alert profile (sector/location/value)",
            "Instant alerts + daily digest",
            "Corrigendum + deadline reminder notifications",
            "Monthly discovery report (optional)",
        ],
        process: [
            { title: "Define Criteria", desc: "Set sector, location, keywords, and tender value range." },
            { title: "Source Monitoring", desc: "We scan 100+ sources frequently to detect new tenders." },
            { title: "Instant Alerting", desc: "You receive alerts when a match is found." },
            { title: "Refine & Optimize", desc: "We tune keywords and filters to improve relevance." },
        ] as ProcessStep[],
        exampleMatches: [
            {
                title: "Annual Rate Contract for Office Stationery",
                summary: "Category-based tender suitable for SMEs",
                value: "₹ 18 Lakh",
                dept: "Education Department",
                location: "Karnataka",
                deadline: "2026-02-10",
                url: "#",
            },
            {
                title: "Civil Maintenance Works – Cluster 2",
                summary: "Multi-location maintenance tender",
                value: "₹ 62 Lakh",
                dept: "Public Works",
                location: "Maharashtra",
                deadline: "2026-02-17",
                url: "#",
            },
            {
                title: "Supply of IT Peripherals",
                value: "₹ 24 Lakh",
                dept: "Municipal Corporation",
                location: "Telangana",
                deadline: "2026-02-22",
                url: "#",
            },
        ] as ExampleMatch[],
        caseStudy: {
            title: "SME reduced tender discovery time by 60%",
            summary:
                "A small contractor switched from manual browsing to personalized alerts and started bidding consistently within 2 weeks.",
            challenge:
                "Manual discovery across portals led to missed corrigendums and short deadlines.",
            solution:
                "Configured keyword + location filters and enabled WhatsApp alerts with deadline reminders.",
            metrics: [
                { label: "Time Saved", value: "60%" },
                { label: "More Relevant Alerts", value: "3×" },
                { label: "Missed Deadlines", value: "0" },
            ],
        } as CaseStudy,
        pricing: [
            {
                name: "Starter",
                price: "₹499/mo",
                bullets: ["Email alerts", "Daily digest", "Basic filters"],
                href: "/pricing#starter",
            },
            {
                name: "Pro",
                price: "₹1499/mo",
                bullets: ["WhatsApp alerts", "Corrigendum tracking", "Deadline reminders"],
                recommended: true,
                href: "/pricing#pro",
            },
            {
                name: "Enterprise",
                price: "Custom",
                bullets: ["Multi-user teams", "Advanced routing", "Dedicated success manager"],
                href: "/pricing#enterprise",
            },
        ] as PricingTier[],
        resources: [
            { label: "Alert Setup Checklist (PDF)", href: "/downloads/alerts-checklist.pdf" },
            { label: "Keyword Strategy Guide", href: "/downloads/keyword-guide.pdf" },
        ] as Resource[],
        faqs: [
            {
                q: "How fast are the alerts?",
                a: "Alerts are generated near real-time based on source updates. For many sources, you receive notifications within minutes of detection.",
            },
            {
                q: "Can I filter by city and department?",
                a: "Yes. You can filter by state/city and optionally by departments, categories, and tender value.",
            },
            {
                q: "What causes irrelevant alerts?",
                a: "Broad keywords and generic categories usually cause noise. We refine keywords, exclusions, and value ranges to improve relevance.",
            },
            {
                q: "Do you track corrigendums and extensions?",
                a: "Yes. Corrigendum and deadline extension updates are monitored and pushed via configured channels.",
            },
        ] as FAQ[],
        featured: true,
    },

    "ai-matching": {
        title: "AI-Powered Matching",
        icon: Brain,
        summary:
            "Intelligent screening to find tenders that align with your eligibility, capabilities, and win probability.",
        heroImage: "bg-gradient-to-br from-emerald-600/20 to-teal-600/20",
        description:
            "Stop bidding blindly. Our AI analyzes your profile and tender eligibility criteria to recommend opportunities with higher chances of success.",
        tags: ["AI", "Eligibility", "Shortlisting", "Win probability", "Scoring"],
        trustBadges: ["Eligibility checks", "Win probability scoring", "Gap analysis"],
        idealFor: [
            "Businesses wasting effort on low-fit tenders",
            "Teams confused about eligibility clauses/turnover requirements",
            "Companies wanting a shortlist instead of raw alerts",
        ],
        outcomes: ["Bid on fewer but better tenders", "Reduce disqualifications", "Improve hit-rate"],
        painPoints: [
            "Bidding on projects where you have low chances of success.",
            "Difficulty understanding complex eligibility criteria.",
            "Wasting resources preparing bids for disqualified tenders.",
            "Eligibility mismatch due to missing/expired certificates.",
        ],
        statistics: [
            { label: "Win Rate", value: "78%" },
            { label: "Tenders Analyzed", value: "10,000+" },
            { label: "Time Saved", value: "85%" },
        ] as Stat[],
        requiredDocuments: [
            "Company Registration Certificate",
            "Past 3 Years Financial Statements",
            "Previous Tender Experience Documents (if any)",
            "Certificates (ISO/BIS/etc.) if applicable",
        ],
        features: [
            "Eligibility Check: Compare turnover/experience vs tender requirements.",
            "Win Probability Score: A score indicating likelihood of success.",
            "Gap Analysis: Shows exactly why you may not qualify.",
            "Smart Recommendations: Similar tenders you might have missed.",
            "Exclusions: Avoid tenders that are clearly out-of-scope.",
        ],
        deliverables: [
            "Company capability profile + scoring inputs",
            "Shortlisted tenders dashboard",
            "Eligibility + compliance flags per tender",
            "Gap analysis actions (what to fix)",
        ],
        process: [
            { title: "Profile Mapping", desc: "We capture your financial/technical profile and certifications." },
            { title: "Tender Scoring", desc: "AI compares each tender against your profile." },
            { title: "Shortlisting", desc: "You get a curated list of best-fit tenders." },
            { title: "Action Plan", desc: "We show eligibility gaps and recommended fixes." },
        ] as ProcessStep[],
        exampleMatches: [
            {
                title: "Supply & Installation of CCTV Systems",
                summary: "Eligibility checked vs turnover + OEM requirements",
                value: "₹ 1.2 Cr",
                dept: "Smart City Mission",
                location: "Gujarat",
                deadline: "2026-02-15",
                url: "#",
            },
            {
                title: "Annual IT AMC Contract",
                summary: "Shortlisted based on past AMC experience",
                value: "₹ 38 Lakh",
                dept: "State IT Dept",
                location: "Kerala",
                deadline: "2026-02-28",
                url: "#",
            },
        ] as ExampleMatch[],
        caseStudy: {
            title: "Enterprise improved bid success from 6% → 18%",
            summary:
                "By focusing only on high-fit tenders with eligibility alignment, the team reduced wasted bids and improved outcomes.",
            challenge:
                "Team was submitting many bids with hidden eligibility mismatches and missing certificates.",
            solution:
                "AI scoring + gap analysis flagged disqualification risks early and optimized shortlist.",
            metrics: [
                { label: "Hit-rate", value: "18%" },
                { label: "Bids Reduced", value: "40%" },
                { label: "Time Saved", value: "85%" },
            ],
        } as CaseStudy,
        pricing: [
            {
                name: "Pro",
                price: "₹1999/mo",
                bullets: ["Win probability score", "Gap analysis", "Shortlisting"],
                recommended: true,
                href: "/pricing#pro",
            },
            {
                name: "Enterprise",
                price: "Custom",
                bullets: ["Custom model tuning", "Dedicated analyst", "Team workflows"],
                href: "/pricing#enterprise",
            },
        ] as PricingTier[],
        resources: [
            { label: "Eligibility Checklist (PDF)", href: "/downloads/eligibility-checklist.pdf" },
            { label: "Certificate Renewal Tracker", href: "/downloads/certificate-tracker.xlsx" },
        ] as Resource[],
        faqs: [
            { q: "How accurate is the win probability?", a: "It is a decision-support score built from tender attributes and your profile; it helps prioritize, not guarantee wins." },
            { q: "Does it work for new businesses?", a: "Yes. It can identify smaller tenders and tenders with relaxed experience requirements." },
            { q: "Why do bids get disqualified even when pricing is good?", a: "Many tenders are evaluated as compliant/non-compliant for mandatory eligibility and documentation, regardless of price." },
            { q: "Can it detect missing certificates?", a: "Yes. The gap analysis highlights missing/expired certifications against tender clauses." },
        ] as FAQ[],
        featured: true,
    },

    "bid-support": {
        title: "Bid Preparation Support",
        icon: FileText,
        summary:
            "Expert assistance with pricing strategy, BoQ analysis, and technical compliance to reduce rejections.",
        heroImage: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        description:
            "We craft your technical and financial submission with a compliance-first approach: pricing strategy, BoQ analysis, and structured documentation.",
        tags: ["BoQ", "Technical", "Financial", "Compliance matrix", "Submission"],
        trustBadges: ["Compliance-first", "QC review", "Pricing sanity checks"],
        idealFor: [
            "Teams that lose bids due to technical mistakes",
            "Businesses needing BoQ and pricing support",
            "Time-constrained teams who want expert drafting",
        ],
        outcomes: ["Reduce technical rejections", "Improve bid quality", "Submit confidently and early"],
        painPoints: [
            "Rejection due to minor technical errors.",
            "Difficulty calculating competitive yet profitable pricing.",
            "Lack of time to prepare comprehensive bid documents.",
            "Mistakes in forms, annexures, or portal uploads.",
        ],
        statistics: [
            { label: "Bids Prepared", value: "5,000+" },
            { label: "Success Rate", value: "92%" },
            { label: "Avg. Turnaround", value: "24 Hrs" },
        ] as Stat[],
        requiredDocuments: [
            "Tender Document",
            "Company Profile",
            "Technical Specifications",
            "Financial Capacity Documents",
            "Certificates (as required)",
        ],
        features: [
            "BoQ Analysis: Detailed breakdown and estimation guidance.",
            "Rate Analysis: Benchmarking for smarter pricing strategy.",
            "Technical Write-up: Professional drafting of technical proposal.",
            "Compliance Matrix: Line-by-line mapping of tender requirements to evidence.",
            "Final QC: Checklist review to prevent non-responsive bids.",
        ],
        deliverables: [
            "Complete technical proposal draft",
            "Compliance matrix + evidence mapping",
            "Financial bid review and sanity check",
            "Submission-ready document pack",
        ],
        process: [
            { title: "Tender Review", desc: "We identify mandatory requirements, risks, and key scoring points." },
            { title: "Draft & Align", desc: "We draft technical responses and map evidence for compliance." },
            { title: "Pricing Strategy", desc: "We review BoQ and pricing to stay competitive and profitable." },
            { title: "QC + Submission", desc: "We run final checks and prepare submission pack." },
        ] as ProcessStep[],
        exampleMatches: [
            {
                title: "BoQ-Based Civil Works – Package A",
                summary: "Pricing + compliance matrix support",
                value: "₹ 3.4 Cr",
                dept: "PWD",
                location: "Rajasthan",
                deadline: "2026-03-05",
                url: "#",
            },
        ] as ExampleMatch[],
        caseStudy: {
            title: "Reduced technical rejections by 45%",
            summary:
                "A contractor repeatedly lost bids due to small compliance gaps. After structured drafting + QC, rejections dropped sharply.",
            challenge: "Non-responsive bids due to missed annexures and formatting errors.",
            solution: "Compliance matrix + standardized templates + final QC checklist.",
            metrics: [
                { label: "Rejections Reduced", value: "45%" },
                { label: "Turnaround", value: "24 hrs" },
                { label: "Bid Quality", value: "↑" },
            ],
        } as CaseStudy,
        pricing: [
            { name: "Per Bid", price: "From ₹7,999", bullets: ["Technical draft", "Compliance matrix", "QC checklist"], href: "/pricing#bid-support", recommended: true },
            { name: "Monthly", price: "Custom", bullets: ["Multiple bids/month", "Priority turnaround", "Dedicated manager"], href: "/pricing#enterprise" },
        ] as PricingTier[],
        resources: [
            { label: "BoQ Checklist (PDF)", href: "/downloads/boq-checklist.pdf" },
            { label: "Submission QC Checklist (PDF)", href: "/downloads/submission-qc.pdf" },
        ] as Resource[],
        faqs: [
            { q: "Do you guarantee a win?", a: "No one can guarantee wins, but we significantly reduce rejection risk and improve bid quality and compliance." },
            { q: "Can you handle portal uploads?", a: "We can guide and prepare submission packs; portal upload support can be included in premium plans." },
            { q: "What are the most common bid mistakes?", a: "Missing mandatory documents, incorrect forms, spec non-compliance, pricing sheet errors, and late submissions." },
            { q: "Do you help with clarifications?", a: "Yes, we help draft clarification/representation letters where allowed." },
        ] as FAQ[],
        featured: true,
    },

    "gem-registration": {
        title: "GeM & MSME Registration",
        icon: ShieldCheck,
        summary:
            "End-to-end support for GeM profile, Udyam (MSME), catalog setup, and vendor compliance.",
        heroImage: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20",
        description:
            "We handle GeM and Udyam onboarding end-to-end: KYC correctness, profile setup, catalog compliance, and vendor assessment guidance.",
        tags: ["GeM", "Udyam", "KYC", "Vendor assessment", "Catalog"],
        trustBadges: ["KYC validation", "Catalog support", "Vendor assessment guidance"],
        idealFor: [
            "New sellers onboarding to GeM",
            "Businesses facing KYC mismatch or verification delays",
            "Teams needing catalog and assessment support",
        ],
        outcomes: ["Faster approvals", "Reduce rejections", "Ready-to-bid profile"],
        painPoints: [
            "Confusing government portals and interfaces.",
            "Rejection due to incorrect category selection.",
            "Delays due to KYC mismatch or poor scans.",
            "Vendor assessment/QCI process confusion.",
        ],
        statistics: [
            { label: "Profiles Managed", value: "2,500+" },
            { label: "Success Rate", value: "100%" },
            { label: "Avg. Approval Time", value: "48 Hrs" },
        ] as Stat[],
        requiredDocuments: [
            "Aadhaar Card (Linked with Mobile)",
            "PAN Card",
            "GST Certificate",
            "Bank Account Details",
            "Udyam Registration (if available)",
        ],
        features: [
            "Profile Creation: Seller profile setup on GeM.",
            "Catalog Management: Upload products/services with correct specs.",
            "Vendor Assessment: Guidance for assessment steps and responses.",
            "Udyam Registration: MSME certificate generation support.",
            "Mismatch Resolution: Align PAN/GST/Udyam details for consistency.",
        ],
        deliverables: [
            "Verified KYC pack (clean scans + consistent details)",
            "GeM seller profile setup",
            "Catalog listing guidance",
            "Vendor assessment support checklist",
        ],
        process: [
            { title: "Document Validation", desc: "We verify PAN/GST/Aadhaar and ensure consistent business details." },
            { title: "Portal Filing", desc: "We complete GeM/Udyam steps with correct categories." },
            { title: "Catalog Setup", desc: "We guide product/service listings and spec compliance." },
            { title: "Assessment Support", desc: "We help respond to assessment steps and queries." },
        ] as ProcessStep[],
        resources: [
            { label: "GeM KYC Checklist (PDF)", href: "/downloads/gem-kyc-checklist.pdf" },
            { label: "Catalog Readiness Guide", href: "/downloads/catalog-guide.pdf" },
        ] as Resource[],
        faqs: [
            { q: "How long does GeM registration take?", a: "Timeline depends on KYC readiness; many basic registrations can be completed within 24–48 hours if documents are correct." },
            { q: "What causes KYC rejection?", a: "Common reasons include unclear scans, mismatched details across PAN/GST/Udyam, expired IDs, or missing signatures." },
            { q: "Do I need Aadhaar linked with mobile?", a: "Yes, Aadhaar linked to a mobile number is typically required for verification flows." },
            { q: "What is vendor assessment?", a: "Vendor assessment may involve a structured process (often coordinated via QCI in some flows) with status tracking and queries." },
        ] as FAQ[],
        featured: true,
    },

    documentation: {
        title: "Documentation Assistance",
        icon: FolderOpen,
        summary:
            "Drafting and verification of critical documents to eliminate technical rejection risks.",
        heroImage: "bg-gradient-to-br from-indigo-600/20 to-pink-600/20",
        description:
            "We organize, draft, and verify tender documents—formats, signatures, stamps, dates—so you avoid disqualification due to documentation gaps.",
        tags: ["Documents", "Templates", "Affidavits", "Verification", "Compliance"],
        trustBadges: ["Template library", "Verification", "Digitization support"],
        idealFor: [
            "Teams scrambling for documents before deadline",
            "Businesses needing affidavits/authorization letters",
            "Bidders facing rejections due to format/signature errors",
        ],
        outcomes: ["Fewer documentation-related rejections", "Faster submissions", "Ready document repository"],
        painPoints: [
            "Scrambling for documents at the last minute.",
            "Confusion about specific formats.",
            "Notary and affidavit requirements.",
            "Unsigned pages or missing annexures causing rejection.",
        ],
        statistics: [
            { label: "Documents Verified", value: "15,000+" },
            { label: "Error Rate", value: "0.1%" },
            { label: "Templates Available", value: "200+" },
        ] as Stat[],
        requiredDocuments: [
            "Business Registration Documents",
            "GST Certificate",
            "PAN Card",
            "Authorization Letter",
            "Bank Details",
        ],
        features: [
            "Document Checklist: Custom checklist per tender.",
            "Template Library: Standard formats for affidavits/letters.",
            "Digital Repository: Secure storage for recurring documents.",
            "Verification: Cross-check dates, signatures, stamps, and annexures.",
            "File Optimization: Scans optimized for portal upload.",
        ],
        deliverables: [
            "Tender-specific document checklist",
            "Verified document pack (submission-ready)",
            "Standard templates (letters/affidavits)",
            "Digitized and optimized scans",
        ],
        process: [
            { title: "Checklist Creation", desc: "We extract mandatory docs from the tender document." },
            { title: "Gap Analysis", desc: "We identify missing docs and required formats." },
            { title: "Draft & Verify", desc: "We draft templates and verify stamps/signatures/dates." },
            { title: "Upload Readiness", desc: "We optimize files for portal size/type constraints." },
        ] as ProcessStep[],
        resources: [
            { label: "Document Checklist Template", href: "/downloads/document-checklist.pdf" },
            { label: "Authorization Letter Template", href: "/downloads/auth-letter.docx" },
        ] as Resource[],
        faqs: [
            { q: "Can you help with bank guarantees?", a: "We guide the format and required clauses; the instrument must be issued by your bank." },
            { q: "Do you verify certificate expiry dates?", a: "Yes, we recommend tracking expiry dates and renewing before submission to avoid disqualification." },
            { q: "What files do portals usually reject?", a: "Common reasons are large file sizes, wrong file types, unclear scans, missing signatures/stamps, or incomplete annexures." },
        ] as FAQ[],
        featured: false,
    },

    analytics: {
        title: "Tender Analytics",
        icon: LineChart,
        summary:
            "Insights on competitor patterns, historical pricing, and department trends for smarter bidding.",
        heroImage: "bg-gradient-to-br from-green-600/20 to-lime-600/20",
        description:
            "Use data to price better and bid smarter. Analyze competitor behavior, historical rates, tender frequency, and department spending patterns.",
        tags: ["Competitor", "Pricing", "Trends", "History", "Reports"],
        trustBadges: ["Historical datasets", "Competitor insights", "Department profiling"],
        idealFor: [
            "Teams needing pricing benchmarks",
            "Businesses unsure of competitive L1 rates",
            "Enterprises building a bid strategy pipeline",
        ],
        outcomes: ["Better pricing decisions", "Improved competitiveness", "Identify best departments/regions"],
        painPoints: [
            "Bidding too high or too low due to lack of market data.",
            "Not knowing who your real competitors are.",
            "Unaware of which departments pay on time.",
            "No visibility on historical L1 rates for similar work.",
        ],
        statistics: [
            { label: "Data Points", value: "1M+" },
            { label: "Accuracy", value: "96%" },
            { label: "Historical Years", value: "7+" },
        ] as Stat[],
        requiredDocuments: [
            "Company Profile",
            "Past Tender Participation Records (optional)",
            "Preferred Analysis Categories",
        ],
        features: [
            "Competitor Analysis: See who bid on what and at what price.",
            "Price Trends: Historical L1 benchmarks for similar items/services.",
            "Department Profiling: Spending patterns and tender frequency.",
            "Win/Loss Reports: Breakdown of your past performance (if data provided).",
            "Opportunity Heatmap: Regions/segments with best win potential.",
        ],
        deliverables: [
            "Competitor + pricing benchmark report",
            "Tender frequency + department insights",
            "Strategy recommendations for target segments",
            "Monthly analytics digest (optional)",
        ],
        process: [
            { title: "Data Aggregation", desc: "We compile tender history and participation data." },
            { title: "Normalization", desc: "We standardize data for comparable insights." },
            { title: "Visualization", desc: "Dashboards highlight trends and benchmarks." },
            { title: "Strategy", desc: "You get actionable recommendations for bidding." },
        ] as ProcessStep[],
        resources: [
            { label: "Pricing Benchmark Guide", href: "/downloads/pricing-benchmark.pdf" },
            { label: "Competitor Tracking Sheet", href: "/downloads/competitor-tracker.xlsx" },
        ] as Resource[],
        faqs: [
            { q: "How far back does the data go?", a: "Typically 5–7 years depending on category and source coverage." },
            { q: "Can this improve my pricing strategy?", a: "Yes—benchmarking helps avoid pricing too high/low and improves competitiveness." },
            { q: "Do you provide dashboards?", a: "Yes, insights can be delivered as reports or dashboards depending on plan." },
        ] as FAQ[],
        featured: false,
    },

    "jv-support": {
        title: "JV & Consortium Support",
        icon: Handshake,
        summary:
            "Partner matching and JV structuring to meet eligibility for high-value tenders.",
        heroImage: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20",
        description:
            "Unlock large tenders by forming a strong JV/consortium. We help match partners, define roles, and structure the agreement and eligibility evidence.",
        tags: ["JV", "Consortium", "Eligibility", "Partner matching", "MoU"],
        trustBadges: ["Partner vetting", "Role definition", "Templates"],
        idealFor: [
            "Bidders missing turnover/experience requirements",
            "Companies seeking technical partner capability",
            "Enterprises bidding large infrastructure/IT contracts",
        ],
        outcomes: ["Qualify for larger tenders", "Reduce partner risk", "Clear JV role split"],
        painPoints: [
            "Missing out on large tenders due to turnover limits.",
            "Lack of specific technical experience required for a bid.",
            "Difficulty finding trustworthy partners.",
            "Miscommunication and unclear responsibilities in JV bids.",
        ],
        statistics: [
            { label: "JVs Formed", value: "350+" },
            { label: "Success Rate", value: "88%" },
            { label: "Partner Network", value: "1,000+" },
        ] as Stat[],
        requiredDocuments: [
            "Company Registration",
            "Financial Statements",
            "Technical Capability Proof",
            "MoU/MoA Template",
            "Partner Preference Form",
        ],
        features: [
            "Partner Matching: Find firms with complementary strengths.",
            "Legal Framework: Templates for JV/consortium agreements.",
            "Role Definition: Clear split of scope, liability, and revenue.",
            "Negotiation Support: Mediation to ensure fair terms.",
            "Eligibility Evidence Pack: Combined credentials documentation.",
        ],
        deliverables: [
            "Shortlisted partners + intro",
            "JV role split plan (scope + commercial)",
            "MoU/MoA template set",
            "Eligibility evidence pack checklist",
        ],
        process: [
            { title: "Gap Identification", desc: "Identify whether the gap is financial, technical, or both." },
            { title: "Partner Search", desc: "We search and shortlist partners from the network." },
            { title: "Role & Terms", desc: "Define scope split, liabilities, and commercial structure." },
            { title: "Agreement + Submission", desc: "Finalize MoU/MoA and prepare submission evidence." },
        ] as ProcessStep[],
        resources: [
            { label: "JV MoU Template", href: "/downloads/jv-mou-template.docx" },
            { label: "Consortium Checklist (PDF)", href: "/downloads/consortium-checklist.pdf" },
        ] as Resource[],
        faqs: [
            { q: "Is a JV legally binding?", a: "Yes—JV/consortium agreements are legal contracts and should be drafted carefully." },
            { q: "Do tenders require lead partner documentation?", a: "Often yes; many tenders specify lead partner responsibilities and additional documents like MoU/MoA." },
            { q: "How do you reduce partner risk?", a: "We recommend partner due diligence, role clarity, and documented obligations to reduce execution risk." },
        ] as FAQ[],
        featured: false,
    },

    "legal-review": {
        title: "Legal & Compliance Review",
        icon: Scale,
        summary:
            "Clause-by-clause review to reduce legal risk and ensure tender/contract compliance.",
        heroImage: "bg-gradient-to-br from-slate-600/20 to-gray-600/20",
        description:
            "Submit with confidence. We review tender clauses and contract terms to identify risks, compliance gaps, and unfair conditions before submission.",
        tags: ["Legal", "Compliance", "Risk", "Clauses", "Disputes"],
        trustBadges: ["Clause review", "Deviation list", "Representation drafts"],
        idealFor: [
            "High-value tenders with strict contract clauses",
            "Companies worried about penalties/blacklisting risks",
            "Teams needing deviation list and clarifications",
        ],
        outcomes: ["Reduce legal risk", "Avoid non-compliance", "Submit with stronger contract awareness"],
        painPoints: [
            "Ambiguous tender clauses leading to future disputes.",
            "Risk of blacklisting due to non-compliance.",
            "Hidden penalties in contract terms.",
            "Bid becoming non-compliant due to unauthorized alterations/omissions.",
        ],
        statistics: [
            { label: "Reviews Completed", value: "3,200+" },
            { label: "Risk Mitigation", value: "98%" },
            { label: "Legal Experts", value: "25+" },
        ] as Stat[],
        requiredDocuments: [
            "Complete Tender Document",
            "Draft Bid Submission",
            "Company Compliance Certificates",
            "Previous Contract Documents (if any)",
        ],
        features: [
            "Clause-by-Clause Review: Detailed risk assessment of terms and conditions.",
            "Deviation List: Identify clauses you cannot comply with and mitigation options.",
            "Representation Drafting: Letters for clarifications and requests (where allowed).",
            "Dispute Advisory: Guidance on next steps and risk posture.",
            "Compliance Checklist: Mandatory forms/certifications checklist.",
        ],
        deliverables: [
            "Legal risk report",
            "Deviation list + mitigation plan",
            "Representation/clarification drafts",
            "Compliance checklist for submission",
        ],
        process: [
            { title: "Scan", desc: "We scan tender terms, eligibility, and contractual obligations." },
            { title: "Flag", desc: "We flag risky/unfair clauses and compliance gaps." },
            { title: "Mitigate", desc: "We recommend mitigation strategies and deviation positioning." },
            { title: "Finalize", desc: "We provide final review notes for submission-ready bid." },
        ] as ProcessStep[],
        resources: [
            { label: "Compliance Checklist (PDF)", href: "/downloads/legal-compliance-checklist.pdf" },
            { label: "Deviation Register Template", href: "/downloads/deviation-register.xlsx" },
        ] as Resource[],
        faqs: [
            { q: "Can you challenge a tender award?", a: "We can provide groundwork and advisory; formal litigation requires an advocate and jurisdiction-specific process." },
            { q: "Will deviations disqualify my bid?", a: "It depends on tender rules. Many tenders treat deviations strictly; we help identify must-comply vs negotiable terms." },
            { q: "Why are bids called non-responsive?", a: "Often due to missing documents, spec non-conformance, late submissions, or unauthorized omissions/alterations in required forms." },
        ] as FAQ[],
        featured: false,
    },
} as const;
