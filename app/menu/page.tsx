"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Star, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const popularFoods = [
  {
    name: "草莓大福",
    englishName: "Ichigo Daifuku",
    description: "軟糯麻糬包裹新鮮草莓",
    price: "NT$ 45", // 改為台幣格式
    image: "/ichigo-daifuku-strawberry-mochi-japanese-sweet.jpg",
    badge: "人気",
    fullDescription:
      "日本經典和菓子，使用軟糯的白玉麻糬包裹整顆新鮮草莓與紅豆餡。一口咬下，草莓的酸甜與紅豆的香甜在口中完美融合，是最受歡迎的日式甜點。",
    ingredients: ["新鮮草莓", "白玉麻糬", "紅豆餡", "糖粉"],
  },
  {
    name: "抹茶蛋糕卷",
    englishName: "Matcha Roll Cake",
    description: "濃郁抹茶風味蛋糕",
    price: "NT$ 85", // 改為台幣格式
    image: "/matcha-green-tea-roll-cake-japanese.jpg",
    badge: "New",
    fullDescription:
      "使用京都宇治抹茶粉製作的蛋糕卷，搭配香濃的鮮奶油內餡。抹茶的微苦與奶油的香甜達到完美平衡，口感綿密細緻，是抹茶控的最愛。",
    ingredients: ["宇治抹茶粉", "蛋糕體", "鮮奶油", "紅豆"],
  },
  {
    name: "銅鑼燒",
    englishName: "Dorayaki",
    description: "鬆軟餅皮夾紅豆餡",
    price: "NT$ 55", // 改為台幣格式
    image: "/dorayaki-japanese-red-bean-pancake.jpg",
    fullDescription:
      "哆啦A夢最愛的甜點！兩片鬆軟的蜂蜜餅皮夾著香甜的紅豆餡，口感綿密不膩。每一口都能感受到傳統日式點心的溫暖與懷舊。",
    ingredients: ["蜂蜜餅皮", "紅豆餡", "蜂蜜", "雞蛋"],
  },
  {
    name: "櫻花麻糬",
    englishName: "Sakura Mochi",
    description: "粉嫩櫻花風味麻糬",
    price: "NT$ 50", // 改為台幣格式
    image: "/sakura-mochi-pink-cherry-blossom-japanese.jpg",
    badge: "限定",
    fullDescription:
      "春季限定！粉紅色的麻糬包裹著紅豆餡，外層裹著鹽漬櫻花葉。櫻花的清香與紅豆的甜美交織，是春天的浪漫滋味。",
    ingredients: ["櫻花麻糬", "紅豆餡", "鹽漬櫻花葉", "糯米"],
  },
  {
    name: "抹茶提拉米蘇",
    englishName: "Matcha Tiramisu",
    description: "日式抹茶與義式經典結合",
    price: "NT$ 95", // 改為台幣格式
    image: "/matcha-tiramisu-dessert.jpg",
    fullDescription:
      "日式抹茶與義式提拉米蘇的完美結合，使用京都宇治抹茶粉，層層堆疊的馬斯卡彭起司與手指餅乾，帶來濃郁的抹茶香氣與綿密的口感。",
    ingredients: ["宇治抹茶粉", "馬斯卡彭起司", "手指餅乾", "鮮奶油"],
  },
  {
    name: "水果大福",
    englishName: "Fruit Daifuku",
    description: "繽紛水果麻糬",
    price: "NT$ 65", // 改為台幣格式
    image: "/mango-mille-crepe-cake.jpg",
    fullDescription:
      "使用當季新鮮水果製作的大福，軟糯的麻糬包裹著多汁的水果與白豆沙。每一顆都是不同的驚喜，色彩繽紛，是視覺與味覺的雙重享受。",
    ingredients: ["季節水果", "白玉麻糬", "白豆沙", "糖粉"],
  },
  {
    name: "抹茶冰淇淋",
    englishName: "Matcha Ice Cream",
    description: "濃郁抹茶冰淇淋",
    price: "NT$ 60", // 改為台幣格式
    image: "/honey-toast-with-ice-cream.jpg",
    fullDescription:
      "使用頂級宇治抹茶製作的冰淇淋，抹茶香氣濃郁，口感綿密細緻。微苦的抹茶與香甜的冰淇淋完美平衡，是夏日消暑的最佳選擇。",
    ingredients: ["宇治抹茶粉", "鮮奶油", "牛奶", "糖"],
  },
  {
    name: "和風布丁",
    englishName: "Japanese Pudding",
    description: "滑順焦糖布丁",
    price: "NT$ 60", // 改為台幣格式
    image: "/caramel-pudding-dessert.jpg",
    fullDescription:
      "日式焦糖布丁，使用新鮮雞蛋與鮮奶製作，口感滑順細緻。焦糖的微苦與布丁的香甜完美融合，是永不退流行的經典甜點。",
    ingredients: ["新鮮雞蛋", "鮮奶", "焦糖", "香草莢"],
  },
  {
    name: "黑糖麻糬",
    englishName: "Brown Sugar Mochi",
    description: "黑糖香氣濃郁麻糬",
    price: "NT$ 50", // 改為台幣格式
    image: "/dorayaki-japanese-red-bean-pancake.jpg",
    badge: "推薦",
    fullDescription:
      "使用沖繩黑糖製作的麻糬，黑糖的焦香與麻糬的Q彈完美結合。每一口都能感受到黑糖的濃郁香氣，是懷舊的古早味。",
    ingredients: ["沖繩黑糖", "糯米", "黃豆粉", "紅豆餡"],
  },
  {
    name: "芝麻丸子",
    englishName: "Sesame Dango",
    description: "香濃芝麻糯米糰子",
    price: "NT$ 55", // 改為台幣格式
    image: "/sakura-mochi-pink-cherry-blossom-japanese.jpg",
    fullDescription: "外層裹滿香濃的黑芝麻粉，內餡是軟糯的白玉麻糬。芝麻的香氣與麻糬的甜美相得益彰，口感豐富有層次。",
    ingredients: ["黑芝麻粉", "白玉麻糬", "糖", "糯米粉"],
  },
  {
    name: "紅豆麵包",
    englishName: "Anpan",
    description: "鬆軟麵包夾紅豆餡",
    price: "NT$ 50", // 改為台幣格式
    image: "/ichigo-daifuku-strawberry-mochi-japanese-sweet.jpg",
    fullDescription:
      "日本經典麵包，鬆軟的麵包體包裹著香甜的紅豆餡。剛出爐時最美味，麵包的香氣與紅豆的甜美讓人一口接一口。",
    ingredients: ["麵包體", "紅豆餡", "黑芝麻", "奶油"],
  },
  {
    name: "芋頭酥",
    englishName: "Taro Pastry",
    description: "酥脆外皮包芋泥",
    price: "NT$ 65", // 改為台幣格式
    image: "/matcha-green-tea-roll-cake-japanese.jpg",
    badge: "熱銷",
    fullDescription:
      "酥脆的千層酥皮包裹著綿密的芋頭內餡，芋頭的香甜與酥皮的奶香完美融合。每一口都是酥脆與綿密的雙重享受。",
    ingredients: ["芋頭泥", "千層酥皮", "奶油", "糖"],
  },
]

export default function MenuPage() {
  const [selectedFood, setSelectedFood] = useState<(typeof popularFoods)[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    "/japanese-desserts-and-tea-cute-presentation.jpg",
    "/matcha-green-tea-roll-cake-japanese.jpg",
    "/ichigo-daifuku-strawberry-mochi-japanese-sweet.jpg",
    "/sakura-mochi-pink-cherry-blossom-japanese.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="h-screen overflow-hidden bg-background grid-bg flex flex-col">
      <nav className="bg-primary wavy-lace shadow-lg flex-shrink-0 animate-slide-down">
        <div className="container mx-auto px-4 md:px-6 py-2 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground animate-pulse" />
              <div>
                <h1
                  className="text-lg md:text-xl font-bold tracking-wide text-primary-foreground"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  萌萌茶屋
                </h1>
                <p className="text-[8px] md:text-[10px] text-primary-foreground/80 tracking-widest">
                  MOE MOE TEA HOUSE
                </p>
              </div>
            </Link>
            <div className="flex gap-2 md:gap-6 text-xs md:text-base">
              <Link
                href="/"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                首頁
              </Link>
              <Link
                href="/menu"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                甜品
              </Link>
              <Link
                href="/drinks"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                飲品
              </Link>
              <Link
                href="/recipes"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                線上點單
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 overflow-y-auto px-3 md:px-4 py-3 md:py-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            asChild
            variant="ghost"
            className="mb-2 md:mb-3 text-primary hover:text-primary/80 h-7 md:h-8 px-2 md:px-3 text-xs md:text-sm"
          >
            <Link href="/">
              <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              返回首頁
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="space-y-2 animate-fade-in">
              <div className="cute-card p-2 md:p-3 text-center bg-primary animate-bounce-in">
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                  <h3
                    className="text-xl md:text-3xl font-bold"
                    style={{ fontFamily: "var(--font-pacifico)", color: "#448478" }}
                  >
                    新品上市
                  </h3>
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                </div>
                <p className="text-sm md:text-base text-green-500 font-bold mt-0.5 tracking-widest">NEW ARRIVAL</p>
              </div>

              <div
                className="cute-card p-0 overflow-hidden relative animate-scale-in"
                style={{
                  background: "repeating-conic-gradient(#EE7CAC 0% 25%, #F8D2EE 0% 50%) 50% / 40px 40px",
                }}
              >
                <div className="p-3 md:p-4">
                  <div className="bg-background rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute top-2 left-2 z-10">
                      <div className="bg-accent text-primary-foreground px-3 py-1.5 rounded-full text-sm md:text-lg font-bold shadow-lg rotate-[-5deg]">
                        季節の特別メニュー
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={carouselImages[currentSlide] || "/placeholder.svg"}
                        alt="新品上市"
                        className="w-full aspect-square object-cover transition-all duration-500"
                      />

                      <button
                        onClick={prevSlide}
                        className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110"
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>

                      <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                        {carouselImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                              index === currentSlide ? "bg-primary w-4 md:w-6" : "bg-primary/40 hover:bg-primary/60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-delay">
              <div className="text-center mb-2 md:mb-3">
                <div className="inline-block cute-card px-3 md:px-4 py-1.5 md:py-2">
                  <h2
                    className="text-lg md:text-xl font-bold text-primary mb-0.5"
                    style={{ fontFamily: "var(--font-pacifico)" }}
                  >
                    和菓子
                  </h2>
                  <p className="text-[8px] md:text-[10px] text-secondary tracking-widest">近期熱門品項</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2">
                {popularFoods.slice(0, 4).map((food, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedFood(food)}
                    className="cute-card overflow-hidden hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-background"
                  >
                    <div className="relative">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="w-full aspect-square object-cover"
                      />
                      {food.badge && (
                        <div className="absolute top-0.5 right-0.5 cute-badge text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5">
                          {food.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-1 md:p-1.5 text-center border-t-2 border-primary/20">
                      <p className="font-bold text-primary text-[9px] md:text-[10px]">{food.name}</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-accent mt-0.5">{food.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-1.5 md:my-2 h-1.5 md:h-2 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 rounded-full shadow-inner border-2 border-amber-900/30"></div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2">
                {popularFoods.slice(4, 8).map((food, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedFood(food)}
                    className="cute-card overflow-hidden hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-background"
                  >
                    <div className="relative">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="w-full aspect-square object-cover"
                      />
                      {food.badge && (
                        <div className="absolute top-0.5 right-0.5 cute-badge text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5">
                          {food.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-1 md:p-1.5 text-center border-t-2 border-primary/20">
                      <p className="font-bold text-primary text-[9px] md:text-[10px]">{food.name}</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-accent mt-0.5">{food.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-1.5 md:my-2 h-1.5 md:h-2 bg-gradient-to-r from-coffee-800 via-coffee-700 to-coffee-800 rounded-full shadow-inner border-2 border-coffee-900/30"></div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2">
                {popularFoods.slice(8, 12).map((food, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedFood(food)}
                    className="cute-card overflow-hidden hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-background"
                  >
                    <div className="relative">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="w-full aspect-square object-cover"
                      />
                      {food.badge && (
                        <div className="absolute top-0.5 right-0.5 cute-badge text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5">
                          {food.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-1 md:p-1.5 text-center border-t-2 border-primary/20">
                      <p className="font-bold text-primary text-[9px] md:text-[10px]">{food.name}</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-accent mt-0.5">{food.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center animate-bounce-subtle">
            <Button
              asChild
              size="lg"
              className="retro-gradient text-primary-foreground px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold rounded-full cute-border hover:scale-110 transition-all"
            >
              <Link href="/drinks">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-spin-slow" />
                查看飲品菜單
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 ml-2 animate-spin-slow" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {selectedFood && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto neon-border shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedFood.image || "/placeholder.svg"}
                alt={selectedFood.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedFood(null)}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedFood.badge && (
                <div className="absolute top-4 left-4 neon-badge text-lg px-4 py-2">{selectedFood.badge}</div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                    {selectedFood.name}
                  </h3>
                  <p className="text-sm text-secondary tracking-widest uppercase">{selectedFood.englishName}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-accent">{selectedFood.price}</p>
                </div>
              </div>

              <div className="h-px vaporwave-gradient my-6 rounded-full" />

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    甜點介紹
                  </h4>
                  <p className="text-foreground/90 leading-relaxed">{selectedFood.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    主要成分
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFood.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={() => setSelectedFood(null)}
                  className="vaporwave-gradient text-white px-8 py-6 text-lg font-bold rounded-full"
                >
                  關閉
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
