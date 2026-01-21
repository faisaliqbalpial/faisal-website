import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, AlertCircle, Quote, Maximize2, X, Award } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function ServiceCaseStudy() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const study = slug ? caseStudies[slug] : undefined;

    useEffect(() => {
        if (slug === "digital-strategy") {
            navigate("/services", { replace: true });
        } else if (!study) {
            navigate("/404");
        }
    }, [study, slug, navigate]);

    if (!study) return null;

    return (
        <Layout>
            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 transition-all duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Full proof"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-primary/20"
                        />
                    </div>
                </div>
            )}

            {/* Breadcrumb & Navigation */}
            <section className="pt-24 pb-8 px-4 md:px-8 border-b border-border bg-secondary/30 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <Link to="/portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Portfolio
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-primary font-medium tracking-wide uppercase text-sm">{study.serviceTitle}</span>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                                    <Award size={10} />
                                    VERIFIED RESULTS
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mt-2 animate-fade-in-up">
                                {study.title}
                            </h1>
                        </div>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* Intro Section */}
            <section className="py-6 md:py-10 px-4 md:px-8">
                <div className="container-custom max-w-4xl">
                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <span className="text-sm text-muted-foreground block mb-1">Client Profile</span>
                                <p className="font-medium">{study.intro.client}</p>
                            </div>
                            <div className="md:col-span-2">
                                <span className="text-sm text-muted-foreground block mb-1">The Challenge</span>
                                <p className="text-muted-foreground">{study.intro.problem}</p>
                            </div>
                            <div className="md:col-span-3 pt-4 border-t border-border">
                                <span className="text-sm text-muted-foreground block mb-1">The Goal</span>
                                <p className="font-medium text-lg">{study.intro.goal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before & After Results */}
            {study.beforeResults && study.beforeResults.length > 0 && (
                <section className="py-8 px-4 md:px-8 bg-secondary/20">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold text-center mb-8">The Transformation</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Before */}
                            <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <AlertCircle size={120} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                                            <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Before</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {study.beforeResults.map((item, idx) => (
                                            <div key={idx} className="bg-white/60 dark:bg-black/20 backdrop-blur-sm p-4 rounded-lg flex justify-between items-center">
                                                <span className="text-muted-foreground">{item.metric}</span>
                                                <span className="font-bold text-red-700 dark:text-red-300">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-green-50/50 dark:bg-green-950/10 border border-green-100 dark:border-green-900/30 rounded-xl p-8 relative overflow-hidden shadow-lg transform md:-translate-y-4 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp size={120} className="text-green-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                                            <TrendingUp size={20} className="text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-900 dark:text-red-100">After Results</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {study.afterResults.map((item, idx) => (
                                            <div key={idx} className="bg-white/80 dark:bg-black/40 backdrop-blur-sm p-4 rounded-lg flex justify-between items-center border border-green-100 dark:border-green-900/30">
                                                <span className="text-gray-600 dark:text-gray-300">{item.metric}</span>
                                                <span className="font-bold text-green-700 dark:text-green-400 text-lg">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-8 italic">
                            * Results may vary based on industry, budget, and starting conditions.
                        </p>
                    </div>
                </section>
            )}

            {/* Detailed Case Studies */}
            {study.subCaseStudies && study.subCaseStudies.length > 0 && (
                <section className="section-padding bg-secondary/10 border-y border-border/50">
                    <div className="container-custom">
                        <div className="flex flex-col items-center mb-12">
                            <h2 className="text-3xl font-bold text-center mb-4">Specific Projects & Wins</h2>
                            <div className="h-1 w-20 bg-primary/20 rounded-full" />
                        </div>
                        <div className="grid gap-12">
                            {study.subCaseStudies.map((subStudy, index) => (
                                <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row hover:shadow-md transition-shadow group">
                                    <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                                        <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                                            Case Study {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-6">{subStudy.title}</h3>
                                        <div className="space-y-6">
                                            {subStudy.goal && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Goal</h4>
                                                    <p className="font-medium text-lg">{subStudy.goal}</p>
                                                </div>
                                            )}
                                            {subStudy.whatIDid && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">What I Did</h4>
                                                    <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                                                        {subStudy.whatIDid.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                                <CheckCircle size={14} className="mt-1 text-primary shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {subStudy.outcome && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Outcome</h4>
                                                    <p className="font-medium text-primary text-lg">{subStudy.outcome}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="lg:w-1/2 bg-muted relative min-h-[350px] cursor-zoom-in"
                                        onClick={() => subStudy.image && setSelectedImage(subStudy.image)}
                                    >
                                        {subStudy.image ? (
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img
                                                    src={subStudy.image}
                                                    alt={subStudy.title}
                                                    className="w-full h-full object-contain bg-neutral-900 group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <div className="p-3 rounded-full bg-primary text-white shadow-xl">
                                                        <Maximize2 size={24} />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-8">
                                                <span>No Image Available</span>
                                            </div>
                                        )}
                                        {/* Overlay stats if image exists and results are present */}
                                        {subStudy.image && subStudy.results && subStudy.results.length > 0 && (
                                            <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-md p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 z-10">
                                                {subStudy.results.map((res, i) => (
                                                    <div key={i} className="text-center text-white">
                                                        <div className="font-bold text-lg md:text-xl text-primary-foreground">{res.value}</div>
                                                        <div className="text-[10px] md:text-xs text-white/70 uppercase truncate">{res.metric}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Strategy Section */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Strategy</h2>
                    <div className="space-y-6">
                        {study.strategy.map((strat, index) => (
                            <div key={index} className="flex gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shadow-sm border border-primary/10">
                                        {index + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{strat.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{strat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            {study.methodology && study.methodology.length > 0 && (
                <section className="section-padding bg-secondary/5">
                    <div className="container-custom max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">How I Deliver Success</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {study.methodology.map((step, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                                    <div className="p-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <CheckCircle size={18} />
                                    </div>
                                    <span className="font-medium group-hover:text-primary transition-colors">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Proof Images Section */}
            {study.proofImages && study.proofImages.length > 0 && (
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="flex flex-col items-center mb-10">
                            <h2 className="text-3xl font-bold text-center mb-4">Proof of Performance</h2>
                            <p className="text-muted-foreground text-center max-w-2xl">
                                Real dashboard screenshots and ranking reports from current and past clients.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {study.proofImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in group bg-card relative"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="overflow-hidden aspect-video relative">
                                        <img
                                            src={img}
                                            alt={`Proof of performance ${index + 1}`}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).parentElement?.parentElement?.remove();
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="p-3 rounded-full bg-white text-primary shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                                                <Maximize2 size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-t border-border bg-card/50 backdrop-blur-sm flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Dashboard Ref: #{index + 1}</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-600 font-bold">LIVE DATA</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Client Feedback */}
            {study.clientFeedback && (
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container-custom max-w-3xl text-center">
                        <Quote size={40} className="text-primary/40 mx-auto mb-6" />
                        <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-8 text-foreground">
                            "{study.clientFeedback.quote}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl shadow-inner border border-primary/10">
                                {study.clientFeedback.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg">{study.clientFeedback.author}</div>
                                <div className="text-sm text-muted-foreground leading-none mt-1">{study.clientFeedback.role}</div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Want similar results for your business?</h2>
                            <p className="text-primary-foreground/90 mb-10 text-lg md:text-xl font-medium">
                                Every business is unique. Let's build a data-driven strategy tailored to your specific goals and budget.
                            </p>
                            <Button asChild size="lg" variant="secondary" className="font-bold px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-primary hover:bg-white/90">
                                <Link to="/contact">
                                    Book a Free Strategy Call
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                        {/* Decorative background effects */}
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
                    </div>
                </div>
            </section>

        </Layout>
    );
}
