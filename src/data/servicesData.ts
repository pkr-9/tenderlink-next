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

export const servicesData = {
    "tender-alerts": {
        title: "Real-Time Tender Alerts",
        icon: Bell,
        summary: "Instant notifications via WhatsApp, Email, and SMS for tenders matching your specific criteria.",
        heroImage: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
        description: "Never miss a deadline again. Get instant, personalized notifications via WhatsApp, Email, and SMS for new tenders that strictly match your specific criteria. Our automated system monitors over 100+ government and private sources daily.",
        painPoints: [
            "Missing critical deadlines due to delayed information.",
            "Wasting hours manually checking dozens of websites daily.",
            "Receiving irrelevant alerts that clutter your inbox.",
        ],
        statistics: [
            { label: "Daily Alerts", value: "50,000+" },
            { label: "Accuracy", value: "99.8%" },
            { label: "Sources", value: "120+" }
        ],
        requiredDocuments: [
            "Company Profile Registration",
            "Valid Email ID & Phone Number",
            "Preferred Category Selection"
        ],
        features: [
            "Multi-Channel Alerts: WhatsApp, Email, SMS, and Mobile App push notifications.",
            "Keyword Filtering: Alerts based on specific keywords, locations, and tender values.",
            "Daily Digest: A consolidated morning report of all relevant opportunities.",
            "Competitor Tracking: Get notified when your competitors bid.",
        ],
        process: [
            { title: "Define Criteria", desc: "Set your preferences for sector, location, and contract value." },
            { title: "AI Scanning", desc: "Our system scans 100+ sources every 15 minutes." },
            { title: "Instant Alert", desc: "Receive a notification the moment a match is found." },
        ],
        faqs: [
            { q: "How fast are the alerts?", a: "Our system updates in near real-time. You typically receive alerts within 30 minutes." },
            { q: "Can I filter by city?", a: "Yes, you can filter by state, city, and even specific government departments." },
        ]
    },
    "ai-matching": {
        title: "AI-Powered Matching",
        icon: Brain,
        summary: "Intelligent algorithm that screens thousands of tenders to find the perfect fit for your capabilities.",
        heroImage: "bg-gradient-to-br from-emerald-600/20 to-teal-600/20",
        description: "Stop bidding blindly. Our AI analyzes your past performance and capabilities to recommend tenders with the highest probability of winning.",
        painPoints: [
            "Bidding on projects where you have low chances of success.",
            "Difficulty understanding complex eligibility criteria.",
            "Wasting resources on preparing bids for disqualified tenders.",
        ],
        statistics: [
            { label: "Win Rate", value: "78%" },
            { label: "Tenders Analyzed", value: "10,000+" },
            { label: "Time Saved", value: "85%" }
        ],
        requiredDocuments: [
            "Company Registration Certificate",
            "Past 3 Years Financial Statements",
            "Previous Tender Experience Documents"
        ],
        features: [
            "Eligibility Check: Instant analysis of your turnover vs. tender requirements.",
            "Win Probability Score: A percentage score indicating your likelihood of success.",
            "Gap Analysis: Identifies exactly why you might not qualify.",
            "Smart Recommendations: Suggests similar tenders you might have missed.",
        ],
        process: [
            { title: "Profile Analysis", desc: "We map your company's financial and technical profile." },
            { title: "Tender Scoring", desc: "Our AI compares every new tender against your profile." },
            { title: "Shortlisting", desc: "You get a curated list of 'High Win Probability' tenders." },
        ],
        faqs: [
            { q: "How accurate is the win probability?", a: "Our model is trained on 5 years of historical data." },
            { q: "Does it work for new businesses?", a: "Yes, it helps startups identify smaller tenders." },
        ]
    },
    "bid-support": {
        title: "Bid Preparation Support",
        icon: FileText,
        summary: "Expert assistance with pricing strategy, BoQ analysis, and technical compliance for winning bids.",
        heroImage: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        description: "Expert assistance to craft winning bids. We handle pricing strategy, technical compliance, and documentation so you can focus on execution.",
        painPoints: [
            "Rejection due to minor technical errors.",
            "Difficulty in calculating competitive yet profitable pricing.",
            "Lack of time to prepare comprehensive bid documents.",
        ],
        statistics: [
            { label: "Bids Prepared", value: "5,000+" },
            { label: "Success Rate", value: "92%" },
            { label: "Avg. Turnaround", value: "24 Hrs" }
        ],
        requiredDocuments: [
            "Tender Document",
            "Company Profile",
            "Technical Specifications",
            "Financial Capacity Documents"
        ],
        features: [
            "BoQ Analysis: Detailed breakdown of Bill of Quantities.",
            "Rate Analysis: Competitor rate benchmarking for smarter pricing.",
            "Technical Write-up: Professional drafting of technical proposals.",
            "Compliance Matrix: Line-by-line verification of tender requirements.",
        ],
        process: [
            { title: "Document Review", desc: "We study the tender document thoroughly." },
            { title: "Drafting", desc: "Our experts prepare the technical and financial bid drafts." },
            { title: "Final Review", desc: "A rigorous quality check before you hit submit." },
        ],
        faqs: [
            { q: "Do you guarantee a win?", a: "While no one can guarantee a win, our support ensures your bid is never rejected for technical errors." },
            { q: "Is this included?", a: "Basic support is in Platinum. End-to-end management is in Diamond." },
        ]
    },
    "gem-registration": {
        title: "GeM & MSME Registration",
        icon: ShieldCheck,
        summary: "End-to-end support for GeM profile management, Udyam registration, and vendor compliance.",
        heroImage: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20",
        description: "Your gateway to government contracts. We handle end-to-end registration for GeM, Udyam (MSME), and other vendor portals.",
        painPoints: [
            "Confusing government portals and interfaces.",
            "Rejection due to incorrect category selection.",
            "Delays in getting vendor assessment approval.",
        ],
        statistics: [
            { label: "Profiles Managed", value: "2,500+" },
            { label: "Success Rate", value: "100%" },
            { label: "Avg. Approval Time", value: "48 Hrs" }
        ],
        requiredDocuments: [
            "Aadhaar Card (Linked with Mobile)",
            "PAN Card",
            "GST Certificate",
            "Bank Account Details",
            "Udyam Registration (if available)"
        ],
        features: [
            "Profile Creation: Setup of your primary seller profile on GeM.",
            "Catalog Management: Uploading your products/services with correct specifications.",
            "Vendor Assessment: Assistance with the QCI assessment process.",
            "Udyam Registration: Instant MSME certificate generation.",
        ],
        process: [
            { title: "Data Collection", desc: "We collect necessary KYC and business documents." },
            { title: "Portal Filing", desc: "Our team files the application on government portals." },
            { title: "Approval", desc: "We handle queries until your profile is live." },
        ],
        faqs: [
            { q: "How long does GeM registration take?", a: "Basic registration is done in 24 hours." },
            { q: "Do I need an Aadhaar card?", a: "Yes, Aadhaar linked with a mobile number is mandatory." },
        ]
    },
    documentation: {
        title: "Documentation Assistance",
        icon: FolderOpen,
        summary: "Drafting and verification of all critical documents to eliminate technical rejection risks.",
        heroImage: "bg-gradient-to-br from-indigo-600/20 to-pink-600/20",
        description: "Zero errors, zero rejections. We assist in organizing, drafting, and verifying all critical documents required for tender submission.",
        painPoints: [
            "Scrambling for documents at the last minute.",
            "Confusion about specific formats.",
            "Notary and affidavit requirements.",
        ],
        statistics: [
            { label: "Documents Verified", value: "15,000+" },
            { label: "Error Rate", value: "0.1%" },
            { label: "Templates Available", value: "200+" }
        ],
        requiredDocuments: [
            "Business Registration Documents",
            "GST Certificate",
            "PAN Card",
            "Authorization Letter",
            "Bank Details"
        ],
        features: [
            "Document Checklist: A custom checklist for every tender.",
            "Template Library: Access to standard formats for affidavits.",
            "Digital Repository: Secure storage for your recurring documents.",
            "Verification: Cross-checking dates, signatures, and stamps.",
        ],
        process: [
            { title: "Gap Analysis", desc: "We identify which documents you are missing." },
            { title: "Preparation", desc: "We help draft and procure the necessary certificates." },
            { title: "Digitization", desc: "Scanning and optimizing files for portal upload." },
        ],
        faqs: [
            { q: "Can you help with bank guarantees?", a: "We guide you on the format, but the instrument must be issued by your bank." },
        ]
    },
    analytics: {
        title: "Tender Analytics",
        icon: LineChart,
        summary: "Data-driven insights on competitor patterns and historical success rates for smarter bidding.",
        heroImage: "bg-gradient-to-br from-green-600/20 to-lime-600/20",
        description: "Data is your competitive advantage. Analyze competitor behavior, historical rates, and departmental spending trends.",
        painPoints: [
            "Bidding too high or too low due to lack of market data.",
            "Not knowing who your real competitors are.",
            "Unaware of which departments pay on time.",
        ],
        statistics: [
            { label: "Data Points", value: "1M+" },
            { label: "Accuracy", value: "96%" },
            { label: "Historical Years", value: "7+" }
        ],
        requiredDocuments: [
            "Company Profile",
            "Past Tender Participation Records",
            "Preferred Analysis Categories"
        ],
        features: [
            "Competitor Analysis: See who bid on what and at what price.",
            "Price Trends: Historical L1 rates for similar items.",
            "Department Profiling: Spending patterns and tender frequency.",
            "Win/Loss Reports: Detailed breakdown of your past performance.",
        ],
        process: [
            { title: "Data Mining", desc: "We aggregate data from thousands of past tenders." },
            { title: "Visualization", desc: "Data is presented in easy-to-read charts." },
            { title: "Strategy", desc: "Use these insights to set your winning price." },
        ],
        faqs: [
            { q: "How far back does the data go?", a: "We maintain a robust archive for the past 5-7 years." },
        ]
    },
    "jv-support": {
        title: "JV & Consortium Support",
        icon: Handshake,
        summary: "Connect with reliable partners to form Joint Ventures for high-value project eligibility.",
        heroImage: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20",
        description: "Unlock high-value projects. We help you find and connect with reliable partners to form Joint Ventures and meet strict eligibility criteria.",
        painPoints: [
            "Missing out on large tenders due to turnover limits.",
            "Lack of specific technical experience required for a bid.",
            "Difficulty finding trustworthy partners.",
        ],
        statistics: [
            { label: "JVs Formed", value: "350+" },
            { label: "Success Rate", value: "88%" },
            { label: "Partner Network", value: "1,000+" }
        ],
        requiredDocuments: [
            "Company Registration",
            "Financial Statements",
            "Technical Capability Certificate",
            "MOU Template",
            "Partner Preference Form"
        ],
        features: [
            "Partner Matching: Find firms with complementary strengths.",
            "Legal Framework: Standard templates for JV agreements.",
            "Role Definition: Clear splitting of scope and revenue.",
            "Negotiation Support: Mediation to ensure fair terms.",
        ],
        process: [
            { title: "Requirement Mapping", desc: "Identify the specific gap (Financial or Technical)." },
            { title: "Partner Search", desc: "We search our network for suitable matches." },
            { title: "Agreement", desc: "Facilitating the legal JV agreement signing." },
        ],
        faqs: [
            { q: "Is a JV legally binding?", a: "Yes, a Joint Venture agreement is a legal contract." },
        ]
    },
    "legal-review": {
        title: "Legal & Compliance Review",
        icon: Scale,
        summary: "Pre-submission vetting by legal experts to ensure strict adherence to all tender clauses.",
        heroImage: "bg-gradient-to-br from-slate-600/20 to-gray-600/20",
        description: "Submit with confidence. Our experts review your bid against tender clauses to ensure strict adherence to all legal and regulatory requirements.",
        painPoints: [
            "Ambiguous tender clauses leading to future disputes.",
            "Risk of blacklisting due to non-compliance.",
            "Hidden penalties in contract terms.",
        ],
        statistics: [
            { label: "Reviews Completed", value: "3,200+" },
            { label: "Risk Mitigation", value: "98%" },
            { label: "Legal Experts", value: "25+" }
        ],
        requiredDocuments: [
            "Complete Tender Document",
            "Draft Bid Submission",
            "Company Compliance Certificates",
            "Previous Contract Documents (if any)"
        ],
        features: [
            "Clause-by-Clause Review: Detailed risk assessment of the contract.",
            "Deviation List: Identifying areas where you cannot meet requirements.",
            "Representation Drafting: Writing formal letters for clarifications.",
            "Dispute Advisory: Guidance on what to do if a tender is unfairly awarded.",
        ],
        process: [
            { title: "Scan", desc: "We scan the legal terms of the tender document." },
            { title: "Flag", desc: "Highlighting risky or unfair clauses." },
            { title: "Mitigate", desc: "Advising on how to address these risks." },
        ],
        faqs: [
            { q: "Can you challenge a tender award?", a: "We provide the groundwork, but formal litigation requires an advocate." },
        ]
    },
};