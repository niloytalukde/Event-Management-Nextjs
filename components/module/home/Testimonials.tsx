import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Music Enthusiast',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    content: 'I moved to a new city and had no one to go to concerts with. EventBuddy helped me find amazing people who share my taste in music. Now I have a whole crew!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica Park',
    role: 'Adventure Seeker',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    content: 'The hiking trips I\'ve joined through this platform have been incredible. The hosts are super organized and the people I\'ve met have become close friends.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Brown',
    role: 'Tech Professional',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    content: 'As an introvert, I found it hard to network at tech events. EventBuddy made it easy to find smaller, more intimate meetups where I could actually connect.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
      </div>

      <div className="container relative mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Real stories from real people who found their event buddies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              
              <p className="text-secondary-foreground/90 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <Image
                height={50}
                width={50}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <p className="font-display font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-secondary-foreground/70">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
