import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+61 7 3123 4567', '1800 AUS-SCRAP'],
      action: () => window.open('tel:+61731234567', '_self'),
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@ausscrap.com.au', 'quotes@ausscrap.com.au'],
      action: () => window.open('mailto:info@ausscrap.com.au', '_self'),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['123 Industrial Drive', 'Brisbane, QLD 4000'],
      action: () => window.open('https://maps.google.com/?q=123+Industrial+Drive+Brisbane+QLD+4000', '_blank'),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM'],
      action: null,
    },
  ];

  const branches = [
    {
      city: 'Brisbane',
      address: '123 Industrial Drive, Brisbane QLD 4000',
      phone: '+61 7 3123 4567',
      manager: 'John Smith',
    },
    {
      city: 'Sydney',
      address: '456 Metal Street, Sydney NSW 2000',
      phone: '+61 2 9876 5432',
      manager: 'Sarah Wilson',
    },
    {
      city: 'Melbourne',
      address: '789 Recycle Road, Melbourne VIC 3000',
      phone: '+61 3 5555 0123',
      manager: 'Mike Johnson',
    },
    {
      city: 'Perth',
      address: '321 Scrap Lane, Perth WA 6000',
      phone: '+61 8 1234 5678',
      manager: 'Lisa Brown',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/61731234567?text=Hi%2C%20I%27d%20like%20to%20get%20more%20information%20about%20your%20services', '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Australia's leading scrap metal recycling experts. 
            We're here to help with all your metal recycling needs.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-lg transition-shadow ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={info.action || undefined}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary text-primary-foreground w-fit">
                    {info.icon}
                  </div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Quick Actions */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+61 XXX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quote">Get a Quote</SelectItem>
                            <SelectItem value="pickup">Schedule Pickup</SelectItem>
                            <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                            <SelectItem value="partnership">Business Partnership</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your scrap metal needs, quantities, location, etc."
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Use these quick options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full justify-start bg-green-500 hover:bg-green-600"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('tel:+61731234567', '_self')}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('mailto:info@ausscrap.com.au', '_self')}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Service</CardTitle>
                  <CardDescription>
                    24/7 emergency collection available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent industrial clean-ups, hazardous material removal, or emergency services
                  </p>
                  <Button variant="destructive" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Line: 1800 EMERGENCY
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">
              AusScrap operates across major Australian cities with local teams ready to serve you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {branch.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-sm">{branch.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm">{branch.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Manager</p>
                    <p className="text-sm">{branch.manager}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 py-16 bg-muted/30 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'What types of metal do you accept?',
                answer: 'We accept all types of ferrous and non-ferrous metals including copper, aluminum, steel, stainless steel, brass, lead, and more.',
              },
              {
                question: 'Do you offer free pickup?',
                answer: 'Yes! We provide free pickup service for all collections. Just give us a call to schedule a convenient time.',
              },
              {
                question: 'How do you determine pricing?',
                answer: 'Pricing is based on current market rates, metal type, quantity, and quality. We provide transparent, competitive pricing.',
              },
              {
                question: 'What areas do you service?',
                answer: 'We service all major Australian cities and surrounding metro areas. Contact us to confirm service availability in your area.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}