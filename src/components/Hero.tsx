
import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Cog } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-background via-background to-card overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 automation-gradient opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Supercharge Your
            <span className="text-gradient ml-4 block sm:inline">
              n8n Workflows
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Get instant access to professionally crafted n8n automation templates that save you hours of development time
          </p>

          {/* What is n8n section */}
          <div className="glass-effect rounded-2xl p-8 mb-12 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">What is n8n?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              n8n is a powerful, open-source automation platform that connects your favorite apps and services. 
              Build complex workflows without coding, integrate hundreds of applications, and automate repetitive tasks 
              to boost your productivity and scale your business operations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">No-Code Automation</h3>
                <p className="text-muted-foreground text-sm">Build workflows visually without writing code</p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Save Time</h3>
                <p className="text-muted-foreground text-sm">Automate repetitive tasks and focus on what matters</p>
              </div>
              
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Easy Integration</h3>
                <p className="text-muted-foreground text-sm">Connect 300+ apps and services seamlessly</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link to="/templates">
              <Button 
                size="lg" 
                className="premium-gradient hover-lift text-lg px-8 py-6 group"
              >
                Explore All Templates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-muted-foreground text-sm mb-4">Trusted by automation professionals worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-muted-foreground font-semibold">500+ Templates</div>
              <div className="text-muted-foreground font-semibold">10k+ Downloads</div>
              <div className="text-muted-foreground font-semibold">99% Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
