
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')
  const { toast } = useToast()

  const handleSubscribe = (plan: string) => {
    toast({
      title: "Coming Soon!",
      description: `${plan} subscription will be available soon. Thank you for your interest!`,
    })
  }

  const plans = [
    {
      name: 'Individual',
      icon: Star,
      description: 'Perfect for solo developers and small projects',
      monthlyPrice: 19,
      yearlyPrice: 190,
      savings: '2 months free',
      features: [
        'Access to 20+ premium templates',
        'Basic documentation',
        'Email support',
        'Regular template updates',
        'Commercial usage rights',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'Ideal for teams and growing businesses',
      monthlyPrice: 49,
      yearlyPrice: 490,
      savings: '2 months free',
      features: [
        'Access to ALL premium templates',
        'Advanced documentation & guides',
        'Priority email support',
        'Early access to new templates',
        'Commercial usage rights',
        'Custom workflow consultation (1 hour)',
        'Team collaboration features',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations with advanced needs',
      monthlyPrice: 99,
      yearlyPrice: 990,
      savings: '2 months free',
      features: [
        'Everything in Professional',
        'Unlimited template downloads',
        'Custom template development',
        '24/7 priority support',
        'Dedicated account manager',
        'Advanced training sessions',
        'White-label solutions',
        'SLA guarantee',
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your automation needs. All plans include 
            professional templates, documentation, and our satisfaction guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-card border border-border rounded-lg p-1 animate-fade-in">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 text-xs">Save 20%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative glass-effect hover-lift transition-all duration-500 delay-${index * 100} animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="premium-gradient text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 premium-gradient rounded-full flex items-center justify-center">
                  <plan.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">
                      ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="text-sm text-primary font-medium">{plan.savings}</p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular ? 'premium-gradient hover-lift' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Get Started with {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Individual Template Option */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Prefer Individual Templates?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Not ready for a subscription? You can purchase individual templates 
                for $49 each. Perfect for specific automation needs.
              </p>
              <Button variant="outline" size="lg" className="hover-glow">
                Browse Individual Templates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied, contact us for a full refund."
              },
              {
                question: "Can I use templates commercially?",
                answer: "Yes, all our templates come with commercial usage rights. You can use them in client projects and commercial applications."
              },
              {
                question: "How often are new templates added?",
                answer: "We add new templates weekly. Professional and Enterprise subscribers get early access to new releases."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
