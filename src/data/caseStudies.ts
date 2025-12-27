
export interface CaseStudy {
    id: string;
    serviceTitle: string;
    title: string;
    intro: {
        client: string; // e.g. "E-commerce Fashion Brand"
        problem: string;
        goal: string;
    };
    beforeResults: {
        metric: string;
        value: string;
    }[];
    afterResults: {
        metric: string;
        value: string;
    }[];
    strategy: {
        title: string;
        description: string;
    }[];
    clientFeedback?: {
        quote: string;
        author: string;
        role: string;
    };
    subCaseStudies?: {
        title: string;
        goal?: string;
        whatIDid?: string[];
        results?: {
            metric: string;
            value: string;
        }[];
        outcome?: string;
        image?: string;
    }[];
    methodology?: string[];
    proofImages?: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
    "seo": {
        id: "seo",
        serviceTitle: "Search Engine Optimization (SEO)",
        title: "How We Increased Organic Traffic by 3x in 4 Months",
        intro: {
            client: "Local Dental Practice",
            problem: "The client had a modern website but was invisible on Google. They were getting practically no organic traffic and no new patient inquiries from search.",
            goal: "Rank for local keywords like 'best dentist near me' and increase monthly appointment bookings.",
        },
        beforeResults: [
            { metric: "Avg monthly traffic", value: "120 visits" },
            { metric: "Keywords in top 10", value: "0" },
            { metric: "Domain Authority", value: "Low (8)" },
            { metric: "Page Speed Score", value: "45/100" },
        ],
        afterResults: [
            { metric: "Avg monthly traffic", value: "1,250 visits" },
            { metric: "Keywords in top 10", value: "18" },
            { metric: "Domain Authority", value: "Improved (22)" },
            { metric: "Page Speed Score", value: "92/100" },
        ],
        strategy: [
            {
                title: "Technical Audit & Fixes",
                description: "We identified and fixed broken links, slow page load times, and missing meta tags that were hurting rankings."
            },
            {
                title: "Local SEO Optimization",
                description: "Optimized Google Business Profile and built consistent local citations to dominate the local map pack."
            },
            {
                title: "Content Strategy",
                description: "Created service-specific pages and a blog to answer common patient questions, establishing authority."
            }
        ],
        clientFeedback: {
            quote: "We used to rely entirely on word-of-mouth. Now, new patients find us on Google every day. The difference is night and day!",
            author: "Dr. Sarah Jenkins",
            role: "Owner"
        }
    },
    "google-ads": {
        id: "google-ads",
        serviceTitle: "Google Ads Management",
        title: "Proven Results: High-ROI Google Ads Campaigns",
        intro: {
            client: "Various Clients",
            problem: "Many businesses struggle with wasted ad spend, low conversion rates, and poor lead quality.",
            goal: "To implement data-driven strategies that maximize Return on Ad Spend (ROAS) and drive high-quality leads.",
        },
        beforeResults: [],
        afterResults: [],
        strategy: [
            {
                title: "Comprehensive Research",
                description: "Deep dive into keywords, competitors, and market trends to build a solid foundation."
            },
            {
                title: "Strategic Structure",
                description: "Organized campaigns with smart bidding, negative keywords, and high-quality ad copy."
            },
            {
                title: "Continuous Optimization",
                description: "Regular A/B testing, bid adjustments, and landing page audits to ensure peak performance."
            }
        ],
        methodology: [
            "Business Understanding",
            "Competitor Research",
            "Keyword Research",
            "Google Search Campaign Setup",
            "YouTube & Display Ads",
            "Conversion Tracking (GA4, GTM)",
            "Remarketing Setup",
            "Landing Page Audit",
            "A/B Testing",
            "Bidding Strategies (Max Conversions, tCPA, tROAS)",
            "Monthly Optimization & Reporting"
        ],
        subCaseStudies: [
            {
                title: "Case Study 1: E-commerce Growth",
                goal: "Increase conversions & reduce wasted spend",
                whatIDid: [
                    "Structured keyword setup",
                    "Negative keyword expansion",
                    "Smart bidding",
                    "Conversion tracking",
                    "Ad copy improvement"
                ],
                results: [
                    { metric: "Impressions", value: "2.44M" },
                    { metric: "Conversion Value", value: "$249K" },
                    { metric: "Cost per Conversion", value: "$5.64" },
                    { metric: "Total Spend", value: "$44.2K" }
                ],
                outcome: "Consistent sales growth with high ROAS.",
                image: "/Case Study 1.png"
            },
            {
                title: "Case Study 2: Low Click, High Result Strategy",
                goal: "Reduce cost, increase conversions",
                whatIDid: [
                    "Phrase + exact keyword combination",
                    "Removed low-quality traffic",
                    "Bid optimization",
                    "A/B testing"
                ],
                results: [],
                outcome: "Less clicks, less cost—more profitable conversions.",
                image: "/Case Study 2.png"
            },
            {
                title: "Case Study 3: Brand Reach + Sales",
                results: [
                    { metric: "Impressions", value: "10.8M" },
                    { metric: "Conversion Value", value: "939K" },
                    { metric: "Spend", value: "$40.9K" },
                    { metric: "Cost/Conv. Value", value: "22.98" }
                ],
                image: "/Case Study 3.png"
            },
            {
                title: "Case Study 4: Online Course",
                goal: "Generate more leads",
                whatIDid: [
                    "Performed keyword research",
                    "Restructured the campaigns",
                    "Added negative keywords",
                    "Set up conversion tracking",
                    "Optimized bidding strategies",
                    "Improved ad copy",
                    "Audited the landing page"
                ],
                results: [
                    { metric: "Impression", value: "55.9k" },
                    { metric: "Phone Call", value: "468" },
                    { metric: "Avg. CPC", value: "$4.57" },
                    { metric: "CTR", value: "4.40%" }
                ],
                outcome: "The campaign generated high-quality phone leads with improved performance and efficient cost.",
                image: "/Case Study 4.png"
            }
        ],
        proofImages: [
            "/Google Ads performance.png",
            "/additional proofs of my Google Ads performance.png",
            "/additional proofs of my Google Ads performance (2).png",
            "/additional proofs of my Google Ads performance (3).png",
            "/additional proofs of my Google Ads performance (4).png"
        ]
    },
    "facebook-ads": {
        id: "facebook-ads",
        serviceTitle: "Facebook & Instagram Ads",
        title: "Scaling E-commerce Sales to 6-Figures with Meta Ads",
        intro: {
            client: "Fashion Accessories Brand",
            problem: "Struggling to scale beyond $5k/month in revenue. Ads were breaking even but not profitable enough to grow.",
            goal: "Achieve a 4.0x ROAS (Return on Ad Spend) and scale revenue.",
        },
        beforeResults: [],
        afterResults: [],
        strategy: [
            {
                title: "Creative Testing",
                description: "Tested 20+ variations of video and image ads to find the winning hook."
            },
            {
                title: "Audience Funnels",
                description: "Created a retargeting structure to capture cart abandoners and past visitors."
            },
            {
                title: "Lookalike Audiences",
                description: "Built high-intent lookalike audiences based on customer purchase data."
            }
        ],
        methodology: [
            "Pixel & CAPI Setup",
            "Audience Research & Segmentation",
            "Creative Strategy & Hooks",
            "Full-Funnel Campaign Structure",
            "Retargeting & DPA Setup",
            "A/B Testing (Creatives & Audiences)",
            "Scaling & Budget Optimization"
        ],
        subCaseStudies: [
            {
                title: "Campaign 1: Scaling Revenue",
                goal: "Scale sales while maintaining profitability",
                whatIDid: [
                    "Audience Segmentation",
                    "Creative Testing (Video vs Static)",
                    "Lookalike Scaling"
                ],
                results: [
                    { metric: "Revenue", value: "$53.4K" },
                    { metric: "ROAS", value: "4.5x" }
                ],
                outcome: "Successfully scaled revenue with high ROAS.",
                image: "/fbads1.jpeg"
            },
            {
                title: "Campaign 2: Retargeting Setup",
                goal: "Recover abandoned carts & boost LTV",
                whatIDid: [
                    "Dynamic Product Ads (DPA)",
                    "Catalog Setup",
                    "Advanced Retargeting Funnel"
                ],
                results: [
                    { metric: "Rec. Revenue", value: "$12K" },
                    { metric: "CPA", value: "$8.50" }
                ],
                outcome: "Recovered lost sales efficiently.",
                image: "/fbads2.jpeg"
            },
            {
                title: "Campaign 3: Lead Generation",
                goal: "Result-driven Strategy",
                whatIDid: [
                    "Lead Form Optimization",
                    "Targeting Refinement",
                    "Offer Optimization"
                ],
                results: [
                    { metric: "Leads", value: "150+" },
                    { metric: "Cost/Lead", value: "$2.80" }
                ],
                outcome: "Consistent lead flow at low cost.",
                image: "/fbads3.jpeg"
            }
        ],
        proofImages: [
            "/fbads1.jpeg",
            "/fbads2.jpeg",
            "/fbads3.jpeg",
            "/fbadskidstoybusiness.jpeg",
            "/fbadswomensclothing.jpeg"
        ],
        clientFeedback: {
            quote: "Our sales exploded within the first two months. The ROI has been incredible.",
            author: "Michael T.",
            role: "Marketing Director"
        }
    },
    "social-media-management": {
        id: "social-media-management",
        serviceTitle: "Social Media Management",
        title: "Growing Brand Community from Scratch",
        intro: {
            client: "Lifestyle Beverage Startup",
            problem: "Had a great product but zero online presence. No community, no engagement, and inconsistent posting.",
            goal: "Build a loyal community and reach 10k followers across platforms in 6 months.",
        },
        beforeResults: [
            { metric: "Total Followers", value: "150" },
            { metric: "Engagement Rate", value: "< 1%" },
            { metric: "Posts per week", value: "Irregular" },
        ],
        afterResults: [
            { metric: "Total Followers", value: "12,400" },
            { metric: "Engagement Rate", value: "5.6%" },
            { metric: "Posts per week", value: "5 (Consistent)" },
        ],
        strategy: [
            {
                title: "Visual Identity",
                description: "Established a cohesive aesthetic that resonated with the target Gen-Z demographic."
            },
            {
                title: "Interactive Content",
                description: "Used polls, stories, and UGC contests to spark conversation and engagement."
            },
            {
                title: "Influencer Collaboration",
                description: "Partnered with micro-influencers to amplify brand reach authentically."
            }
        ]
    },
    "email-marketing": {
        id: "email-marketing",
        serviceTitle: "Email Marketing & Automation",
        title: "Generating DKK 297k+ Revenue with Advanced Email Flows",
        intro: {
            client: "E-commerce Brand (HOCL.dk)",
            problem: "Client had a growing email list but sent sporadic, unoptimized newsletters. They were missing out on revenue from abandoned carts and new subscriber welcomes.",
            goal: "Set up a robust Mailchimp automation system to nurture leads and recover lost sales automatically.",
        },
        beforeResults: [
            { metric: "Open Rate", value: "12%" },
            { metric: "Click-Through Rate", value: "1.5%" },
            { metric: "Revenue from Email", value: "< 5%" },
        ],
        afterResults: [
            { metric: "Open Rate", value: "37%+" },
            { metric: "Click-Through Rate", value: "4.8%" },
            { metric: "Revenue Growth", value: "+94.8%" },
        ],
        strategy: [
            {
                title: "Automated Flows Setup",
                description: "Created Welcome Series and Abandoned Cart flows to engage users at critical touchpoints."
            },
            {
                title: "Segmentation & Personalization",
                description: "Segmented the audience based on purchase behavior to send relevant, high-converting offers."
            },
            {
                title: "Responsive Design Overhaul",
                description: "Designed mobile-friendly, visually appealing templates that improved readability and click-throughs."
            }
        ],
        methodology: [
            "Account Audit & Cleanup",
            "Template Design (Mobile Responsive)",
            "Automation Setup (Welcome, Abandoned Cart)",
            "List Segmentation",
            "A/B Testing Subject Lines",
            "Campaign Scheduling",
            "Performance Reporting"
        ],
        subCaseStudies: [
            {
                title: "Welcome Automation Flow",
                goal: "Convert new subscribers into first-time buyers",
                whatIDid: [
                    "Designed 3-part welcome series",
                    "Offer integration",
                    "Personalized subject lines"
                ],
                results: [
                    { metric: "Open Rate", value: "74.2%" },
                    { metric: "CTR", value: "19.8%" },
                    { metric: "Revenue", value: "DKK 38K" }
                ],
                outcome: "A single automation generated consistent passive revenue.",
                image: "/emailmarketing2.png"
            },
            {
                title: "Year-to-Date Growth",
                goal: "Scale email revenue channel",
                whatIDid: [
                    "Consistent newsletter schedule",
                    "List hygiene",
                    "Content optimization"
                ],
                results: [
                    { metric: "Revenue", value: "DKK 297K" },
                    { metric: "Growth", value: "+94.8%" },
                    { metric: "Open Rate", value: "37.1%" }
                ],
                outcome: "Email became a primary revenue driver for the business.",
                image: "/emailmarketing1.png"
            },
            {
                title: "Campaign Optimization",
                goal: "Improve deliverability and engagement",
                whatIDid: [
                    "Spam test optimization",
                    "Send time optimization",
                    "Subject line testing"
                ],
                results: [
                    { metric: "Delivery Rate", value: "99.7%" },
                    { metric: "Open Rate", value: "42.8%" },
                    { metric: "Click Rate", value: "2.4%" }
                ],
                outcome: "Achieved industry-leading open ratings and delivery.",
                image: "/emailmarketing.png"
            }
        ],
        proofImages: [
            "/emailmarketing.png",
            "/emailmarketing1.png",
            "/emailmarketing2.png",
            "/emailmarketing3.png",
            "/emailmarketing4.png"
        ],
        clientFeedback: {
            quote: "The automation runs itself and brings in sales while I sleep. Best investment we've made.",
            author: "Sarah K.",
            role: "Founder"
        }
    }
};
