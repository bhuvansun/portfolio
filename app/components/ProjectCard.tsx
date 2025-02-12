import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          View Project →
        </a>
      </CardContent>
    </Card>
  )
}

