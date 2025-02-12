import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "./components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { DarkModeToggle } from "./components/DarkModeToggle"

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
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Thribhuvan Sunkavalli</h1>
          <DarkModeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="text-center mb-20">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Thribhuvan Sunkavalli"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-4">Thribhuvan Sunkavalli</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Full Stack Developer | Machine Learning Enthusiast
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions using cutting-edge technologies. With a strong foundation in
            full-stack development and machine learning, I strive to build efficient and scalable applications that
            solve real-world problems.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
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
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/thribhuvanrapolu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/thribhuvan-sunkavalli-720772233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:thribhuvanrapolu@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thribhuvan Sunkavalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

