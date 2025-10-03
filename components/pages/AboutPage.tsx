import { Users, Award, Leaf, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Environmental Responsibility',
      description: 'We are committed to sustainable practices that reduce environmental impact and promote circular economy principles.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We provide personalized service and competitive pricing.',
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in metal processing and recycling, ensuring maximum value for our clients.',
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: 'Innovation Focus',
      description: 'We continuously invest in new technologies and processes to improve efficiency and environmental outcomes.',
    },
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '10,000+', label: 'Tons Recycled Monthly' },
    { number: '500+', label: 'Happy Clients' },
    { number: '95%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">About AusScrap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading Australia's metal recycling industry with sustainable solutions, 
            innovative technology, and unwavering commitment to our environment and customers.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 1998, AusScrap began as a small family-owned business with a vision to 
                  revolutionize metal recycling in Australia. What started with a single truck and 
                  unwavering determination has grown into one of the nation's most trusted scrap metal recycling companies.
                </p>
                <p>
                  Over the past 25 years, we've processed millions of tons of metal waste, helping 
                  businesses and individuals across Australia turn their scrap into valuable resources 
                  while contributing to a more sustainable future.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities equipped with the latest recycling 
                  technology, serving customers nationwide with the same family values that built our foundation.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719399924262-ebb6f2a8de80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU5NDk0NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AusScrap team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20 py-16 bg-muted/30 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that showcase our commitment to excellence and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl mb-2 text-primary">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to customers and community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-muted">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-center py-16 bg-primary text-primary-foreground rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl mb-6">Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              To be Australia's premier metal recycling company, leading the industry in sustainable practices, 
              innovative solutions, and exceptional customer service while contributing to a circular economy 
              that benefits our environment and future generations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl mb-3">Sustainability</h3>
                <p className="opacity-80">
                  Pioneering eco-friendly recycling processes that minimize environmental impact
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Innovation</h3>
                <p className="opacity-80">
                  Continuously advancing our technology and methods to deliver superior results
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Community</h3>
                <p className="opacity-80">
                  Supporting local communities and businesses with reliable, professional service
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}