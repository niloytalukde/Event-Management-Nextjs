
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary-dark to-secondary p-8 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Join the community today
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Event Buddy?
            </h2>

            <p className="text-white/80 text-lg mb-8">
              Join thousands of people who are already making memories together. 
              Sign up now and start exploring events in your area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="default" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
