import { Calculator, Upload, Truck, DollarSign, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    metalType: '',
    estimatedWeight: '',
    description: '',
    photos: [] as File[],
    pickupDate: '',
    urgentPickup: false,
    agreement: false,
  });

  const [estimatedValue, setEstimatedValue] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);

  const metalTypes = [
    { name: 'Copper', price: 8.50, description: 'Pipes, wiring, fittings' },
    { name: 'Aluminum', price: 2.20, description: 'Cans, wheels, siding' },
    { name: 'Steel', price: 0.45, description: 'Structural steel, appliances' },
    { name: 'Brass', price: 6.80, description: 'Fixtures, decorative items' },
    { name: 'Stainless Steel', price: 3.20, description: 'Kitchen equipment, medical' },
    { name: 'Lead', price: 2.10, description: 'Batteries, pipes (old)' },
    { name: 'Mixed Metals', price: 1.50, description: 'Various metal types' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // Here you would typically send the form data to your backend
    toast.success('Quote request submitted successfully! We\'ll contact you within 2 hours with a detailed quote.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      metalType: '',
      estimatedWeight: '',
      description: '',
      photos: [],
      pickupDate: '',
      urgentPickup: false,
      agreement: false,
    });
    setShowEstimate(false);
    setEstimatedValue(0);
  };

  const handleInputChange = (field: string, value: string | boolean | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    if (formData.metalType && formData.estimatedWeight) {
      const metal = metalTypes.find(m => m.name === formData.metalType);
      if (metal) {
        const weight = parseFloat(formData.estimatedWeight);
        const estimate = metal.price * weight;
        setEstimatedValue(estimate);
        setShowEstimate(true);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleInputChange('photos', files);
  };

  const benefits = [
    'Free, no-obligation quotes',
    'Competitive market rates',
    'Free pickup service',
    'Same-day quotes available',
    'Professional assessment',
    'Instant payment options',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an accurate, competitive quote for your scrap metal in minutes. 
            Our expert team will assess your materials and provide the best possible price.
          </p>
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted/30 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  Quote Request Form
                </CardTitle>
                <CardDescription>
                  Fill out the details below for an accurate quote. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg">Personal Information</h3>
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+61 XXX XXX XXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Pickup Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Full pickup address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Metal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg">Metal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="metalType">Metal Type *</Label>
                        <Select 
                          value={formData.metalType} 
                          onValueChange={(value) => handleInputChange('metalType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select metal type" />
                          </SelectTrigger>
                          <SelectContent>
                            {metalTypes.map((metal) => (
                              <SelectItem key={metal.name} value={metal.name}>
                                {metal.name} - ${metal.price}/kg ({metal.description})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Estimated Weight (kg) *</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={formData.estimatedWeight}
                          onChange={(e) => handleInputChange('estimatedWeight', e.target.value)}
                          placeholder="Approximate weight in kg"
                          min="1"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your metal items (condition, quantity, specific details...)"
                        className="min-h-24"
                      />
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Photos (Optional but Recommended)
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="photos">Upload Photos</Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                      />
                      <p className="text-sm text-muted-foreground">
                        Upload photos of your metal items for a more accurate quote (Max 5 photos, 10MB each)
                      </p>
                    </div>
                  </div>

                  {/* Pickup Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Pickup Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="flex items-center space-x-2 pt-8">
                        <Checkbox
                          id="urgent"
                          checked={formData.urgentPickup}
                          onCheckedChange={(checked) => handleInputChange('urgentPickup', checked as boolean)}
                        />
                        <Label htmlFor="urgent" className="text-sm">
                          Urgent pickup required (same day/next day)
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                      required
                    />
                    <Label htmlFor="agreement" className="text-sm leading-relaxed">
                      I agree to the terms and conditions and understand that the final quote may vary 
                      based on actual inspection of materials. I consent to being contacted regarding this quote. *
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={calculateEstimate} className="flex-1">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Estimate
                    </Button>
                    <Button type="submit" className="flex-1">
                      Submit Quote Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instant Estimate */}
            {showEstimate && (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <DollarSign className="h-5 w-5" />
                    Estimated Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-primary mb-2">
                    ${estimatedValue.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated value based on current market rates. 
                    Final quote may vary after physical inspection.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Current Prices */}
            <Card>
              <CardHeader>
                <CardTitle>Current Metal Prices</CardTitle>
                <CardDescription>
                  Today's rates per kilogram (AUD)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {metalTypes.slice(0, 5).map((metal, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{metal.name}</span>
                    <span className="text-sm font-medium">${metal.price}/kg</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-2">
                  * Prices subject to market fluctuations
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Our experts are here to assist you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('tel:+61731234567', '_self')}
                >
                  <Phone className="mr-3 h-4 w-4" />
                  Call: +61 7 3123 4567
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://wa.me/61731234567?text=Hi%2C%20I%20need%20help%20with%20my%20quote', '_blank')}
                >
                  <MessageCircle className="mr-3 h-4 w-4" />
                  WhatsApp Support
                </Button>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: '2 Hours', title: 'Quote Review', desc: 'We review your submission' },
                    { step: '24 Hours', title: 'Detailed Quote', desc: 'Receive your personalized quote' },
                    { step: '48 Hours', title: 'Schedule Pickup', desc: 'Book your collection time' },
                    { step: 'Same Day', title: 'Get Paid', desc: 'Receive payment on collection' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-16 text-xs text-primary font-medium">{item.step}</div>
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}