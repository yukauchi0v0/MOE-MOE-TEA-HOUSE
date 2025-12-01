"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Star, ArrowRight, Clock, MapPin, Phone, Coffee, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const drinks = [
  {
    name: "抹茶拿鐵",
    englishName: "Matcha Latte",
    description: "京都宇治抹茶，濃郁香醇",
    price: "¥580",
    image: "/matcha-latte-in-cute-japanese-cup.jpg",
    badge: "人気",
    fullDescription:
      "使用京都宇治的頂級抹茶粉，搭配綿密的奶泡，呈現出抹茶特有的苦甜滋味。每一口都能感受到日本茶道的精緻與優雅，是本店最受歡迎的招牌飲品。",
    ingredients: ["宇治抹茶粉", "鮮奶", "奶泡", "糖漿"],
  },
  {
    name: "櫻花奶茶",
    englishName: "Sakura Milk Tea",
    description: "春日限定，浪漫櫻花香",
    price: "¥620",
    image: "/sakura-cherry-blossom-milk-tea-pink.jpg",
    badge: "New",
    fullDescription:
      "季節限定！使用鹽漬櫻花與紅茶調製而成，帶有淡淡的櫻花香氣與微鹹的口感。粉嫩的色澤如同春日盛開的櫻花，讓人彷彿置身於櫻花樹下。",
    ingredients: ["鹽漬櫻花", "紅茶", "鮮奶", "櫻花糖漿"],
  },
  {
    name: "焙茶歐蕾",
    englishName: "Hojicha Latte",
    description: "香濃焙茶，溫暖療癒",
    price: "¥550",
    image: "/hojicha-roasted-green-tea-latte.jpg",
    fullDescription:
      "使用日本焙茶製作，帶有獨特的烘焙香氣，口感溫潤不苦澀。搭配香濃鮮奶，是寒冷天氣的最佳選擇，讓人感到溫暖與放鬆。",
    ingredients: ["焙茶", "鮮奶", "黑糖", "奶泡"],
  },
  {
    name: "柚子蜂蜜茶",
    englishName: "Yuzu Honey Tea",
    description: "清新柚香，酸甜可口",
    price: "¥580",
    image: "/yuzu-citrus-honey-tea-japanese.jpg",
    badge: "限定",
    fullDescription:
      "使用日本柚子與天然蜂蜜調製，酸甜適中的口感讓人一喝就愛上。富含維生素C，美味又健康，是女孩們的最愛。",
    ingredients: ["日本柚子", "天然蜂蜜", "綠茶", "冰塊"],
  },
  {
    name: "黑糖珍珠奶茶",
    englishName: "Brown Sugar Boba Tea",
    description: "手工珍珠，香甜濃郁",
    price: "¥600",
    image: "/brown-sugar-boba-milk-tea-japanese-style.jpg",
    fullDescription:
      "使用手工製作的黑糖珍珠，Q彈有嚼勁。搭配香濃的鮮奶與紅茶，黑糖的焦香與茶香完美融合，每一口都是滿滿的幸福感。",
    ingredients: ["手工黑糖珍珠", "紅茶", "鮮奶", "黑糖漿"],
  },
  {
    name: "白桃烏龍茶",
    englishName: "White Peach Oolong",
    description: "果香茶韻，清爽怡人",
    price: "¥590",
    image: "/white-peach-oolong-tea-japanese.jpg",
    fullDescription:
      "精選台灣高山烏龍茶搭配日本白桃果肉，茶香與果香交織，清爽不膩。白桃的香甜與烏龍茶的韻味完美結合，是夏日的最佳選擇。",
    ingredients: ["烏龍茶", "白桃果肉", "白桃糖漿", "冰塊"],
  },
]

const allRecipes = [
  {
    name: "經典檸檬水",
    englishName: "Classic Lemonade",
    description: "清爽解渴的經典夏日飲品",
    prepTime: "10 分鐘",
    servings: "4 人份",
    image: "/fresh-lemonade-in-a-pitcher-with-lemon-slices.jpg",
    ingredients: ["6 顆新鮮檸檬", "1 杯白糖", "6 杯冷水", "冰塊適量", "薄荷葉裝飾"],
    instructions: [
      "將檸檬榨汁，約需 1 杯檸檬汁",
      "在大水壺中混合檸檬汁和糖",
      "加入冷水攪拌至糖完全溶解",
      "加入冰塊，用薄荷葉裝飾即可享用",
    ],
  },
  {
    name: "蜂蜜薑茶冰飲",
    englishName: "Honey Ginger Iced Tea",
    description: "健康養生的清涼飲品",
    prepTime: "15 分鐘",
    servings: "4 人份",
    image: "/iced-ginger-tea-with-honey-in-glasses.jpg",
    ingredients: ["4 杯水", "2 英寸新鮮薑片", "3 個紅茶包", "3 湯匙蜂蜜", "檸檬片裝飾"],
    instructions: [
      "將水煮沸，加入薑片煮 5 分鐘",
      "關火後加入茶包，浸泡 5 分鐘",
      "取出茶包和薑片，加入蜂蜜攪拌",
      "冷卻後加冰塊，用檸檬片裝飾",
    ],
  },
  {
    name: "草莓奇亞籽飲",
    englishName: "Strawberry Chia Drink",
    description: "營養豐富的健康飲品",
    prepTime: "5 分鐘 + 浸泡時間",
    servings: "2 人份",
    image: "/strawberry-chia-seed-drink-in-glass-jars.jpg",
    ingredients: ["2 杯新鮮草莓", "2 杯椰奶或杏仁奶", "3 湯匙奇亞籽", "2 湯匙蜂蜜或楓糖漿", "香草精少許"],
    instructions: [
      "將草莓、椰奶、蜂蜜和香草精放入攪拌機",
      "攪拌至順滑",
      "倒入容器中，加入奇亞籽攪拌均勻",
      "冷藏至少 2 小時讓奇亞籽膨脹後享用",
    ],
  },
  {
    name: "黃瓜薄荷水",
    englishName: "Cucumber Mint Water",
    description: "清新排毒的健康飲品",
    prepTime: "5 分鐘",
    servings: "6 人份",
    image: "/cucumber-mint-infused-water-in-a-glass-pitcher.jpg",
    ingredients: ["1 條黃瓜切片", "10 片新鮮薄荷葉", "2 顆萊姆切片", "8 杯冷水", "冰塊適量"],
    instructions: [
      "將黃瓜片、薄荷葉和萊姆片放入大水壺",
      "加入冷水",
      "冷藏至少 1 小時讓風味融合",
      "加入冰塊即可享用，可重複加水 2-3 次",
    ],
  },
  {
    name: "西瓜薄荷冰沙",
    englishName: "Watermelon Mint Smoothie",
    description: "夏日消暑聖品",
    prepTime: "8 分鐘",
    servings: "3 人份",
    image: "/watermelon-mint-drink-in-a-glass.jpg",
    ingredients: ["4 杯西瓜塊", "10 片薄荷葉", "2 湯匙蜂蜜", "1 杯冰塊", "萊姆汁少許"],
    instructions: [
      "將西瓜塊、薄荷葉和冰塊放入攪拌機",
      "加入蜂蜜和萊姆汁",
      "攪拌至順滑",
      "倒入杯中，用薄荷葉裝飾即可享用",
    ],
  },
  {
    name: "熱帶水果冰沙",
    englishName: "Tropical Fruit Smoothie",
    description: "充滿陽光的熱帶風味",
    prepTime: "10 分鐘",
    servings: "2 人份",
    image: "/tropical-mango-smoothie-in-a-tall-glass.jpg",
    ingredients: ["1 杯芒果塊", "1 杯鳳梨塊", "1 根香蕉", "1 杯椰奶", "冰塊適量"],
    instructions: ["將所有水果放入攪拌機", "加入椰奶和冰塊", "攪拌至順滑濃稠", "倒入杯中，可用鳳梨片裝飾"],
  },
  {
    name: "藍莓優格冰沙",
    englishName: "Blueberry Yogurt Smoothie",
    description: "抗氧化健康飲品",
    prepTime: "5 分鐘",
    servings: "2 人份",
    image: "/strawberry-chia-seed-drink-in-glass-jars.jpg",
    ingredients: ["2 杯新鮮藍莓", "1 杯希臘優格", "1 根香蕉", "2 湯匙蜂蜜", "半杯牛奶"],
    instructions: ["將藍莓、優格、香蕉放入攪拌機", "加入蜂蜜和牛奶", "攪拌至順滑", "倒入杯中即可享用"],
  },
  {
    name: "抹茶拿鐵",
    englishName: "Matcha Latte",
    description: "日式經典飲品",
    prepTime: "8 分鐘",
    servings: "2 人份",
    image: "/lime-green-tea-refreshing-drink.jpg",
    ingredients: ["2 茶匙抹茶粉", "2 杯牛奶", "2 湯匙糖", "熱水少許", "冰塊"],
    instructions: [
      "用少許熱水將抹茶粉調成糊狀",
      "加入糖攪拌均勻",
      "將牛奶加熱或使用冷牛奶",
      "將抹茶糊倒入杯中，加入牛奶和冰塊攪拌",
    ],
  },
  {
    name: "蜜桃冰茶",
    englishName: "Peach Iced Tea",
    description: "甜美果香茶飲",
    prepTime: "12 分鐘",
    servings: "4 人份",
    image: "/passion-fruit-drink-with-ice.jpg",
    ingredients: ["3 個紅茶包", "2 顆新鮮蜜桃", "3 湯匙蜂蜜", "4 杯水", "冰塊"],
    instructions: [
      "將水煮沸，加入茶包浸泡 5 分鐘",
      "蜜桃切片，一半放入茶中",
      "加入蜂蜜攪拌至溶解",
      "冷卻後加冰塊，用蜜桃片裝飾",
    ],
  },
  {
    name: "椰子水果冰沙",
    englishName: "Coconut Fruit Smoothie",
    description: "清爽椰香飲品",
    prepTime: "7 分鐘",
    servings: "2 人份",
    image: "/tropical-mango-smoothie-in-a-tall-glass.jpg",
    ingredients: ["1 杯椰子水", "1 杯鳳梨塊", "半杯芒果塊", "1 根香蕉", "冰塊"],
    instructions: ["將所有水果放入攪拌機", "加入椰子水和冰塊", "攪拌至順滑", "倒入杯中即可享用"],
  },
  {
    name: "紅石榴氣泡飲",
    englishName: "Pomegranate Sparkler",
    description: "華麗氣泡飲品",
    prepTime: "5 分鐘",
    servings: "2 人份",
    image: "/strawberry-yogurt-drink.jpg",
    ingredients: ["1 杯紅石榴汁", "2 杯氣泡水", "2 湯匙檸檬汁", "薄荷葉", "冰塊"],
    instructions: ["在杯中加入冰塊", "倒入紅石榴汁和檸檬汁", "加入氣泡水輕輕攪拌", "用薄荷葉裝飾即可享用"],
  },
  {
    name: "奇異果冰沙",
    englishName: "Kiwi Smoothie",
    description: "酸甜維C飲品",
    prepTime: "6 分鐘",
    servings: "2 人份",
    image: "/lime-green-tea-refreshing-drink.jpg",
    ingredients: ["4 顆奇異果", "1 根香蕉", "1 杯蘋果汁", "1 湯匙蜂蜜", "冰塊"],
    instructions: ["奇異果去皮切塊", "將奇異果、香蕉、蘋果汁放入攪拌機", "加入蜂蜜和冰塊", "攪拌至順滑即可享用"],
  },
]

const carouselImages = [
  "/cute-japanese-tea-house-interior-with-matcha.jpg",
  "/japanese-tea-ceremony-cute-aesthetic.jpg",
  "/kawaii-japanese-cafe-drinks-display.jpg",
  "/japanese-desserts-and-tea-cute-presentation.jpg",
  "/cozy-japanese-tea-room-moe-aesthetic.jpg",
]

const popularItems = [
  {
    name: "抹茶拿鐵",
    englishName: "Matcha Latte",
    description: "京都宇治抹茶，濃郁香醇",
    price: "NT$ 80",
    image: "/matcha-latte-in-cute-japanese-cup.jpg",
    badge: "人気",
    type: "飲品",
  },
  {
    name: "草莓大福",
    englishName: "Ichigo Daifuku",
    description: "軟糯麻糬包裹新鮮草莓",
    price: "NT$ 45",
    image: "/ichigo-daifuku-strawberry-mochi-japanese-sweet.jpg",
    badge: "人気",
    type: "甜品",
  },
  {
    name: "黑糖珍珠奶茶",
    englishName: "Brown Sugar Boba Tea",
    description: "手工珍珠，香甜濃郁",
    price: "NT$ 85",
    image: "/brown-sugar-boba-milk-tea-japanese-style.jpg",
    badge: "推薦",
    type: "飲品",
  },
  {
    name: "抹茶蛋糕卷",
    englishName: "Matcha Roll Cake",
    description: "濃郁抹茶風味蛋糕",
    price: "NT$ 85",
    image: "/matcha-green-tea-roll-cake-japanese.jpg",
    badge: "New",
    type: "甜品",
  },
  {
    name: "櫻花奶茶",
    englishName: "Sakura Milk Tea",
    description: "春日限定，浪漫櫻花香",
    price: "NT$ 90",
    image: "/sakura-cherry-blossom-milk-tea-pink.jpg",
    badge: "限定",
    type: "飲品",
  },
  {
    name: "銅鑼燒",
    englishName: "Dorayaki",
    description: "鬆軟餅皮夾紅豆餡",
    price: "NT$ 55",
    image: "/dorayaki-japanese-red-bean-pancake.jpg",
    badge: "經典",
    type: "甜品",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [selectedFood, setSelectedFood] = useState<(typeof popularItems)[0] | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev)
              newSet.delete(entry.target.id)
              return newSet
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-background grid-bg">
      <nav className="bg-primary/95 backdrop-blur-sm wavy-lace shadow-lg sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground pulse-animation" />
              <div>
                <h1
                  className="text-xl md:text-2xl font-bold tracking-wide text-primary-foreground"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  萌萌茶屋
                </h1>
                <p className="text-[9px] md:text-[11px] text-primary-foreground/90 tracking-widest">
                  MOE MOE TEA HOUSE
                </p>
              </div>
            </Link>
            <div className="flex gap-3 md:gap-8 text-sm md:text-base">
              <Link
                href="/"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide border-b-2 border-primary-foreground"
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
                美食
              </Link>
              <Link
                href="/recipes"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide"
              >
                線上點單
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hidden md:block"
              >
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="relative h-[60vh] md:h-[75vh] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentSlide === index ? 1 : 0,
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`店內氛圍 ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>
          ))}
        </div>

        <div className="absolute top-20 left-10 text-4xl float-animation opacity-40 animate-bounce-slow">✨</div>
        <div
          className="absolute bottom-32 right-16 text-4xl float-animation opacity-40 animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        >
          💖
        </div>
        <div
          className="absolute top-40 right-20 text-3xl float-animation opacity-30 animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        >
          🌸
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-5xl">
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary drop-shadow-2xl pulse-animation" />

              <div>
                <h2
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-wide"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  萌萌茶屋
                </h2>
                <div className="h-1.5 w-32 md:w-40 retro-gradient mx-auto mb-4 rounded-full shadow-lg" />
                <p className="text-xl md:text-2xl lg:text-3xl text-white mb-3 tracking-widest font-bold drop-shadow-lg">
                  MOE MOE TEA HOUSE
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-lg md:text-2xl text-white font-bold drop-shadow-lg">歡迎光臨主人！✨</p>
                <p className="text-base md:text-xl text-white/95 drop-shadow-lg max-w-2xl mx-auto">
                  一杯日式好茶，療癒您的心靈 💖
                </p>
                <div className="flex items-center justify-center gap-3 md:gap-4 text-sm md:text-base text-white drop-shadow-lg flex-wrap">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>11:00 - 21:00</span>
                  </div>
                  <span className="hidden md:inline">•</span>
                  <span>每日新鮮手作</span>
                  <Star className="w-4 h-4 text-yellow-300" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="retro-gradient hover:scale-105 text-white px-8 md:px-12 py-5 md:py-6 text-base md:text-lg shadow-2xl transition-all border-2 border-white/60 font-bold tracking-wide rounded-full"
                >
                  <Link href="/menu">
                    <Sparkles className="w-5 h-5 mr-2" />
                    查看菜單
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 md:px-12 py-5 md:py-6 text-base md:text-lg shadow-xl hover:scale-105 transition-all"
                >
                  <Link href="/recipes">
                    線上點單
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`切換到圖片 ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section
        id="popular"
        ref={(el) => {
          sectionRefs.current["popular"] = el
        }}
        className={`py-8 md:py-12 bg-background transition-all duration-1000 ${
          visibleSections.has("popular") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4 py-8 md:py-12 relative">
          <div className="text-center mb-10 md:mb-14 relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-12 md:w-24 bg-gradient-to-r from-transparent to-primary animate-fade-in"></div>
              <Sparkles className="w-6 h-6 text-primary animate-pulse-subtle" />
              <div className="h-0.5 w-12 md:w-24 bg-gradient-to-l from-transparent to-primary animate-fade-in"></div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-primary animate-bounce-subtle" />
              <h3
                className="text-3xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                人氣推薦
              </h3>
              <Star className="w-6 h-6 md:w-8 md:h-8 text-primary animate-bounce-subtle" />
            </div>

            <div className="relative inline-block">
              <p className="text-muted-foreground text-base md:text-lg font-medium tracking-wide">
                精選最受歡迎的招牌美食
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <Coffee className="w-4 h-4 text-primary/60 animate-pulse-subtle" />
              <div className="w-1 h-1 rounded-full bg-primary/60"></div>
              <Coffee className="w-4 h-4 text-primary/60 animate-pulse-subtle" style={{ animationDelay: "0.2s" }} />
              <div className="w-1 h-1 rounded-full bg-primary/60"></div>
              <Coffee className="w-4 h-4 text-primary/60 animate-pulse-subtle" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {popularItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedFood(item)}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-border hover:border-primary/40 animate-fade-in-up relative cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-foreground shadow-lg border border-border">
                    {item.type}
                  </div>
                  {item.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse-subtle">
                      {item.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 right-4 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-2.5 shadow-lg transition-all"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">{item.englishName}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">5.0</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">點擊查看詳情 →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16 relative">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-base md:text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <Link href="/menu">
                查看所有美食
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
              <div
                className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        ref={(el) => {
          sectionRefs.current["features"] = el
        }}
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-1000 delay-200 ${
          visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div
              className="text-center p-8 bg-card rounded-3xl shadow-lg border-2 border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300">
                <Heart className="w-8 h-8 text-primary animate-pulse-subtle" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">用心手作</h4>
              <p className="text-muted-foreground text-sm">每一杯都是精心調製，堅持使用新鮮食材與頂級茶葉</p>
            </div>

            <div
              className="text-center p-8 bg-card rounded-3xl shadow-lg border-2 border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-primary animate-pulse-subtle" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">日式風味</h4>
              <p className="text-muted-foreground text-sm">融合日本茶道精神，帶給您最道地的和風茶飲體驗</p>
            </div>

            <div
              className="text-center p-8 bg-card rounded-3xl shadow-lg border-2 border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300">
                <Star className="w-8 h-8 text-primary animate-pulse-subtle" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">溫暖療癒</h4>
              <p className="text-muted-foreground text-sm">打造舒適空間，讓每位客人都能感受到家的溫馨</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="info"
        ref={(el) => {
          sectionRefs.current["info"] = el
        }}
        className={`py-16 md:py-24 bg-primary transition-all duration-1000 delay-300 ${
          visibleSections.has("info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-4xl">
          <h3
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            立即開始您的茶飲之旅
          </h3>
          <p className="text-primary-foreground/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            點擊下方按鈕，探索更多美味飲品，或直接線上點單享受便利服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all"
            >
              <Link href="/drinks">探索美食</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all"
            >
              <Link href="/recipes">
                線上點單
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer
        id="footer"
        ref={(el) => {
          sectionRefs.current["footer"] = el
        }}
        className={`bg-primary/95 text-primary-foreground py-12 md:py-16 wavy-lace-top transition-all duration-1000 delay-400 ${
          visibleSections.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-lg">萌萌茶屋</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">用心沖泡每一杯，傳遞日式溫暖與療癒</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">營業資訊</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>週一至週日 11:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>台北市信義區松仁路100號</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(02) 2345-6789</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <div className="space-y-2 text-sm">
                <Link href="/menu" className="block text-muted-foreground hover:text-primary transition-colors">
                  甜品菜單
                </Link>
                <Link href="/drinks" className="block text-muted-foreground hover:text-primary transition-colors">
                  美食介紹
                </Link>
                <Link href="/recipes" className="block text-muted-foreground hover:text-primary transition-colors">
                  線上點單
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  關於我們
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-primary" />
              <p className="font-bold tracking-wide text-foreground text-sm">© 2025 萌萌茶屋 Moe Moe Tea House</p>
              <Heart className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {selectedFood && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in border-2 border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedFood.image || "/placeholder.svg"}
                  alt={selectedFood.name}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={() => setSelectedFood(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground rounded-full p-2 transition-all hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
                {selectedFood.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {selectedFood.badge}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {selectedFood.type}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{selectedFood.name}</h2>
                    <p className="text-lg text-muted-foreground">{selectedFood.englishName}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base">{selectedFood.description}</p>

                <div className="bg-muted/30 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-primary" />
                    商品特色
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      精選食材，品質保證
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      現點現做，新鮮美味
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      用心製作，健康無負擔
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">價格</p>
                    <p className="text-4xl font-bold text-primary">{selectedFood.price}</p>
                  </div>
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    onClick={() => setSelectedFood(null)}
                  >
                    關閉
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
