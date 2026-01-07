import { AlertTriangle, TrendingUp, Search, UserX, Clock, FileWarning } from "lucide-react";

export const marketGapData = [
    {
        id: 1,
        title: "Fragmented Information",
        problem: "Tender information is scattered across thousands of government websites, newspapers, and private portals. Finding relevant opportunities is like finding a needle in a haystack.",
        solution: "We aggregate data from over 100+ sources into a single, searchable dashboard, categorized by industry and location.",
        icon: Search,
    },
    {
        id: 2,
        title: "Delayed Notifications",
        problem: "By the time businesses find a tender, the deadline is often too close to prepare a quality bid. Manual searching is slow and error-prone.",
        solution: "Our AI-driven system sends real-time alerts via WhatsApp and Email the moment a tender matching your criteria is published.",
        icon: Clock,
    },
    {
        id: 3,
        title: "Complex Eligibility Criteria",
        problem: "Small businesses often waste resources bidding on projects they don't technically qualify for due to complex, hidden clauses.",
        solution: "Our 'Smart Assessment' tool instantly checks your profile against tender requirements to calculate your win probability.",
        icon: FileWarning,
    },
    {
        id: 4,
        title: "Limited Collaboration",
        problem: "Many high-value tenders require a consortium, but finding trustworthy partners with complementary skills is difficult.",
        solution: "We provide a verified network of partners for Joint Ventures (JV) and Consortium bidding, unlocking larger opportunities.",
        icon: UserX,
    },
    {
        id: 5,
        title: "Lack of Market Intelligence",
        problem: "Bidding without knowing competitor rates or departmental spending trends leads to either lost bids or low-margin wins.",
        solution: "We provide historical data analytics, showing you exactly what prices won similar tenders in the past.",
        icon: TrendingUp,
    },
];