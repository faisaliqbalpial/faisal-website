import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const NewsletterSignup = () => {
    return (
        <div className="rounded-xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/20">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Mail className="w-64 h-64" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
                <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Stay Ahead of the Curve
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Get the latest digital marketing insights, strategies, and tips delivered straight to your inbox. No spam, just value.
                    </p>
                </div>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-background/80 backdrop-blur-sm border-primary/20 focus-visible:ring-primary"
                    />
                    <Button type="submit" className="w-full sm:w-auto font-semibold">
                        Subscribe
                    </Button>
                </form>

                <p className="text-xs text-muted-foreground">
                    Join 800+ marketers growing their business.
                </p>
            </div>
        </div>
    );
};
