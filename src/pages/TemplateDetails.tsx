
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase, Workflow } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Download, Star, Shield, Zap, Users, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const TemplateDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [workflow, setWorkflow] = useState<Workflow | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    if (id) {
      fetchWorkflow(id)
    }
  }, [id])

  const fetchWorkflow = async (workflowId: string) => {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .eq('id', workflowId)
        .single()

      if (error) throw error

      setWorkflow(data)
    } catch (error) {
      console.error('Error fetching workflow:', error)
      toast({
        title: "Error",
        description: "Failed to load template details. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePurchase = () => {
    toast({
      title: "Coming Soon!",
      description: "Purchase functionality will be available soon. Thank you for your interest!",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading template details...</p>
        </div>
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-muted-foreground" size={32} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Template Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The template you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/templates">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Back to Templates
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Ready-to-use workflow that can be imported and configured in minutes.',
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Thoroughly tested and optimized for real-world business scenarios.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Comprehensive documentation and expert support included.',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link to="/templates">
            <Button variant="ghost" className="hover-glow">
              <ArrowLeft className="mr-2" size={16} />
              Back to Templates
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {workflow.category}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {workflow.workflow_name}
              </h1>
            </div>

            {/* Use Case */}
            <Card className="glass-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {workflow.use_case}
                </p>
              </CardContent>
            </Card>

            {/* Technical Details */}
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Zap className="mr-2 text-primary" size={20} />
                    Input Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {workflow.input}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Download className="mr-2 text-primary" size={20} />
                    Expected Output
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {workflow.output}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Authentication */}
            <Card className="glass-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="mr-2 text-primary" size={20} />
                  Authentication Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {workflow.authentication}
                </p>
              </CardContent>
            </Card>

            {/* Real-World Applications */}
            <Card className="glass-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Real-World Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">E-commerce Integration:</strong> Automatically sync customer data between your online store and CRM system, ensuring no lead is lost.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Marketing Automation:</strong> Trigger personalized email campaigns based on customer behavior and purchase history.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Operational Efficiency:</strong> Reduce manual data entry by 90% and eliminate human errors in your workflow processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="glass-effect hover-glow animate-fade-in-up sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get This Template</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$49</div>
                  <p className="text-muted-foreground">One-time purchase</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <div className="font-medium text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full premium-gradient hover-lift text-lg py-6"
                  onClick={handlePurchase}
                >
                  <Download className="mr-2" size={20} />
                  Purchase & Download
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Instant download • 30-day money-back guarantee • Lifetime updates
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="glass-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Complete n8n workflow JSON file</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Step-by-step setup guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Configuration documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Best practices guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Email support for 30 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDetails
