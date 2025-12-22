import { Link } from "react-router-dom";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BlogPreview = () => {
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
                        <p className="text-muted-foreground text-lg">
                            Stay updated with the latest trends and strategies in digital marketing.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:flex">
                        <Link to="/blog" className="gap-2">
                            View All Posts <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {latestPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="md:hidden text-center">
                    <Button asChild variant="outline" className="w-full">
                        <Link to="/blog" className="gap-2">
                            View All Posts <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
