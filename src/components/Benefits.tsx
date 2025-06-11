
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Rocket, Shield, Users, Zap, TrendingUp } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Instant Setup",
      description: "Get up and running in minutes with pre-built workflows that are ready to use immediately."
    },
    {
      icon: Zap,
      title: "Proven Performance",
      description: "All templates are tested and optimized for real-world scenarios and maximum efficiency."
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Built with security and scalability in mind, perfect for businesses of any size."
    },
    {
      icon: Users,
      title: "Expert Crafted",
      description: "Created by automation professionals with years of n8n experience."
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Automate repetitive tasks and free up your team to focus on high-value work."
    },
    {
      icon: CheckCircle,
      title: "Money-Back Guarantee",
      description: "Try our templates risk-free with our 30-day money-back guarantee."
    }
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our <span className="text-gradient">n8n Templates?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop reinventing the wheel. Our professionally crafted templates give you a head start 
            on your automation journey with proven, reliable workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`glass-effect hover-lift transition-all duration-300 animate-fade-in-up delay-${index * 100}`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="premium-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to 10X Your Automation?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join thousands of professionals who are already saving hours every week with our templates.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Templates Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-blue-100">Hours Saved Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
