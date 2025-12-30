import { Search, UserPlus, Calendar, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover Events',
    description: 'Browse hundreds of events happening near you. Filter by category, date, or location.',
    color: 'bg-primary',
  },
  {
    icon: UserPlus,
    title: 'Join or Create',
    description: 'Found something interesting? Join with one click. Or create your own event as a host.',
    color: 'bg-secondary',
  },
  {
    icon: Calendar,
    title: 'Meet & Connect',
    description: 'Show up, meet amazing people who share your interests, and enjoy the experience together.',
    color: 'bg-category-travel',
  },
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'After the event, share your experience and help build a trusted community.',
    color: 'bg-accent',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding your event buddy is easy. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="relative text-center">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-card border-2 border-primary text-xs font-bold flex items-center justify-center text-primary">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${step.color} shadow-lg`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
