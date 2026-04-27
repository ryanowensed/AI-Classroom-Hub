/* ============================================================
   SubscribeForm — Reusable newsletter subscription component
   Connects to Resend via tRPC backend
   audience: "office-hours" | "general"
   ============================================================ */

import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface SubscribeFormProps {
  audience?: "office-hours" | "general";
  placeholder?: string;
  buttonText?: string;
  showFirstName?: boolean;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export default function SubscribeForm({
  audience = "office-hours",
  placeholder = "your@email.com",
  buttonText = "Subscribe Free",
  showFirstName = false,
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const officeHoursMutation = trpc.newsletter.subscribeOfficeHours.useMutation({
    onSuccess: (data) => {
      setSubscribed(true);
      setEmail("");
      setFirstName("");
      toast.success(data.message || "You're subscribed!", {
        description: "Check your inbox for a confirmation email.",
      });
    },
    onError: (err) => {
      toast.error("Subscription failed", {
        description: err.message || "Please try again.",
      });
    },
  });

  const generalMutation = trpc.newsletter.subscribeGeneral.useMutation({
    onSuccess: (data) => {
      setSubscribed(true);
      setEmail("");
      setFirstName("");
      toast.success(data.message || "You're subscribed!", {
        description: "Check your inbox for a confirmation email.",
      });
    },
    onError: (err) => {
      toast.error("Subscription failed", {
        description: err.message || "Please try again.",
      });
    },
  });

  const mutation = audience === "office-hours" ? officeHoursMutation : generalMutation;
  const isLoading = mutation.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (audience === "office-hours") {
      officeHoursMutation.mutate({ email: email.trim(), firstName: firstName.trim() });
    } else {
      generalMutation.mutate({ email: email.trim(), firstName: firstName.trim() });
    }
  };

  if (subscribed) {
    return (
      <div className={`flex items-center gap-2 text-sm font-semibold font-display text-green-600 ${className}`}>
        <CheckCircle size={16} />
        You're subscribed! Check your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-2 ${className}`}>
      {showFirstName && (
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          className={`px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ${inputClassName}`}
        />
      )}
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ${inputClassName}`}
        />
        <button
          type="submit"
          disabled={isLoading || !email.trim()}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold font-display transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${buttonClassName}`}
        >
          {isLoading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <>
              {buttonText} <ArrowRight size={13} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
