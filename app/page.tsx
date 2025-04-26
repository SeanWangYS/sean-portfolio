import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Sean Wang</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/SeanWangYS" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/sean-wang-ys" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:SeanWangYS@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/my-notion-face-customized.png?height=128&width=128" alt="Sean Wang" fill className="object-cover" priority />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Sean Wang</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Data Engineer / Data Backend Engineer</h2>
          <p className="max-w-[42rem] text-muted-foreground mb-8 text-lg md:text-xl">
            Working in the data science field for over 5 years, solving business problems by building a data lake, developing a data analysis platform, and designing recommender systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View my work</Link>
            </Button>
          </div>
          <Link href="#about" className="mt-16 animate-bounce">
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
              <p className="text-muted-foreground mb-4 text-lg md:text-xl">
                Working in the data science field for over 3 years, solving business problems by building a data lake, developing a data analysis platform, and designing recommender systems.
              </p>
              <p className="text-muted-foreground mb-4 text-lg md:text-xl">
                Experienced in developing ETL pipelines, Machine Learning models, restful API, data analysis, and data visualization on website user behaviors.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                I'm passionate about using data to solve real business problems and create value through insights and automation.
              </p>
            </div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/sean-headshot.JPG?height=400&width=800"
                alt="About me"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard title="Programming" skills={["Python", "FastAPI", "Java", "Spring Boot"]} />
            <SkillCard title="Data Engineering" skills={["ETL", "pySpark", "Airflow", "Presto", "Hive", "RabbitMQ"]} />
            <SkillCard title="Database" skills={["SQL", "NoSQL", "MongoDB", "DynamoDB", "MySQL", "PostgreSQL"]} />
            <SkillCard title="AWS" skills={["Glue", "Athena", "ECS", "Sagemaker", "S3", "Lambda", "DynamoDB"]} />
            <SkillCard title="Data Science" skills={["Machine Learning", "Deep Learning", "Recommendation Systems"]} />
            <SkillCard title="Tools" skills={["Docker", "Git", "Customer Data Platform (CDP)"]} />
            {/* <SkillCard title="Data Analysis" skills={["Data Visualization", "User Behavior Analysis", "Segmentation"]} /> */}
            <SkillCard title="Soft Skills" skills={["Leadership", "Problem Solving", "Mentoring", "Cross-team Collaboration"]} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Recommendation System"
              description="Designed and built a whole new recommendation system, which integrated multiple recommendation algorithms and sent a million app push notifications daily."
              technologies={["Python", "Machine Learning", "AWS", "ETL"]}
              image="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/SeanWangYS"
              liveUrl="https://www.verybuy.cc/"
            />
            <ProjectCard
              title="Customer Data Platform"
              description="Developed Java restful APIs for a customer data platform, making audience segmentation, customer tagging, and producing analysis reports from user behavior."
              technologies={["Java", "Spring Boot", "REST APIs", "Data Analysis"]}
              image="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/SeanWangYS"
              liveUrl="https://www.lndata.com/en"
            />
            <ProjectCard
              title="Dockerized Presto Search Engine"
              description="Built a dockerized presto searching engine with Hive data warehouse to extract information from databases like MongoDB, Azure Blob, and MySQL."
              technologies={["Docker", "Presto", "Hive", "SQL", "MongoDB"]}
              image="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/SeanWangYS"
              liveUrl="https://www.lndata.com/en"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Data Engineer"
              company="LnData"
              period="Apr 2023 - Feb 2024"
              description="Developed Java restful APIs for a customer data platform, making audience segmentation, customer tagging, and producing analysis reports from user behavior to boost marketing campaigns."
              achievements={[
                "Built a dockerized presto searching engine with Hive data warehouse to extract information from databases",
                "Utilized dynamically created Airflow DAGs to manage data flow scheduling",
                "Built data ETL pipelines for customers to fulfill their business needs",
                "Led three interns and assisted in recruiting qualified candidates"
              ]}
            />
            <ExperienceCard
              title="Data Scientist, Data Engineer"
              company="VeryBuy"
              period="Oct 2020 - Jul 2022"
              description="Built data warehouse, developed routine ETL pipelines, cleaned and transformed millions of rows of user logs, built recommendation systems, and developed data analysis solutions."
              achievements={[
                "Built a new recommendation system that sent a million app push notifications daily, getting 15% of orders from the app channel",
                "Developed a personalized recommendation algorithm that improved product click-through rate by over 200%",
                "Launched data operation dashboards for monitoring system health status",
                "Developed an image classification model training process to improve image tagging efficiency by 50%"
              ]}
            />
            <ExperienceCard
              title="Data Scientist"
              company="ISSDU"
              period="Sep 2019 - Oct 2020"
              description="Built a data-driven process across teams, including prediction and model training pipeline."
              achievements={[
                "Developed an Incident (Alarm) classification model in the security service, which reached 90% accuracy",
                "Built a time series anomaly detector and customer clustering model based on event log data",
                "Imported functions into a security monitoring system to assist users in making decisions and analyzing information"
              ]}
            />
            <ExperienceCard
              title="R & D Engineer"
              company="UMC"
              period="Dec 2016 - Mar 2018"
              description="Developed process platform of power management IC with customers (MediaTek Inc., Texas Instruments)."
              achievements={[
                "Initial throughput was over 10,000pcs wafers, producing a profit of NT $200 million",
                "Simultaneously managed at least 3 R&D projects of the manufacturing process",
                "Established and led a cross-functional team of 5 engineers",
                "Successfully improved the memory device's electrical property"
              ]}
            />
            <ExperienceCard
              title="Sr. Integration Engineer"
              company="UMC"
              period="Jul 2014 - Sep 2016"
              description="Managed 3 product lines and provided technical consulting for customers (NXP, Novatek, Realtek)."
              achievements={[
                "Simultaneously maintained over 200 inline product lots",
                "Analyzed new product failure, improved product yield from 30% to 95%",
                "Discovered abnormal issues with production equipment, saved NT$ 8 million for our company",
                "Improved wafer back-side scratch issue, promoted product yield from 92% to 95%"
              ]}
            />
          </div>

          {/* Education */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle>Master's Degree of Engineering in Photonics Technologies</CardTitle>
                <CardDescription>National Tsing Hua University, 2010 - 2012</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master's degree in Photonics Technologies from one of Taiwan's top universities, providing strong analytical and problem-solving skills that transfer well to data science.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Side Projects */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Side Projects and Hobbies</h2>
            <Card>
              <CardHeader>
                <CardTitle>Shopee Code League 2020</CardTitle>
                <CardDescription>Image Classification Competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ranking: 7/646. Got the world's top 2% in an image classification competition.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/SeanWangYS/shopee-image-competition" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Blog Writer</CardTitle>
                <CardDescription>Medium</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shares technical and career-changing articles to inspire people and make a social impact.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="http://medium.com/@sean-ds" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Blog
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm currently open to new opportunities in data engineering and data science. Feel free to reach out if you'd like to discuss a project or just say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:SeanWangYS@gmail.com" className="hover:text-primary">
                    SeanWangYS@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/sean-wang-ys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/sean-wang-ys
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a href="https://github.com/SeanWangYS" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    github.com/SeanWangYS
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sean Wang. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/SeanWangYS" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/sean-wang-ys" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:SeanWangYS@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for skill cards
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}: {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4 text-lg md:text-xl">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for experience cards
function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
}: {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-lg md:text-xl">{description}</p>
        <h4 className="font-semibold mb-2 text-lg md:text-xl">Key Achievements:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-muted-foreground text-lg md:text-xl">
              {achievement}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Contact form component
function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Job Opportunity"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message here..."
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
