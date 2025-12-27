import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
    return (
        <section className="py-8 container-custom px-4 md:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-green-200/60 bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-background p-6 md:p-10 shadow-sm transition-all hover:shadow-md">

                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Left Content: Headline & Price */}
                    <div className="lg:col-span-7 space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 text-green-700 text-xs font-bold uppercase tracking-wide border border-green-200">
                            <Sparkles size={12} className="fill-green-600 text-green-600" />
                            Most Popular Offer
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Fully Custom-Coded <br className="hidden sm:block" />
                            <span className="text-green-700">Portfolio Website</span>
                        </h2>

                        <div className="flex flex-wrap items-center gap-4 py-2">
                            <span className="text-4xl md:text-5xl font-extrabold text-green-600 tracking-tight">$99</span>

                            <div className="h-10 w-px bg-green-200 mx-1 hidden sm:block"></div>

                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">Limited Time</span>
                                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                                    <Clock size={16} className="text-green-600" />
                                    <span>72-Hour Delivery</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1 pt-2">
                            <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                                Note: Client must provide Domain and Hosting (not included in the $99 service fee).
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                                Excludes SEO and additional marketing services.
                            </p>
                        </div>
                    </div>

                    {/* Right Content: Features & CTA */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-green-100 shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                Included Features
                                <span className="h-px flex-1 bg-green-100"></span>
                            </h3>

                            <ul className="space-y-3 mb-6">
                                {[
                                    "Google Tag Manager Setup",
                                    "FB Pixel Integration",
                                    "Google Search Console Setup"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                                        <div className="mt-0.5 min-w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3">
                                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200 hover:shadow-green-300/50 transition-all duration-300 h-12 text-base group">
                                    <Link to="/contact">
                                        Book This Service
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>

                                <Button asChild variant="outline" size="lg" className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 h-12 text-base">
                                    <a
                                        href="https://wa.me/8801951336251"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
