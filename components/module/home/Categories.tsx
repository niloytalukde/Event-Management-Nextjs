
import { 
  Music, 
  Dumbbell, 
  Gamepad2, 
  UtensilsCrossed, 
  Palette, 
  Laptop, 
  Mountain, 
  Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const categories = [
  { id: 'music', label: 'Music & Concerts', icon: Music, color: 'bg-category-music', count: 48 },
  { id: 'sports', label: 'Sports & Fitness', icon: Dumbbell, color: 'bg-category-sports', count: 65 },
  { id: 'gaming', label: 'Gaming & Esports', icon: Gamepad2, color: 'bg-category-gaming', count: 32 },
  { id: 'food', label: 'Food & Dining', icon: UtensilsCrossed, color: 'bg-category-food', count: 54 },
  { id: 'art', label: 'Art & Culture', icon: Palette, color: 'bg-category-art', count: 28 },
  { id: 'tech', label: 'Tech Meetups', icon: Laptop, color: 'bg-category-tech', count: 41 },
  { id: 'travel', label: 'Travel & Adventure', icon: Mountain, color: 'bg-category-travel', count: 37 },
  { id: 'social', label: 'Social Gatherings', icon: Users, color: 'bg-category-social', count: 89 },
];

export function Categories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find events that match your interests. From live music to tech meetups, 
            there&apos;s something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/`}
              className="group"
            >
              <div className="glass rounded-xl p-6 text-center transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/50">
                <div className={cn(
                  "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110",
                  category.color
                )}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-semibold mb-1">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.count} events</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
