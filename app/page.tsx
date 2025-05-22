import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Pizza Dash</span>
          </div>
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <div className="rounded-full bg-primary p-6">
            <Pizza className="h-16 w-16 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Pizza Delivery Dashboard
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            A beautiful dashboard to manage your pizza delivery business. Track orders,
            monitor deliveries, and keep your customers happy.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pizza Dashboard. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}