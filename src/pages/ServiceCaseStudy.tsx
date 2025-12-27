import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, AlertCircle, Quote } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function ServiceCaseStudy() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

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
            {/* Breadcrumb & Navigation */}
            <section className="pt-24 pb-8 px-4 md:px-8 border-b border-border bg-secondary/30">
                <div className="container-custom">
                    <Link to="/portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Portfolio
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-primary font-medium tracking-wide uppercase text-sm">{study.serviceTitle}</span>
                            <h1 className="text-3xl md:text-5xl font-bold mt-2 animate-fade-in-up">
                                {study.title}
                            </h1>
                        </div>
                    </div>
                </div>
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
            {study.beforeResults && study.beforeResults.length > 0 && study.afterResults && study.afterResults.length > 0 && (
                <section className="py-8 px-4 md:px-8 bg-secondary/20">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold text-center mb-8">The Transformation</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Before */}
                            <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-xl p-8 relative overflow-hidden">
// ... (rest of Before block)
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
                        <h2 className="text-3xl font-bold text-center mb-8">Detailed Case Studies</h2>
                        <div className="grid gap-8">
// ... (rest of Detailed Case Studies)
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
// ...
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            {study.methodology && study.methodology.length > 0 && (
                <section className="section-padding bg-secondary/5">
                    <div className="container-custom max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">How I Work</h2>
                        <div className="grid md:grid-cols-2 gap-4">
// ...
                        </div>
                    </div>
                </section>
            )}

            {/* Proof Images Section */}
            {study.proofImages && study.proofImages.length > 0 && (
                <section className="section-padding">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold mb-8 text-center">Proof of Performance</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// ...
                        </div>
                    </div>
                </section>
            )}

            {/* Client Feedback */}
            {study.clientFeedback && (
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container-custom max-w-3xl text-center">
                        <Quote size={40} className="text-primary/40 mx-auto mb-6" />
                        <blockquote className="text-2xl md:text-3xl font-medium leading-normal mb-8 text-foreground">
                            "{study.clientFeedback.quote}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {study.clientFeedback.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <div className="font-bold">{study.clientFeedback.author}</div>
                                <div className="text-sm text-muted-foreground">{study.clientFeedback.role}</div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-xl relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want similar results for your business?</h2>
                            <p className="text-primary-foreground/90 mb-8 text-lg">
                                Every business is unique. Let's build a strategy tailored to your specific goals and budget.
                            </p>
                            <Button asChild size="lg" variant="secondary" className="font-bold">
                                <Link to="/contact">
                                    Book a Free Strategy Call
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
                    </div>
                </div>
            </section>

        </Layout>
    );
}
