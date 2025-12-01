import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface DrinkCardProps {
  name: string
  englishName: string
  description: string
  price: string
  image: string
  badge?: string
}

export function DrinkCard({ name, englishName, description, price, image, badge }: DrinkCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 neon-card hover:scale-105 relative group">
      {badge && <div className="absolute top-3 right-3 neon-badge z-10">{badge}</div>}

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} - ${englishName}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <CardContent className="p-6 bg-card/50 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3
              className="text-2xl font-bold mb-2 text-primary neon-glow"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              {name}
            </h3>
            <p className="text-xs text-secondary tracking-widest uppercase font-bold">{englishName}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-accent neon-glow">{price}</p>
          </div>
        </div>

        <div className="h-px vaporwave-gradient my-4 rounded-full" />

        <p className="text-foreground/80 leading-relaxed text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
