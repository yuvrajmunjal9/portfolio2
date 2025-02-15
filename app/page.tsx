import { Github, Linkedin, Instagram,  ExternalLink, Download, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export default function Portfolio() {
  const skills = {
    technical: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
    soft: ["Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability"],
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section id="about" className="container px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://sjc.microlink.io/LAUUqITPNCUr63IfZGrK3KuobC14nZIp27lokSXaB_noi4MLuf92sCHfSniwAFkl0RB8WQDfSxdG94GHv7-XNA.jpeg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yuvraj Munjal</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Frontend Developer | BCA Student</p>
            <div className="prose prose-lg dark:prose-invert max-w-2xl mb-8">
              <p className="text-lg text-muted-foreground">
                As a final-year BCA student at Chandigarh University, I am passionate about creating exceptional web
                experiences. With a strong foundation in frontend development and a keen eye for design, I specialize in
                building responsive, user-friendly applications that combine aesthetic appeal with functional
                excellence.
              </p>
              <p className="text-lg text-muted-foreground">
                My goal is to contribute to innovative projects that push the boundaries of web development while
                continuously expanding my technical expertise. I thrive in collaborative environments and am always
                eager to learn from and contribute to the developer community.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild>
                <a href="https://github.com/yuvrajmunjal9" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/feed/?ligoTracking=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.instagram.com/__uvraj_62_?igsh=cmRrOTJzOGNoMHd1" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="\Yuvraj-file:///C:/Users/Admin/Documents/portfolio2/app/Yuvraj-updated-resume-2024.pdf-resume-2024.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container px-4 py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.technical.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-lg py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container px-4 py-12 md:py-24 bg-muted/50">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Spotify Clone"
              description="A responsive web application that mimics the core features of Spotify, allowing users to browse, search, and play music seamlessly. Implemented user authentication, playlist management, and real-time audio playback."
              tags={["JavaScript", "HTML", "CSS", "Web Audio API"]}
              link="https://github.com/yuvrajmunjal9/Spotify-clone"
            />
            <ProjectCard
              title="Login Page"
              description="A sleek and responsive authentication interface with secure user validation, password strength indicators, and social login integration. Features modern UI components and smooth transitions."
              tags={["CSS", "HTML", "Responsive Design", "Authentication"]}
              link="https://github.com/yuvrajmunjal9/login-page-"
            />
            <ProjectCard
              title="Password Generator"
              description="A robust password generator built with React, featuring customizable password criteria, strength assessment, and one-click copying. Implements modern security practices and user-friendly interface."
              tags={["JavaScript", "React", "Security", "UI/UX"]}
              link="https://github.com/yuvrajmunjal9/password-generator"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container px-4 py-12 md:py-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect!</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I am excited to connect with fellow developers, collaborate on innovative projects, and contribute to the
            open-source community. Feel free to reach out if you'd like to discuss ideas or opportunities!
          </p>
          <ContactForm />
        </section>
      </main>
    </>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string
  description: string
  tags: string[]
  link: string
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <ExternalLink className="w-5 h-5" />
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

