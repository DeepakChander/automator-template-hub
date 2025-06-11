
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Clock, Shield, Zap, Users, Star, CheckCircle } from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Pre-built workflows that can be deployed in minutes, not hours.',
    },
    {
      icon: Shield,
      title: 'Reduce Errors',
      description: 'Tested and validated templates eliminate common automation mistakes.',
    },
    {
      icon: Zap,
      title: 'Scale Operations',
      description: 'Professional-grade automation that grows with your business needs.',
    },
    {
      icon: Users,
      title: 'Expert Crafted',
      description: 'Created by automation specialists with years of n8n experience.',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Browse Templates',
      description: 'Explore our curated collection of professional n8n workflow templates.',
    },
    {
      step: '02',
      title: 'Purchase & Download',
      description: 'Get instant access to the JSON workflow file and documentation.',
    },
    {
      step: '03',
      title: 'Import & Customize',
      description: 'Import into your n8n instance and customize to your specific needs.',
    },
  ]

  const stats = [
    { number: '100+', label: 'Templates Available' },
    { number: '1000+', label: 'Hours Saved' },
    { number: '500+', label: 'Happy Customers' },
    { number: '99%', label: 'Success Rate' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 automation-gradient opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-glow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Unlock Powerful Automation with
              <span className="text-gradient block">Professional n8n Templates</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Skip the complexity. Get professional, pre-built n8n workflows that transform your business processes 
              in minutes, not months. Built by experts, tested in production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/templates" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="premium-gradient hover-lift text-lg px-8 py-6 group">
                  Explore All Templates
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-glow">
                View Pricing
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-gradient">Templates?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every template is crafted with precision, tested thoroughly, and designed to deliver 
              immediate value to your automation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`glass-effect hover-lift transition-all duration-500 delay-${index * 100} animate-fade-in-up`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with professional automation in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 delay-${index * 200} animate-fade-in-up`}
              >
                <div className="relative">
                  <div className="w-20 h-20 premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-gradient">Professionals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of businesses already automating with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="glass-effect hover-lift animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "These templates saved us weeks of development time. The quality and documentation 
                    are exceptional. Highly recommended for any serious automation project."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-400 rounded-full mr-3" />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">CTO, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 automation-gradient opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Workflow?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start automating like a pro today. Browse our collection of premium n8n templates 
              and accelerate your business processes.
            </p>
            <Link to="/templates" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="premium-gradient hover-lift text-lg px-12 py-6 group">
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
