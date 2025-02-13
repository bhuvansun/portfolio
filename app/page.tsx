import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "./components/ProjectCard"
import { SkillBadge } from "./components/SkillBadge"
import { DarkModeToggle } from "./components/DarkModeToggle"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "Automated Attendance System",
      description: "Developed a face recognition-based attendance system using Python and OpenCV",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "OpenCV", "Face Recognition"],
      link: "#",
    },
    {
      title: "E-commerce Website",
      description: "Created a full-stack e-commerce platform with React and Node.js",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Machine Learning Projects",
      description: "Implemented various ML algorithms for classification and regression tasks",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "Scikit-learn", "TensorFlow"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website using Next.js and Tailwind CSS",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "Tailwind CSS", "React"],
      link: "#",
    },
  ]

  const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "Machine Learning",
    "Data Structures",
    "Algorithms",
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TS</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
          <DarkModeToggle />
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero Section */}
        <section id="about" className="text-center">
          <Image
            src="https://images2.imgbox.com/ff/50/PEmMTLNd_o.png?height=200&width=200"
            alt="Thribhuvan Sunkavalli"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Thribhuvan Sunkavalli
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">Data Analyst | Machine Learning Enthusiast</p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Passionate about creating innovative solutions using cutting-edge technologies. Interested and working in
            the fields of Data Science, Machine Learning, Artificial Intelligence, Web Development, Cybersecurity and
            Embedded Systems.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Download CV
          </Button>
        </section>

        {/* About Me Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <div className="space-y-4">
            <p>
              Hello! I'm Thribhuvan, a passionate data analyst and machine learning enthusiast. My journey in the world
              of technology began with a fascination for solving complex problems and has evolved into a deep love for
              data-driven decision making and artificial intelligence.
            </p>
            <p>
              With a strong foundation in Python, Java, and various data analysis tools, I've worked on projects ranging
              from automated systems to complex machine learning models. I'm constantly exploring new technologies and
              methodologies to stay at the forefront of this rapidly evolving field.
            </p>
            <p>
              When I'm not coding or analyzing data, you can find me exploring the latest developments in AI,
              contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups.
            </p>
            <p>
              I'm always open to new opportunities and collaborations. If you're working on an exciting project or just
              want to chat about data science and AI, feel free to reach out!
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id = "skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/bhuvansun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/thribhuvan-sunkavalli-720772233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:bhuvan2k3@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thribhuvan Sunkavalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

