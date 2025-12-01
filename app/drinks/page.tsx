"use client"

import Link from "next/link"
import { DrinkCard } from "@/components/drink-card"
import { Heart, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const drinks = [
  {
    name: "抹茶拿鐵",
    englishName: "Matcha Latte",
    description: "京都宇治抹茶，濃郁香醇",
    price: "NT$ 80",
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
    price: "NT$ 90",
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
    price: "NT$ 75",
    image: "/hojicha-roasted-green-tea-latte.jpg",
    fullDescription:
      "使用日本焙茶製作，帶有獨特的烘焙香氣，口感溫潤不苦澀。搭配香濃鮮奶，是寒冷天氣的最佳選擇，讓人感到溫暖與放鬆。",
    ingredients: ["焙茶", "鮮奶", "黑糖", "奶泡"],
  },
  {
    name: "柚子蜂蜜茶",
    englishName: "Yuzu Honey Tea",
    description: "清新柚香，酸甜可口",
    price: "NT$ 95",
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
    price: "NT$ 85",
    image: "/brown-sugar-boba-milk-tea-japanese-style.jpg",
    fullDescription:
      "使用手工製作的黑糖珍珠，Q彈有嚼勁。搭配香濃的鮮奶與紅茶，黑糖的焦香與茶香完美融合，每一口都是滿滿的幸福感。",
    ingredients: ["手工黑糖珍珠", "紅茶", "鮮奶", "黑糖漿"],
  },
  {
    name: "白桃烏龍茶",
    englishName: "White Peach Oolong",
    description: "果香茶韻，清爽怡人",
    price: "NT$ 90",
    image: "/white-peach-oolong-tea-japanese.jpg",
    fullDescription:
      "精選台灣高山烏龍茶搭配日本白桃果肉，茶香與果香交織，清爽不膩。白桃的香甜與烏龍茶的韻味完美結合，是夏日的最佳選擇。",
    ingredients: ["烏龍茶", "白桃果肉", "白桃糖漿", "冰塊"],
  },
]

export default function DrinksPage() {
  const [selectedDrink, setSelectedDrink] = useState<(typeof drinks)[0] | null>(null)

  return (
    <div className="h-screen overflow-hidden bg-background grid-bg flex flex-col">
      <nav className="bg-primary wavy-lace shadow-lg flex-shrink-0 animate-slide-down">
        <div className="container mx-auto px-4 md:px-6 py-2 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity animate-fade-in">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground animate-pulse-slow" />
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
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hover:scale-110 duration-300"
              >
                首頁
              </Link>
              <Link
                href="/menu"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hover:scale-110 duration-300"
              >
                甜品
              </Link>
              <Link
                href="/drinks"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hover:scale-110 duration-300"
              >
                飲品
              </Link>
              <Link
                href="/recipes"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hover:scale-110 duration-300"
              >
                線上點單
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all font-medium tracking-wide hover:scale-110 duration-300"
              >
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex-1 overflow-y-auto px-3 md:px-6 py-4 md:py-6 bg-background/95">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-block animate-fade-in-up">
              <div className="neon-card px-4 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary mb-2 animate-spin-slow" />
                <p className="text-[10px] md:text-xs tracking-widest mb-1 text-secondary font-bold">MENU</p>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 animate-bounce-slow"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  本日茶飲
                </h2>
                <div className="h-0.5 md:h-1 w-16 md:w-24 vaporwave-gradient mx-auto mt-2 rounded-full animate-pulse" />
              </div>
            </div>
            <p className="text-xs md:text-base text-foreground/80 flex items-center justify-center gap-2 mt-3 flex-wrap animate-fade-in">
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse-slow" />
              精選日式茶飲 • 每日新鮮手作
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse-slow" />
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {drinks.map((drink, index) => (
              <div
                key={index}
                onClick={() => setSelectedDrink(drink)}
                className="cursor-pointer animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DrinkCard {...drink} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDrink && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedDrink(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto neon-border shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedDrink.image || "/placeholder.svg"}
                alt={selectedDrink.name}
                className="w-full h-64 object-cover rounded-t-3xl hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={() => setSelectedDrink(null)}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedDrink.badge && (
                <div className="absolute top-4 left-4 neon-badge text-lg px-4 py-2 animate-bounce-slow">
                  {selectedDrink.badge}
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6 animate-fade-in-up">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                    {selectedDrink.name}
                  </h3>
                  <p className="text-sm text-secondary tracking-widest uppercase">{selectedDrink.englishName}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-accent animate-pulse-slow">{selectedDrink.price}</p>
                </div>
              </div>

              <div className="h-px vaporwave-gradient my-6 rounded-full animate-pulse" />

              <div className="space-y-6">
                <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-spin-slow" />
                    飲品介紹
                  </h4>
                  <p className="text-foreground/90 leading-relaxed">{selectedDrink.fullDescription}</p>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-spin-slow" />
                    主要成分
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDrink.ingredients.map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:scale-110 transition-transform duration-300 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Button
                  onClick={() => setSelectedDrink(null)}
                  className="vaporwave-gradient text-white px-8 py-6 text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300"
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
