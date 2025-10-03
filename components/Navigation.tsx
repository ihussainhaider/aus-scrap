import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'offers', label: 'Offers' },
    { id: 'contact', label: 'Contact' },
    { id: 'quote', label: 'Get Quote' },
  ];

  const handleNavigate = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
            <h1 className="text-2xl font-bold text-primary">AusScrap</h1>
            <p className="text-xs text-muted-foreground">Metal Recycling Solutions</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavigate(page.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === page.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavigate(page.id)}
                  className={`block px-3 py-2 rounded-md w-full text-left transition-colors ${
                    currentPage === page.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}