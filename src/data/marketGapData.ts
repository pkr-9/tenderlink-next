import {
    Search,
    Clock,
    FileWarning,
    UserX,
    TrendingUp,
} from "lucide-react";

export const marketGapData = [
    {
        id: 1,
        title: "Fragmented Information",
        problem:
            "Tender information is scattered across thousands of government websites, newspapers, and private portals. Finding relevant opportunities becomes time-consuming and unreliable.",
        solution:
            "We aggregate data from 100+ verified sources into a single intelligent dashboard categorized by industry and location.",
        impact: [
            "One unified tender feed",
            "No missed opportunities",
            "Industry-based filtering",
        ],
        icon: Search,
    },
    {
        id: 2,
        title: "Delayed Notifications",
        problem:
            "By the time businesses find a tender, deadlines are too close to prepare quality bids. Manual searching leads to lost chances.",
        solution:
            "AI-driven real-time alerts via WhatsApp, Email, and SMS ensure you act instantly when new tenders appear.",
        impact: [
            "Instant notifications",
            "Faster bid preparation",
            "Zero deadline misses",
        ],
        icon: Clock,
    },
    {
        id: 3,
        title: "Complex Eligibility Criteria",
        problem:
            "Businesses waste resources bidding on tenders they don't qualify for due to hidden or complex eligibility clauses.",
        solution:
            "Smart Assessment checks your company profile against tender requirements and calculates win probability instantly.",
        impact: [
            "Avoid disqualified bids",
            "Higher success rate",
            "Save bid costs",
        ],
        icon: FileWarning,
    },
    {
        id: 4,
        title: "Limited Collaboration",
        problem:
            "High-value tenders require consortium bidding, but finding reliable partners with complementary skills is difficult.",
        solution:
            "We provide a verified JV & Consortium partner network, unlocking access to larger tenders.",
        impact: [
            "Trusted partner network",
            "Access bigger projects",
            "Reduced partnership risk",
        ],
        icon: UserX,
    },
    {
        id: 5,
        title: "Lack of Market Intelligence",
        problem:
            "Bidding without competitor price intelligence results in lost bids or low-margin wins.",
        solution:
            "Historical tender analytics reveal competitor trends and winning price patterns to guide your strategy.",
        impact: [
            "Competitor price insights",
            "Better pricing strategy",
            "Improved win probability",
        ],
        icon: TrendingUp,
    },
];
