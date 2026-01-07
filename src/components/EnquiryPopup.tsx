import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/lib/email-service";
import { toast } from "sonner";

// Schema matches your existing EmailJS template variables
const popupSchema = z.object({
  user_name: z.string().min(2, "Name is required"),
  user_email: z.string().email("Invalid email address"),
  user_phone: z.string().min(10, "Valid phone number required"),
  message: z.string().optional(),
});

type PopupFormData = z.infer<typeof popupSchema>;

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For animation handling

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PopupFormData>({
    resolver: zodResolver(popupSchema),
  });

  useEffect(() => {
    // 1. Check if user has already seen/closed the popup
    const hasSeenPopup = localStorage.getItem("oronex_popup_seen");

    if (!hasSeenPopup) {
      // 2. Set timer for 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Small delay to allow render before animating in
        setTimeout(() => setIsVisible(true), 50);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // Wait for fade-out
    // 3. Set flag in localStorage so it doesn't open again on refresh
    localStorage.setItem("oronex_popup_seen", "true");
  };

  const onSubmit = async (data: PopupFormData) => {
    try {
      // Align with your existing EmailJS template
      await sendEmail({
        user_name: data.user_name,
        user_email: data.user_email,
        user_phone: data.user_phone,
        message: data.message || "Requesting a Quick Consultation via Popup",
        subject: "Popup Enquiry",
        type: "Consultation Request",
      });

      toast.success("Request Received!", {
        description: "We will call you back shortly.",
      });

      reset();
      handleClose();
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-lg bg-background rounded-2xl shadow-2xl border border-primary/20 overflow-hidden transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Decorative Header */}
        <div className="bg-primary/5 p-6 pb-4 relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 text-muted-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Free Consultation
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to scale your business?
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Leave your details below and our tech experts will analyze your
            requirements for free.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 pt-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <input
                {...register("user_name")}
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              {errors.user_name && (
                <p className="text-xs text-destructive">
                  {errors.user_name.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <input
                  {...register("user_email")}
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                {errors.user_email && (
                  <p className="text-xs text-destructive">
                    {errors.user_email.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <input
                  {...register("user_phone")}
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                {errors.user_phone && (
                  <p className="text-xs text-destructive">
                    {errors.user_phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <textarea
                {...register("message")}
                rows={2}
                placeholder="Project requirements (Optional)"
                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                "Get My Free Consultation"
              )}
            </Button>

            <p className="text-[10px] text-center text-muted-foreground">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
