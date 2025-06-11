
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Award, Heart, Mail, Github, Twitter } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every template is meticulously crafted, tested, and optimized for real-world production use.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We listen to our community and build templates that solve actual business challenges.',
    },
    {
      icon: Award,
      title: 'Expert Crafted',
      description: 'Created by automation specialists with years of n8n experience and industry knowledge.',
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We provide comprehensive support and guidance.',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Automation Architect',
      bio: 'Former automation consultant with 8+ years of experience building enterprise-grade workflows.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Workflow Developer',
      bio: 'n8n expert specializing in complex integrations and scalable automation solutions.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      bio: 'Dedicated to ensuring every customer achieves their automation goals with our templates.',
      avatar: 'ER'
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '100+', label: 'Templates Created' },
    { number: '50k+', label: 'Hours Saved' },
    { number: '99%', label: 'Success Rate' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Our Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're passionate about democratizing automation. Our mission is to make powerful 
            n8n workflows accessible to everyone, from solo entrepreneurs to enterprise teams. 
            We believe that great automation shouldn't require months of development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It started with a simple frustration. After years of building custom automation 
                workflows for clients, we realized that most businesses were solving the same 
                problems over and over again. Why should every company reinvent the wheel?
              </p>
              <p>
                We saw talented teams spending weeks building workflows that could be deployed 
                in minutes with the right template. We witnessed small businesses unable to 
                access powerful automation because of complexity and cost barriers.
              </p>
              <p>
                That's when we decided to change the game. We started creating professional, 
                production-ready n8n templates that anyone could use. Each template represents 
                years of automation expertise distilled into a simple, reusable format.
              </p>
              <p>
                Today, we're proud to have helped hundreds of businesses automate their processes, 
                save thousands of hours, and focus on what they do best.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="glass-effect automation-gradient p-8">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="mb-6 opacity-90">
                  Every template we create represents real businesses achieving their automation goals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-sm opacity-75">Workflows Deployed</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">$2M+</div>
                    <div className="text-sm opacity-75">Cost Savings Generated</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from template creation to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`glass-effect hover-lift text-center transition-all duration-500 delay-${index * 100} animate-fade-in-up`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate automation experts dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className={`glass-effect hover-lift text-center transition-all duration-500 delay-${index * 100} animate-fade-in-up`}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center animate-fade-in-up">
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our templates? Want to suggest a new workflow? 
                We'd love to hear from you. Our team is always ready to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="premium-gradient hover-lift">
                  <Mail className="mr-2" size={20} />
                  Send us an Email
                </Button>
                <Button variant="outline" size="lg" className="hover-glow">
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="hover-glow">
                  <Twitter className="mr-2" size={20} />
                  Twitter
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Average response time: Less than 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About
