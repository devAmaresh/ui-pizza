"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle, FcLeft } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Pizza } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-radial-light dark:bg-radial-dark p-4">
      <Toaster />
      <div className="w-full max-w-md space-y-8 bg-card/80 dark:bg-card/70 shadow-2xl rounded-2xl p-8 border border-border backdrop-blur-md">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-primary p-4 mb-4">
            <Pizza className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Sign in to Pizza Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Manage your pizza orders and deliveries
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            variant="outline"
            className="flex items-center justify-center gap-2 p-6 w-full"
          >
            <FcGoogle className="h-5 w-5" />
            <span>Sign in with Google</span>
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            className="flex items-center justify-center gap-2 p-6 w-full"
          >
            <FcLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
