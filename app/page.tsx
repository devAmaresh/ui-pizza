"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Pizza, ChevronRight, Moon, Sun, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SessionContext, useSession } from "next-auth/react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { data: session } = useSession();
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/50 overflow-x-hidden">
      {/* Hero pattern background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <header className="border-b border-border/40 backdrop-blur-sm bg-background/60 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-sm"></div>
              <div className="relative rounded-full bg-background p-1.5">
                <Pizza className="h-6 w-6 text-primary" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">PizzaDash</span>
          </div>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 transition-all" />
                ) : (
                  <Moon className="h-5 w-5 transition-all" />
                )}
              </Button>
            )}
            <Button asChild className="rounded-full">
              <Link href="/login">
                {session ? (
                  <span className="flex items-center gap-2">
                    <Pizza className="h-4 w-4" />
                    Dashboard
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Pizza className="h-4 w-4" />
                    Sign In
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section */}
        <section className="py-8 md:pb-24 pt-16 md:pt-12">
          <div className="container mx-auto px-5 md:px-6 lg:px-14 xl:px-20 max-w-8xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-start pt-8 md:pt-0 space-y-4">
                {/* Add negative margin top to raise text higher */}
                <div className="space-y-2 -mt-5 md:mt-10">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Pizza Management Platform
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl break-words hyphens-auto">
                    Manage Your Pizza Business with Ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Track orders, manage deliveries, and boost customer
                    satisfaction with our all-in-one pizza dashboard.
                  </p>
                </div>

                {/* Keep buttons and avatars at the same position */}
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="rounded-full gap-1 group" asChild>
                    <Link href="/login">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                    asChild
                  >
                    <Link href="#features">See Features</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br ${
                          [
                            "from-indigo-500 to-purple-500",
                            "from-blue-500 to-teal-500",
                            "from-amber-500 to-orange-500",
                            "from-green-500 to-emerald-500",
                          ][i - 1]
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="text-muted-foreground">
                    Used by 1000+ pizza businesses
                  </div>
                </div>
              </div>

              {/* Image column - adjust vertical alignment */}
              <div className="relative hidden lg:block lg:self-center">
                <div className="absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl max-w-full md:block hidden"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Pizza dashboard visualization"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/70">
                          Today&apos;s Revenue
                        </div>
                        <div className="text-2xl font-bold text-white">
                          $3,245.80
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                        <Pizza className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                      <div className="h-full w-3/4 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 max-w-8xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need for Pizza Management
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dashboard offers powerful tools to streamline your pizza
                  delivery operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Order Tracking",
                  description:
                    "Real-time tracking of all pizza orders from preparation to delivery.",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  title: "Customer Management",
                  description:
                    "Maintain customer profiles, preferences, and order history.",
                  gradient: "from-violet-500 to-purple-500",
                },
                {
                  title: "Driver Dispatch",
                  description:
                    "Optimize delivery routes and manage driver assignments.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Analytics & Reports",
                  description:
                    "Comprehensive insights into sales, popular items, and delivery performance.",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  title: "Inventory Control",
                  description:
                    "Track ingredient usage and get alerts when supplies run low.",
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  title: "Multi-platform Access",
                  description:
                    "Access your dashboard from anywhere on any device.",
                  gradient: "from-red-500 to-orange-500",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-md transition-all hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 -z-10 opacity-0 blur-xl transition-all group-hover:opacity-20 group-hover:blur-2xl bg-gradient-to-br ${feature.gradient}`}
                  ></div>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient}`}
                  >
                    <Pizza className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-8xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-2xl bg-primary/10 p-px">
                <div className="rounded-[calc(1rem-1px)] bg-gradient-to-b from-background via-background to-background/80 p-8 md:p-12 lg:p-16 backdrop-blur-md">
                  <div className="mx-auto max-w-3xl space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Boost Your Pizza Business?
                      </h2>
                      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Join thousands of pizza businesses that use our
                        dashboard to increase efficiency and customer
                        satisfaction.
                      </p>
                    </div>
                    <div className="mx-auto max-w-sm space-y-4">
                      <Button size="lg" className="w-full rounded-full" asChild>
                        <Link href="/login">Get Started Now</Link>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        No credit card required. Start with a free 14-day trial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 md:py-12 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Pizza className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">PizzaDash</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PizzaDash. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
