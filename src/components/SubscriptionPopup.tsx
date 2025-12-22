import { useState, useEffect, useRef } from "react";
import { X, Gift, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function SubscriptionPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDidmissed, setIsDismissed] = useState(false);
    // Track if user has interacted to stop the auto-close timer
    const [hasInteracted, setHasInteracted] = useState(false);
    const [email, setEmail] = useState("");

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Check localStorage
        const dismissed = localStorage.getItem("subscription_popup_dismissed");
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        // Delay initial appearance slightly for better UX (e.g., 1 second after load)
        const appearTimer = setTimeout(() => {
            setIsOpen(true);

            // Start auto-close timer only if not dismissed and not interacted
            timerRef.current = setTimeout(() => {
                if (!hasInteracted) {
                    handleClose();
                }
            }, 3000); // 3 seconds auto-close
        }, 1000);

        return () => {
            clearTimeout(appearTimer);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Stop timer on interaction
    const handleInteraction = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        // Persist dismissal
        localStorage.setItem("subscription_popup_dismissed", "true");
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || "Subscribed successfully! The coupon code is coupon10");
                handleClose();
            } else {
                throw new Error(data.error || "Failed to subscribe");
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen || isDidmissed) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={handleInteraction} // Any click on the overlay counts as interaction? user said "interact", usually means with the content. 
        // Actually if user clicks overlay it usually closes in modals.
        // But here user wants "auto-close if NO interaction". 
        // If I interpret "interaction" as "engaging with the popup", clicking outside might count as "ignoring" -> let it close or manually close?
        // Standard modal behavior: clicking outside closes.
        // I'll make the content the interaction zone.
        >
            <div
                className={cn(
                    "relative w-full max-w-md bg-background rounded-xl shadow-2xl overflow-hidden border border-border",
                    "animate-in zoom-in-95 duration-300 slide-in-from-bottom-10"
                )}
                onMouseEnter={handleInteraction}
                onTouchStart={handleInteraction}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent closing if we implemented overlay click to close
                    handleInteraction();
                }}
            >
                {/* Decorative Top Gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-4 text-muted-foreground hover:text-foreground z-10"
                    onClick={handleClose}
                >
                    <X className="w-4 h-4" />
                    <span className="sr-only">Close</span>
                </Button>

                <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 animate-bounce">
                        <Gift className="w-8 h-8 text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight">
                            Get 10% Off!
                        </h3>
                        <p className="text-muted-foreground">
                            Sign up to get 10% discount coupon on your first order!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-3 mt-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                handleInteraction();
                                setEmail(e.target.value);
                            }}
                            className="w-full"
                            required
                        />
                        <Button type="submit" className="w-full font-semibold group" disabled={isSubmitting}>
                            {isSubmitting ? "Subscribing..." : (
                                <>
                                    Get My Coupon
                                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground mt-4">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}
