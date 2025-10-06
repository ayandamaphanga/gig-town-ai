import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, MapPin, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [rateType, setRateType] = useState("all");

  // Sample jobs data (will be replaced with backend data)
  const jobs = [
    {
      id: 1,
      title: "House Cleaning - 3 Bedroom Home",
      category: "Cleaning",
      rate: "R150/hour",
      location: "Soweto, Johannesburg",
      postedBy: "Sarah M.",
      verified: true,
      description: "Need a thorough cleaning of my 3-bedroom home. All cleaning supplies provided.",
      postedTime: "2 hours ago"
    },
    {
      id: 2,
      title: "Mathematics Tutoring - Grade 10",
      category: "Tutoring",
      rate: "R200/hour",
      location: "Khayelitsha, Cape Town",
      postedBy: "John D.",
      verified: true,
      description: "Looking for a qualified tutor to help my son with Grade 10 mathematics.",
      postedTime: "5 hours ago"
    },
    {
      id: 3,
      title: "Garden Maintenance",
      category: "Gardening",
      rate: "R120/hour",
      location: "Alexandra, Johannesburg",
      postedBy: "Linda K.",
      verified: false,
      description: "Weekly garden maintenance needed. Mowing, weeding, and general upkeep.",
      postedTime: "1 day ago"
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || job.category.toLowerCase() === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Work</h1>
          <p className="text-muted-foreground">Browse available jobs in your area</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="tutoring">Tutoring</SelectItem>
                  <SelectItem value="gardening">Gardening</SelectItem>
                  <SelectItem value="dog-walking">Dog Walking</SelectItem>
                  <SelectItem value="babysitting">Babysitting</SelectItem>
                  <SelectItem value="laundry">Laundry</SelectItem>
                  <SelectItem value="recycling">Recycling</SelectItem>
                </SelectContent>
              </Select>
              <Select value={rateType} onValueChange={setRateType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Rate Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rates</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="fixed">Fixed Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="card-elevated hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      {job.verified && (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.postedTime}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.rate}
                    </Badge>
                    <Badge variant="outline">{job.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Posted by {job.postedBy}</span>
                  <Button className="btn-primary">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No jobs found matching your criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FindWork;
