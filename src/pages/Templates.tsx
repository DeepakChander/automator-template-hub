
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase, Workflow } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, ArrowRight, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Templates = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [filteredWorkflows, setFilteredWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { toast } = useToast()
  
  const templatesPerPage = 10

  useEffect(() => {
    fetchWorkflows()
  }, [])

  useEffect(() => {
    filterWorkflows()
  }, [workflows, searchTerm])

  const fetchWorkflows = async () => {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .select('id, workflow_name, category, use_case, created_at')
        .order('created_at', { ascending: false })

      if (error) throw error

      setWorkflows(data || [])
    } catch (error) {
      console.error('Error fetching workflows:', error)
      toast({
        title: "Error",
        description: "Failed to load templates. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filterWorkflows = () => {
    if (!searchTerm) {
      setFilteredWorkflows(workflows)
    } else {
      const filtered = workflows.filter(workflow =>
        workflow.workflow_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workflow.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workflow.use_case.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredWorkflows(filtered)
    }
    setCurrentPage(1)
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + '...'
  }

  const totalPages = Math.ceil(filteredWorkflows.length / templatesPerPage)
  const startIndex = (currentPage - 1) * templatesPerPage
  const currentTemplates = filteredWorkflows.slice(startIndex, startIndex + templatesPerPage)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading premium templates...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium <span className="text-gradient">n8n Templates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover professionally crafted workflow templates that transform your automation journey. 
            Each template is battle-tested and ready for production use.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search templates, categories, or use cases..."
              className="pl-10 h-12 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-fade-in">
          <p className="text-muted-foreground">
            {searchTerm ? (
              <>Showing {filteredWorkflows.length} results for "{searchTerm}"</>
            ) : (
              <>Showing {filteredWorkflows.length} premium templates</>
            )}
          </p>
        </div>

        {/* Templates Grid */}
        {currentTemplates.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm 
                ? "Try adjusting your search terms or browse all templates." 
                : "No templates are available at the moment."}
            </p>
            {searchTerm && (
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentTemplates.map((workflow, index) => (
              <Card 
                key={workflow.id} 
                className={`glass-effect hover-lift group cursor-pointer transition-all duration-500 delay-${index * 50} animate-fade-in-up`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {workflow.category}
                    </Badge>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {workflow.workflow_name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {truncateText(workflow.use_case, 120)}
                  </p>
                  <Link to={`/template/${workflow.id}`}>
                    <Button className="w-full group/btn hover-glow">
                      Know More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 animate-fade-in">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "premium-gradient" : ""}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Templates
