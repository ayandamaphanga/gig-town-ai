import { useState } from "react";
import { Search, Briefcase, GraduationCap, Scissors, Dog, Baby, Leaf, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-township.jpg";

const categories = [
  { id: 1, name: "Cleaning", icon: Briefcase, color: "bg-primary", jobs: 24 },
  { id: 2, name: "Tutoring", icon: GraduationCap, color: "bg-secondary", jobs: 18 },
  { id: 3, name: "Gardening", icon: Leaf, color: "bg-accent", jobs: 15 },
  { id: 4, name: "Dog Walking", icon: Dog, color: "bg-primary", jobs: 12 },
  { id: 5, name: "Babysitting", icon: Baby, color: "bg-secondary", jobs: 20 },
  { id: 6, name: "Laundry", icon: Scissors, color: "bg-accent", jobs: 10 },
  { id: 7, name: "Recycling", icon: Recycle, color: "bg-primary", jobs: 8 },
];

const featuredJobs = [
  {
    id: 1,
    title: "House Cleaning - Soweto",
    category: "Cleaning",
    rate: "R150/hour",
    location: "Soweto, Johannesburg",
    poster: "Sarah M.",
    verified: true,
    description: "Need someone to clean a 3-bedroom house",
  },
  {
    id: 2,
    title: "Math Tutoring - Grade 10",
    category: "Tutoring",
    rate: "R100/hour",
    location: "Khayelitsha, Cape Town",
    poster: "John D.",
    verified: true,
    description: "Looking for a math tutor for my daughter",
  },
  {
    id: 3,
    title: "Garden Maintenance",
    category: "Gardening",
    rate: "R200/day",
    location: "Alexandra, Johannesburg",
    poster: "Maria K.",
    verified: false,
    description: "Weekly garden maintenance needed",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Township community working together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Find Work in Your Township
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-up">
            Connect with local opportunities. Earn money doing what you love. Build your community.
          </p>
          
          <div className="w-full max-w-2xl flex gap-2 animate-slide-up">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for jobs near you..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-14 text-lg"
              />
            </div>
            <Button size="lg" className="btn-primary h-14 px-8 text-lg">
              Search
            </Button>
          </div>
          
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              Post a Job
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              Find Work
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className="card-elevated cursor-pointer hover:border-primary"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 pulse-glow`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <Badge variant="secondary">{category.jobs} jobs</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Jobs</h2>
            <Button variant="outline" className="btn-secondary">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="card-elevated">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary">{job.category}</Badge>
                    {job.verified && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-lg text-primary">{job.rate}</p>
                    <p className="text-muted-foreground">📍 {job.location}</p>
                    <p className="text-muted-foreground">Posted by {job.poster}</p>
                  </div>
                  <Button className="w-full mt-4 btn-primary">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of township residents already earning through TownGig. 
            Sign up today and get verified in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
              Sign Up as Worker
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
              Post a Job
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TownGig. Empowering township communities through opportunity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
