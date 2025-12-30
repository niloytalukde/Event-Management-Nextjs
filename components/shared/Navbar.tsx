"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Calendar, 
  Sparkles,

} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Mock auth state - replace with actual auth
// const useAuth = () => {
//   return {
//     user: null as { role: 'user' | 'host' | 'admin' } | null,
//     isAuthenticated: false,
//     logout: () => {},
//   };
// };

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = typeof window !== 'undefined' ? window.location : { pathname: '' };
//   const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: '/explore-events', label: 'Explore Events', icon: Calendar },
    { href: '/become-host', label: 'Become a Host', icon: Sparkles },
  ];

//   const userLinks = [
//     { href: '/events', label: 'Explore Events', icon: Calendar },
//     { href: '/my-events', label: 'My Events', icon: Calendar },
//     { href: '/profile', label: 'Profile', icon: User },
//   ];

//   const hostLinks = [
//     { href: '/events', label: 'Explore Events', icon: Calendar },
//     { href: '/my-events', label: 'My Events', icon: Calendar },
//     { href: '/create-event', label: 'Create Event', icon: Sparkles },
//     { href: '/profile', label: 'Profile', icon: User },
//   ];

//   const adminLinks = [
//     { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
//     { href: '/dashboard/users', label: 'Manage Users', icon: User },
//     { href: '/dashboard/events', label: 'Manage Events', icon: Calendar },
//     { href: '/profile', label: 'Profile', icon: User },
//   ];

//   const getNavLinks = () => {
//     if (!isAuthenticated) return publicLinks;
//     if (user?.role === 'admin') return adminLinks;
//     if (user?.role === 'host') return hostLinks;
//     return userLinks;
//   };

//   const navLinks = getNavLinks();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-foreground">
      <div className="container flex h-16 items-center justify-between mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-display text-xl font-bold"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">
            <span className="text-primary">Event</span>
            <span className="text-secondary">Buddy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className={cn(
                  "gap-2 transition-colors",
                  isActive(link.href) && "bg-primary/10 text-primary"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        {/* <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <Button 
              variant="ghost" 
              onClick={logout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div> */}

    
            <Link href="/login" className="hidden md:inline-flex">
              <Button variant="default">Login</Button>
            </Link>
       


        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2",
                    isActive(link.href) && "bg-primary/10 text-primary"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            ))}
            {/* <div className="border-t border-border pt-2 mt-2">
              {isAuthenticated ? (
                <Button 
                  variant="ghost" 
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full justify-start gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mt-2 bg-primary hover:bg-primary-dark">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
