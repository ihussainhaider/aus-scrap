import { ArrowRight, Recycle, Truck, DollarSign, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: 'Eco-Friendly Recycling',
      description: 'State-of-the-art recycling processes that protect our environment',
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: 'Free Collection',
      description: 'Convenient pickup service for all your scrap metal needs',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
      title: 'Best Prices',
      description: 'Competitive rates for all types of metal scrap',
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: '24/7 Service',
      description: 'Round-the-clock availability for urgent requirements',
    },
  ];

  const services = [
    {
      title: 'Copper Recycling',
      description: 'High-grade copper scrap processing with premium rates',
      image: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNjcmFwJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc1OTQ5NDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Industrial Scrap',
      description: 'Large-scale industrial metal waste management solutions',
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVjeWNsaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU5NDk0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Scrap Collection',
      description: 'Efficient collection and sorting of various metal types',
      image: 'https://images.unsplash.com/photo-1608197554045-3a9d14746f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIweWFyZHxlbnwxfHx8fDE3NTk0OTQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Australia's Leading Scrap Metal Recycling Specialists
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Turning your metal waste into cash while protecting our environment. 
                Professional, reliable, and environmentally responsible scrap metal services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => onNavigate('quote')}
                  className="text-lg"
                >
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate('services')}
                  className="text-lg border-white text-white hover:bg-white hover:text-primary"
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVjeWNsaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU5NDk0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial recycling facility"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Why Choose AusScrap?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine decades of industry experience with cutting-edge technology to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-muted w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive metal recycling solutions for businesses and individuals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => onNavigate('services')}>
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Turn Your Scrap into Cash?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get an instant quote for your metal scrap and experience Australia's most trusted recycling service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('quote')}
            >
              Get Instant Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}