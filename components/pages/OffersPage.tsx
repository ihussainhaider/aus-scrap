import { Star, Clock, Gift, Zap, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OffersPageProps {
  onNavigate: (page: string) => void;
}

export function OffersPage({ onNavigate }: OffersPageProps) {
  const currentOffers = [
    {
      title: 'New Customer Bonus',
      description: 'Get 15% extra on your first scrap metal collection with us',
      discount: '15% EXTRA',
      validUntil: 'Valid until Dec 31, 2024',
      terms: 'Minimum 50kg of mixed metals. New customers only.',
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      featured: true,
      image: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNjcmFwJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc1OTQ5NDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Bulk Collection Deal',
      description: 'Save more when you have more! Graduated pricing for large quantities',
      discount: 'UP TO 25% EXTRA',
      validUntil: 'Ongoing offer',
      terms: 'Applies to collections over 500kg. Contact for pricing tiers.',
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      featured: true,
      image: 'https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVjeWNsaW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU5NDk0NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Same-Day Service',
      description: 'Need urgent pickup? Get same-day collection with no extra fees',
      discount: 'FREE',
      validUntil: 'Limited availability',
      terms: 'Subject to availability. Brisbane metro area only.',
      icon: <Clock className="h-8 w-8 text-green-500" />,
      featured: false,
      image: 'https://images.unsplash.com/photo-1608197554045-3a9d14746f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIweWFyZHxlbnwxfHx8fDE3NTk0OTQ1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Refer a Friend',
      description: 'Both you and your friend get bonus cash when they use our service',
      discount: '$50 EACH',
      validUntil: 'Ongoing program',
      terms: 'Friend must complete first collection. Both parties receive bonus.',
      icon: <Users className="h-8 w-8 text-purple-500" />,
      featured: false,
      image: 'https://images.unsplash.com/photo-1719399924262-ebb6f2a8de80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU5NDk0NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const seasonalOffers = [
    {
      title: 'Spring Clean Special',
      description: 'Extra 10% for appliance and household metal removal',
      period: 'September - November',
      savings: '10% Extra',
    },
    {
      title: 'Construction Season Boost',
      description: 'Premium rates for construction and demolition waste',
      period: 'March - May',
      savings: '20% Extra',
    },
    {
      title: 'Holiday Collection',
      description: 'Extended hours and bonus rates during holiday periods',
      period: 'December - January',
      savings: '15% Extra',
    },
  ];

  const loyaltyBenefits = [
    'Priority scheduling for regular customers',
    'Exclusive pricing on premium metals',
    'Free metal identification and assessment',
    'Quarterly bonus payments for top customers',
    'Extended collection hours availability',
    'Dedicated customer service line',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">Special Offers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take advantage of our exclusive deals and promotions. 
            More value for your scrap metal with Australia's most generous offers.
          </p>
        </div>

        {/* Current Offers */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl">Current Offers</h2>
            <Badge variant="outline" className="px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Limited Time
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {currentOffers.map((offer, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-lg transition-shadow ${
                offer.featured ? 'ring-2 ring-primary' : ''
              }`}>
                {offer.featured && (
                  <div className="bg-primary text-primary-foreground text-center py-2">
                    <Badge variant="secondary" className="bg-white text-primary">
                      FEATURED OFFER
                    </Badge>
                  </div>
                )}
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    {offer.discount}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted">
                      {offer.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {offer.validUntil}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Terms:</strong> {offer.terms}
                  </p>
                  <Button className="w-full" onClick={() => onNavigate('quote')}>
                    Claim This Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seasonal Offers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Seasonal Promotions</h2>
            <p className="text-lg text-muted-foreground">
              Special offers throughout the year to maximize your returns
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{offer.title}</CardTitle>
                  <Badge variant="secondary">{offer.period}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {offer.description}
                  </CardDescription>
                  <div className="text-2xl text-primary">{offer.savings}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="mb-20 py-16 bg-muted/30 rounded-2xl">
          <div className="text-center mb-12">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl mb-4">AusScrap Loyalty Program</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our loyalty program and enjoy exclusive benefits, priority service, and bonus rewards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loyaltyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Join Loyalty Program
            </Button>
          </div>
        </section>

        {/* How to Redeem */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">How to Redeem Offers</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to claim your discounts and special deals
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Offer', description: 'Select the promotion that suits your needs' },
              { step: '2', title: 'Get Quote', description: 'Request a quote mentioning the offer code' },
              { step: '3', title: 'Schedule Pickup', description: 'Book your collection at a convenient time' },
              { step: '4', title: 'Enjoy Savings', description: 'Receive your bonus payment automatically' },
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
            <h2 className="text-3xl lg:text-4xl mb-6">Don't Miss Out!</h2>
            <p className="text-xl opacity-90 mb-8">
              These exclusive offers won't last forever. Get your free quote today and 
              start earning more from your scrap metal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('quote')}
              >
                Get Quote Now
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