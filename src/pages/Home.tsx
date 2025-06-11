
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Clock, Shield, Zap, Users, Star, CheckCircle } from 'lucide-react'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

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
            <Link to="/templates">
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
