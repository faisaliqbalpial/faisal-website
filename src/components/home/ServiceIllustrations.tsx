
import React from 'react';

export const SeoIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="120" rx="8" className="fill-blue-500/10 dark:fill-blue-400/10" />
        <rect x="20" y="20" width="160" height="24" rx="8" className="fill-blue-500/20 dark:fill-blue-400/20" />
        <circle cx="35" cy="32" r="4" className="fill-blue-500/40" />
        <circle cx="50" cy="32" r="4" className="fill-blue-500/40" />
        <rect x="35" y="60" width="100" height="8" rx="4" className="fill-blue-500/20" />
        <rect x="35" y="80" width="130" height="8" rx="4" className="fill-blue-500/10" />
        <rect x="35" y="100" width="90" height="8" rx="4" className="fill-blue-500/10" />
        {/* Graph line */}
        <path d="M35 125 L65 115 L95 120 L125 95 L155 105" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/40" />
        <circle cx="155" cy="105" r="3" className="fill-blue-500" />
    </svg>
);

export const GoogleAdsIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Browser Card */}
        <rect x="30" y="30" width="140" height="100" rx="8" className="fill-orange-500/10 dark:fill-orange-400/10" />
        {/* Ad Badge */}
        <rect x="45" y="50" width="30" height="12" rx="4" className="fill-orange-500/30" />
        <rect x="85" y="52" width="60" height="8" rx="4" className="fill-orange-500/10" />
        {/* Content lines */}
        <rect x="45" y="75" width="110" height="8" rx="4" className="fill-orange-500/10" />
        <rect x="45" y="95" width="80" height="8" rx="4" className="fill-orange-500/10" />
        {/* Cursor & Click */}
        <path d="M120 110 L125 125 L130 120 L138 128" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600/60" />
        <circle cx="120" cy="110" r="10" className="stroke-orange-500/40" strokeWidth="2" />
    </svg>
);

export const MetaAdsIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Post Card */}
        <rect x="40" y="20" width="120" height="120" rx="12" className="fill-indigo-500/10 dark:fill-indigo-400/10" />
        {/* Header */}
        <circle cx="65" cy="45" r="10" className="fill-indigo-500/20" />
        <rect x="85" y="40" width="50" height="8" rx="4" className="fill-indigo-500/20" />
        {/* Image Area */}
        <rect x="55" y="65" width="90" height="40" rx="4" className="fill-indigo-500/10" />
        {/* Interaction Buttons */}
        <circle cx="65" cy="120" r="6" className="fill-indigo-500/30" />
        <circle cx="85" cy="120" r="6" className="fill-indigo-500/10" />
        <circle cx="105" cy="120" r="6" className="fill-indigo-500/10" />
        {/* Floating elements */}
        <circle cx="150" cy="50" r="15" className="fill-purple-500/10 animate-pulse" />
        <rect x="25" y="100" width="30" height="30" rx="8" className="fill-purple-500/10 -rotate-12" />
    </svg>
);

export const SocialMediaIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mobile Screen */}
        <rect x="65" y="15" width="70" height="130" rx="10" className="fill-pink-500/5 dark:fill-pink-400/5 stroke-pink-500/20" strokeWidth="2" />
        {/* Chat Bubbles */}
        <path d="M75 45 H110 C115 45 115 45 115 50 V60 C115 65 110 65 110 65 H75 C70 65 70 65 70 60 V50 C70 45 75 45 75 45 Z" className="fill-pink-500/20" />
        <path d="M85 75 H120 C125 75 125 75 125 80 V90 C125 95 120 95 120 95 H85 C80 95 80 95 80 90 V80 C80 75 85 75 85 75 Z" className="fill-pink-500/10" />
        {/* Hearts */}
        <path d="M145 40 Q155 30 165 40 T165 55 L155 65 L145 55 Q135 45 145 40" className="fill-rose-500/20" />
        <path d="M40 90 Q50 80 60 90 T60 105 L50 115 L40 105 Q30 95 40 90" className="fill-rose-500/20" />
    </svg>
);

export const DigitalStrategyIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chess Board / Grid */}
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500/10" />
            </pattern>
        </defs>
        <rect width="200" height="160" fill="url(#grid)" opacity="0.5" />

        {/* Strategy Nodes */}
        <circle cx="50" cy="110" r="8" className="fill-emerald-500/30" />
        <circle cx="100" cy="60" r="10" className="fill-emerald-500/30" />
        <circle cx="150" cy="90" r="8" className="fill-emerald-500/30" />

        {/* Connecting Lines */}
        <path d="M50 110 L100 60 L150 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-emerald-500/30" />

        {/* Pawn/Goal */}
        <path d="M95 50 L105 50 L100 40 Z" className="fill-emerald-600/40" />
    </svg>
);

export const EmailMarketingIllustration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope Back */}
        <path d="M40 50 L100 90 L160 50 V110 C160 115 155 120 150 120 H50 C45 120 40 115 40 110 V50 Z" className="fill-amber-500/10 dark:fill-amber-400/10" />
        {/* Paper */}
        <rect x="50" y="30" width="100" height="60" className="fill-amber-500/5" />
        <rect x="60" y="40" width="80" height="6" rx="3" className="fill-amber-500/20" />
        <rect x="60" y="55" width="50" height="6" rx="3" className="fill-amber-500/10" />
        {/* Envelope Flap */}
        <path d="M40 50 L100 90 L160 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500/20" />

        {/* Automation Gear */}
        <circle cx="140" cy="110" r="15" className="fill-amber-500/20" />
        <circle cx="140" cy="110" r="5" className="fill-background" />
    </svg>
);
