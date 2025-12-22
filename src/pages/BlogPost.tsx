import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find the post
    const post = blogPosts.find(p => p.slug === slug);

    // SEO and Redirect
    useEffect(() => {
        if (!post) {
            // If no post found, we might want to redirect or show 404
            // For now, let's just let it render the "not found" state
            return;
        }

        document.title = `${post.title} - Faisal Iqbal`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", post.excerpt);
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }, [post]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
    };

    if (!post) {
        return (
            <Layout>
                <div className="container-custom py-24 text-center">
                    <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="min-h-screen">
                {/* Header / Hero */}
                <div className="bg-secondary/30 pt-24 pb-12 md:pt-32 md:pb-16 px-4">
                    <div className="container-custom max-w-4xl">
                        <Button
                            variant="ghost"
                            asChild
                            className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors"
                        >
                            <Link to="/blog" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Blog
                            </Link>
                        </Button>

                        <Badge className="mb-4 bg-primary/90 hover:bg-primary">{post.category}</Badge>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="font-medium text-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container-custom max-w-4xl mt-[-3rem] md:mt-[-4rem] mb-12 px-4 relative z-10">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-white/20">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="container-custom max-w-3xl px-4 pb-16">
                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <Separator className="my-12" />

                    {/* Share & Tags */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
                        <h4 className="font-semibold">Share this article:</h4>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="icon" onClick={handleShare} title="Copy Link">
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                                    <Twitter className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <NewsletterSignup />
                </div>
            </article>
        </Layout>
    );
}
