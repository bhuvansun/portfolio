import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "./components/ProjectCard"
import { DarkModeToggle } from "./components/DarkModeToggle"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "BMI Prediction",
      description:
        "Designed a Dual-pipelined Modified ResNet50 CNN Model for predicting BMI of a person using only their mugshots of frontal and side facial images.",
      imageUrl: "https://images2.imgbox.com/d0/92/OHmVKkE5_o.png?height=200&width=400",
      tags: ["Python", "Deep Learning", "CNN", "ResNet"],
      link: "https://github.com/bhuvansun/bmi-prediction-facial-images",
    },
    {
      title: "Skew Correction",
      description: "Built a RotNet CNN model using TensorFlow to correct images that are slanted, or skewed.",
      imageUrl: "https://images2.imgbox.com/73/4c/0TWTyN6D_o.png?height=200&width=400",
      tags: ["Python", "RotNet", "Deep Learning", "CNN", "Tensorflow"],
      link: "https://github.com/bhuvansun/skew-correction-enhancement-doc-images",
    },
    {
      title: "Epilepsy Prediction",
      description:
        "Developed a DL model using CNNs for predicting epileptic seizures 10 minutes prior by utilizing EEG recordings.",
      imageUrl: "https://images2.imgbox.com/4d/5a/j8CaMVy0_o.jpg?height=200&width=400",
      tags: ["CNN", "ResNet", "Wavelet Transform", "SCA", "BSS", "EMD"],
      link: "https://github.com/bhuvansun/chb-mit-epilepsy-prediction-eeg",
    },
    {
      title: "Path Finding Agent",
      description:
        "Simulated an AI agent picking up an item and delivering it to the goal destination in the shortest and cost-efficient path by implementing A*, IDS, and BFS algorithms in Python, and utilizing Pygame library for visualization.",
      imageUrl: "https://images2.imgbox.com/11/f5/ANcMO0Tu_o.jpg?height=200&width=400",
      tags: ["Pygame", "A*", "IDS", "BFS", "Python"],
      link: "https://github.com/bhuvansun/food-serving-robot-a-",
    },
    {
      title: "Automated Inventory Log",
      description:
        "Automating Inventory Management by implementing multiple ESP32CAM Modules for capturing images, and processing them using CV to identify, quantify and localize items in a database file.",
      imageUrl: "https://images2.imgbox.com/30/de/ebi5WeWN_o.jpg?height=200&width=400",
      tags: ["Yolo", "esp32cam", "Arduino", "CV"],
      link: "https://github.com/bhuvansun/esp32cam-object-detection-yolo",
    },

    {
      title: "Primal Dual Optimization",
      description:
        "MATLAB implementation of Chambolle and Pock’s Primal Dual Algorithm in conjunction with Tikhonov Regularization and a Gaussian Kernel for function generation",
      imageUrl: "https://images2.imgbox.com/28/e4/oAMgB8MB_o.png?height=200&width=400",
      tags: ["MATLAB", "Optimization"],
      link: "https://github.com/bhuvansun/primal-dual-optimization",
    },

    {
      title: "Placements Analysis and Predictions",
      description:
        "Performed Data Analysis and applied ML models to analyze and predict placements statistics for my institution.",
      imageUrl: "https://images2.imgbox.com/30/fb/Wn2eUo5N_o.png?height=200&width=400",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Random Forest Regression"],
      link: "https://github.com/bhuvansun/iiitdmk-placements",
    },

    {
      title: "Restaurant Website",
      description: "Developed a functional and interactive Restaurant Website.",
      imageUrl: "https://images2.imgbox.com/f0/39/XZryh18w_o.png?height=200&width=400",
      tags: ["Azure Static App", "Azure Blob Storage", "HTML", "CSS", "JS"],
      link: "https://github.com/bhuvansun/future-ready-talent",
    },

    {
      title: "Encrypted Serial Communication",
      description: "An Arduino library to enable encrypted communications over serial ports.",
      imageUrl: "https://images2.imgbox.com/ca/30/YXLqiAPE_o.jpg?height=200&width=400",
      tags: ["Arduino", "C++", "encryption", "ecc256"],
      link: "https://github.com/bhuvansun/encrypted-serial-communication",
    },
  ]

  const skills = [
    "Python",
    "Java",
    "C++",
    "C",
    "C#",
    "MATLAB",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    ".NET",
    "MongoDB",
    "SQL",
    "Git",
    "Bash",
    "Powershell",
    "Linux",
    "Azure",
    "AWS",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
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

          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Passionate about creating innovative solutions using cutting-edge technologies. Interested and working in
            the fields of Data Science, Machine Learning, Artificial Intelligence, Web Development, Cybersecurity and
            Embedded Systems.
          </p>
          <a href="/Thribhuvan.pdf" download>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Download Resume
            </Button>
          </a>
        </section>

        {/* About Me Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <div className="space-y-4">
            <p>
              Hello! I'm Thribhuvan, currently a Final Year Undergraduate majoring in Electronics and Communication
              Engineering from Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram. A
              passionate data analyst and machine learning enthusiast, my journey in the world of technology began with
              a fascination for solving complex problems and has evolved into a deep love for data-driven decision
              making and artificial intelligence.
            </p>
            <p>
              With a strong foundation in Python and data analysis tools, I've worked on projects ranging from automated
              systems to complex machine learning models. I'm constantly exploring new technologies and methodologies to
              stay at the forefront of this rapidly evolving field.
            </p>
            <p>
              When I'm not coding or analyzing data, you can find me exploring the latest developments in AI, or
              learning about something I haven't yet.
            </p>
            <p>
              I'm always open to new opportunities and collaborations. If you're working on an exciting project or just
              want to chat about anything, feel free to reach out!
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
        <section id="skills" className="mb-20">
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

