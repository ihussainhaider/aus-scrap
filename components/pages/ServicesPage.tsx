import { Truck, Factory, Home, Building, Wrench, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'Metal Collection & Pickup',
      description: 'Free collection service for all types of scrap metal with flexible scheduling to suit your needs.',
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      features: ['Free pickup service', 'Flexible scheduling', 'All metal types', 'Same-day collection available'],
      image: 'https://images.unsplash.com/photo-1608197554045-3a9d14746f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIweWFyZHxlbnwxfHx8fDE3NTk0OTQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Industrial Scrap Processing',
      description: 'Large-scale industrial metal waste management with specialized handling for manufacturing facilities.',
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      features: ['Industrial-grade processing', 'Bulk handling', 'Compliance certificates', 'Waste audit reports'],
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVjeWNsaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU5NDk0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Residential Scrap Service',
      description: 'Convenient home collection service for household metal items, appliances, and renovation waste.',
      icon: <Home className="h-8 w-8 text-green-600" />,
      features: ['Home collection', 'Appliance removal', 'Renovation waste', 'Weekend availability'],
      image: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNjcmFwJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc1OTQ5NDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Commercial Recycling',
      description: 'Tailored solutions for businesses, offices, and commercial properties with regular pickup schedules.',
      icon: <Building className="h-8 w-8 text-purple-600" />,
      features: ['Regular collections', 'Business contracts', 'Volume discounts', 'Reporting services'],
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVjeWNsaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU5NDk0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Demolition Waste Management',
      description: 'Specialized handling of construction and demolition metal waste with site cleanup services.',
      icon: <Wrench className="h-8 w-8 text-yellow-600" />,
      features: ['Site cleanup', 'Demolition support', 'Steel beam removal', 'Construction waste'],
      image: 'https://images.unsplash.com/photo-1608197554045-3a9d14746f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIweWFyZHxlbnwxfHx8fDE3NTk0OTQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Secure Data Destruction',
      description: 'Certified secure destruction of electronic devices and data-bearing equipment with compliance certificates.',
      icon: <Shield className="h-8 w-8 text-red-600" />,
      features: ['Data destruction', 'Compliance certificates', 'Electronic waste', 'Secure processing'],
      image: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNjcmFwJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc1OTQ5NDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const metalTypes = [
    { name: 'Copper', price: '$8.50/kg', grade: 'Premium' },
    { name: 'Aluminum', price: '$2.20/kg', grade: 'Standard' },
    { name: 'Steel', price: '$0.45/kg', grade: 'Standard' },
    { name: 'Brass', price: '$6.80/kg', grade: 'Premium' },
    { name: 'Stainless Steel', price: '$3.20/kg', grade: 'Premium' },
    { name: 'Lead', price: '$2.10/kg', grade: 'Standard' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metal recycling solutions for every need. From residential pickup 
            to large-scale industrial processing, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Metal Types & Pricing */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Current Metal Prices</h2>
            <p className="text-lg text-muted-foreground">
              Competitive rates updated daily. Prices may vary based on quantity and quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalTypes.map((metal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{metal.name}</span>
                    <Badge variant={metal.grade === 'Premium' ? 'default' : 'secondary'}>
                      {metal.grade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl text-primary mb-2">{metal.price}</div>
                  <p className="text-sm text-muted-foreground">Current market rate</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices are indicative and subject to market fluctuations. Contact us for current rates.
            </p>
            <Button size="lg" onClick={() => onNavigate('quote')}>
              Get Accurate Quote
            </Button>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20 py-16 bg-muted/30 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to turn your scrap metal into cash
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', description: 'Call, message, or book online for a free quote' },
              { step: '2', title: 'Schedule Pickup', description: 'We arrange convenient collection time' },
              { step: '3', title: 'Weight & Grade', description: 'Professional assessment and transparent pricing' },
              { step: '4', title: 'Get Paid', description: 'Instant payment via cash, transfer, or cheque' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-primary-foreground rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today for a free quote and experience Australia's most reliable scrap metal service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('quote')}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}