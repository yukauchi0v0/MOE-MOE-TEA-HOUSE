import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"
import Image from "next/image"

interface RecipeCardProps {
  name: string
  englishName: string
  description: string
  prepTime: string
  servings: string
  image: string
  ingredients: string[]
  instructions: string[]
}

export function RecipeCard({
  name,
  englishName,
  description,
  prepTime,
  servings,
  image,
  ingredients,
  instructions,
}: RecipeCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 neon-card hover:scale-105 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} - ${englishName}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <CardHeader className="bg-card/50 backdrop-blur-sm border-b-2 border-primary/50">
        <CardTitle className="text-2xl text-primary neon-glow" style={{ fontFamily: "var(--font-pacifico)" }}>
          {name}
          <span className="block text-sm font-bold text-secondary mt-2 tracking-widest uppercase">{englishName}</span>
        </CardTitle>
        <p className="text-sm text-foreground/80 leading-relaxed mt-2">{description}</p>

        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-2 border-primary/50 rounded-full backdrop-blur-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-foreground">{prepTime}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-2 border-secondary/50 rounded-full backdrop-blur-sm">
            <Users className="h-4 w-4 text-secondary" />
            <span className="text-sm font-bold text-foreground">{servings}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6 bg-card/50 backdrop-blur-sm">
        <div>
          <div className="mb-4 pb-2 border-b-2 border-primary/50">
            <h4 className="font-bold text-primary text-lg neon-glow">
              材料 <span className="text-sm text-secondary font-bold">Ingredients</span>
            </h4>
          </div>
          <ul className="space-y-2 text-sm">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-3 pl-2">
                <span className="text-accent mt-0.5 font-bold text-lg">✦</span>
                <span className="text-foreground/90">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 pb-2 border-b-2 border-primary/50">
            <h4 className="font-bold text-primary text-lg neon-glow">
              步驟 <span className="text-sm text-secondary font-bold">Instructions</span>
            </h4>
          </div>
          <ol className="space-y-3 text-sm">
            {instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-3 pl-2">
                <span className="flex-shrink-0 w-7 h-7 vaporwave-gradient text-white font-bold text-xs flex items-center justify-center mt-0.5 rounded-full border-2 border-white/50">
                  {index + 1}
                </span>
                <span className="text-foreground/90 leading-relaxed">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
