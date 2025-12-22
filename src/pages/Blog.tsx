import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

export default function Blog() {
    useEffect(() => {
        document.title = "Blog - Digital Marketing Insights | Faisal Iqbal";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Explore expert insights on SEO, Google Ads, Email Marketing, and Digital Strategy. Stay ahead with the latest digital marketing trends.");
        }
    }, []);

    return (
        <Layout>
            {/* Hero */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 bg-gradient-to-b from-secondary/50 to-background">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                        Latest Insights
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
                        Expert strategies, industry trends, and actionable tips to help you grow your digital presence.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Categories Filter could go here later */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div
                                key={post.id}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 px-4 md:px-8">
                <div className="container-custom">
                    <NewsletterSignup />
                </div>
            </section>
        </Layout>
    );
}
