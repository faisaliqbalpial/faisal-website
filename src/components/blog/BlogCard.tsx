import { BlogPost } from "@/data/blogPosts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 z-20 bg-primary/90 hover:bg-primary text-primary-foreground border-none">
                    {post.category}
                </Badge>
            </div>

            <CardHeader className="space-y-2 pb-2">
                <div className="flex items-center text-xs text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </Link>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                </p>
            </CardContent>

            <CardFooter className="pt-0">
                <Button asChild variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent group/btn">
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};
