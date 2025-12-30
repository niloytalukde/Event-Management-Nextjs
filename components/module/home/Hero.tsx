import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative justify-center border items-center flex h-screen  overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Users className="h-4 w-4" />
              Join 10,000+ Event Enthusiasts
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Never Experience
              <span className="text-gradient"> Amazing Events </span>
              Alone Again
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Connect with like-minded people for concerts, sports, gaming
              nights, hiking trips, and more. Find your event buddy today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground gap-2"
                >
                  Find Events
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/become-host">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Create an Event
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-md mx-auto">
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Active Events</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-secondary">
                  10K+
                </p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
