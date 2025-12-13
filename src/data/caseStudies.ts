
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
        title: "Reducing Cost Per Lead by 65% for a SaaS Company",
        intro: {
            client: "B2B SaaS Provider",
            problem: "The client was running ads but burning budget on irrelevant clicks. Their cost per lead (CPL) was unsustainable at over $150.",
            goal: "Optimize campaign structure to lower CPL below $60 and increase lead quality.",
        },
        beforeResults: [
            { metric: "Cost Per Lead (CPL)", value: "$152.00" },
            { metric: "Conversion Rate", value: "1.2%" },
            { metric: "Wasted Spend", value: "~40%" },
        ],
        afterResults: [
            { metric: "Cost Per Lead (CPL)", value: "$48.50" },
            { metric: "Conversion Rate", value: "4.8%" },
            { metric: "Lead Volume", value: "+210% increase" },
        ],
        strategy: [
            {
                title: "Keyword Cleanup",
                description: "Added extensive negative keyword lists to stop paying for irrelevant searches."
            },
            {
                title: "Landing Page Optimization",
                description: "Redesigned the landing page to match ad copy, improving Quality Score and conversion rates."
            },
            {
                title: "Smart Bidding",
                description: "Switched to Target CPA bidding to let Google's AI optimize for conversions within our budget."
            }
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
        beforeResults: [
            { metric: "Monthly Revenue", value: "$4,800" },
            { metric: "ROAS", value: "1.8x" },
            { metric: "Click-Through Rate", value: "0.9%" },
        ],
        afterResults: [
            { metric: "Monthly Revenue", value: "$28,500" },
            { metric: "ROAS", value: "4.2x" },
            { metric: "Click-Through Rate", value: "2.1%" },
        ],
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
    "digital-strategy": {
        id: "digital-strategy",
        serviceTitle: "Full Digital Strategy",
        title: "Holistic Transformation: From Offline to Online Dominance",
        intro: {
            client: "Traditional Retail Chain",
            problem: "Sales were declining in physical stores. They had no cohesive digital strategy and disjointed marketing efforts.",
            goal: "Digitize the business model and create an omnichannel marketing machine.",
        },
        beforeResults: [
            { metric: "Online Sales share", value: "5%" },
            { metric: "Customer Acquisition Cost", value: "Unknown/High" },
            { metric: "Email Open Rate", value: "12%" },
        ],
        afterResults: [
            { metric: "Online Sales share", value: "35%" },
            { metric: "Customer Acquisition Cost", value: "Tracked & Lowered" },
            { metric: "Email Open Rate", value: "28%" },
        ],
        strategy: [
            {
                title: "Omnichannel Integration",
                description: "Connected POS data with online marketing to retarget in-store shoppers online."
            },
            {
                title: "Data-Driven Decisions",
                description: "Implemented a dashboard to track KPIs across all channels in real-time."
            },
            {
                title: "Lifecycle Marketing",
                description: "Developed automated email flows to nurture leads and retain customers."
            }
        ],
        clientFeedback: {
            quote: "This strategy didn't just change our marketing; it saved our business.",
            author: "David R.",
            role: "CEO"
        }
    },
    "email-marketing": {
        id: "email-marketing",
        serviceTitle: "Email Marketing & Automation",
        title: "Driving 30% More Sales with Automated Email Flows",
        intro: {
            client: "E-commerce Startup",
            problem: "Client had a growing email list but sent sporadic, unoptimized newsletters. They were missing out on revenue from abandoned carts and new subscriber welcomes.",
            goal: "Set up a robust Mailchimp automation system to nurture leads and recover lost sales automatically.",
        },
        beforeResults: [
            { metric: "Open Rate", value: "12%" },
            { metric: "Click-Through Rate", value: "1.5%" },
            { metric: "Revenue from Email", value: "< 5%" },
        ],
        afterResults: [
            { metric: "Open Rate", value: "35%" },
            { metric: "Click-Through Rate", value: "4.8%" },
            { metric: "Revenue from Email", value: "22%" },
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
        clientFeedback: {
            quote: "The automation runs itself and brings in sales while I sleep. Best investment we've made.",
            author: "Sarah K.",
            role: "Founder"
        }
    }
};
