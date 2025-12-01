"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, MapPin, Clock, Phone, Mail, Train, Bus, Car, Award, Users, Leaf, X } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null)

  const detailsContent = {
    story: {
      title: "品牌故事",
      content: `萌萌茶屋創立於2015年，起源於創辦人對日本茶文化的熱愛。在一次京都之旅中，她深深被日式茶屋的氛圍所吸引，決心將這份美好帶回台灣。

經過多年的努力與堅持，我們從一間小小的店面開始，逐漸成長為深受顧客喜愛的日式茶飲品牌。我們堅持使用來自日本的頂級茶葉，每一杯都是用心手作。

在這裡，我們不只是賣茶飲，更希望為每一位來訪的客人帶來溫暖與療癒，就像在日本的喫茶店一樣，讓忙碌的心靈得到片刻的寧靜。`,
    },
    ingredients: {
      title: "嚴選食材",
      content: `我們堅持選用最優質的食材：

🍵 茶葉：來自日本靜岡、京都宇治的頂級茶葉
🥛 乳製品：使用北海道鮮奶，濃郁香醇
🌸 和菓子：每日新鮮手作，不添加防腐劑
🍓 水果：嚴選當季新鮮水果，保證品質
🍯 糖類：使用天然蔗糖與蜂蜜，健康無負擔

所有食材都經過嚴格把關，讓您吃得安心、喝得放心。`,
    },
    awards: {
      title: "榮譽與認證",
      content: `萌萌茶屋榮獲多項殊榮：

🏆 2023台北最佳日式茶飲店
🏆 2022食品安全優良認證
🏆 2021顧客滿意度金獎
🏆 2020最受歡迎和菓子店
🏆 日本茶道協會認證店家

感謝每一位顧客的支持與肯定，我們會繼續努力，提供更優質的服務與產品！`,
    },
    team: {
      title: "我們的團隊",
      content: `萌萌茶屋擁有一支充滿熱情的專業團隊：

👨‍🍳 主廚團隊：擁有日本茶道與和菓子製作證照
🧑‍💼 服務團隊：親切專業，致力於提供最佳服務體驗
🎨 設計團隊：打造溫馨可愛的店內氛圍
📱 行銷團隊：用心經營社群，與顧客互動

我們相信，優秀的團隊才能創造優質的產品與服務。每一位成員都以熱情與專業，為顧客帶來最美好的體驗。`,
    },
  }

  return (
    <div className="h-screen overflow-hidden bg-background grid-bg flex flex-col">
      <nav className="bg-primary wavy-lace shadow-lg flex-shrink-0 animate-slide-down">
        <div className="container mx-auto px-4 md:px-6 py-2 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground animate-pulse" />
              <div className="animate-fade-in">
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
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-300 font-medium tracking-wide hover:scale-110 hover:-translate-y-0.5"
              >
                首頁
              </Link>
              <Link
                href="/menu"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-300 font-medium tracking-wide hover:scale-110 hover:-translate-y-0.5"
              >
                甜品
              </Link>
              <Link
                href="/drinks"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-300 font-medium tracking-wide hover:scale-110 hover:-translate-y-0.5"
              >
                飲品
              </Link>
              <Link
                href="/recipes"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-300 font-medium tracking-wide hover:scale-110 hover:-translate-y-0.5"
              >
                線上點單
              </Link>
              <Link
                href="/about"
                className="hidden md:block text-primary-foreground hover:text-primary-foreground/80 transition-all duration-300 font-medium tracking-wide hover:scale-110 hover:-translate-y-0.5"
              >
                關於我們
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex-1 overflow-y-auto px-6 py-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 animate-fade-in">
            <div className="inline-block cute-card px-8 py-4 mb-3 animate-bounce-in hover:scale-110 transition-all duration-300">
              <Heart className="w-8 h-8 mx-auto text-primary mb-2 animate-pulse" />
              <p className="text-xs tracking-widest text-secondary font-bold mb-1 animate-fade-in">ABOUT US</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-primary animate-bounce-subtle"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                關於我們
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center mb-8 animate-fade-in-delay">
            <div className="cute-border rounded-3xl overflow-hidden transition-all duration-500 animate-slide-left">
              <img
                src="/cute-japanese-tea-house-interior-with-matcha.jpg"
                alt="店主"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative animate-slide-right">
              <div className="cute-card p-6 relative hover:shadow-2xl transition-all duration-300">
                <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-primary animate-pulse"></div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4 animate-fade-in">
                    <Heart className="w-6 h-6 text-primary animate-pulse" />
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "var(--font-pacifico)" }}>
                      店主的話
                    </h3>
                  </div>

                  <p className="text-base text-foreground/90 leading-relaxed animate-fade-in animation-delay-200">
                    💖 歡迎光臨主人！我是萌萌茶屋的店主，很高興能為您服務 ✨
                  </p>

                  <p className="text-sm text-foreground/80 leading-relaxed animate-fade-in animation-delay-400">
                    自2015年創立以來，我們始終堅持使用日本進口的頂級茶葉與新鮮食材。每一杯茶飲、每一份和菓子都是用心手作，讓您品嚐到最道地的日式風味。
                  </p>

                  <p className="text-sm text-foreground/80 leading-relaxed animate-fade-in animation-delay-600">
                    在這裡，我們不只是提供茶飲與甜點，更希望為您帶來日式的溫暖與療癒。就像在日本的喫茶店一樣，讓您在忙碌的生活中找到片刻的寧靜與放鬆
                    💕
                  </p>

                  <p className="text-base text-primary font-bold mt-4 flex items-center gap-2 animate-bounce-subtle">
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                    歡迎來到萌萌茶屋，讓我為您沖泡一杯溫暖的日式好茶！
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div
              onClick={() => setSelectedDetail("story")}
              className="cute-card p-6 text-center cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-fade-in hover:shadow-2xl"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center animate-pulse hover:animate-bounce">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                品牌故事
              </h4>
              <p className="text-xs text-foreground/60">點擊了解更多</p>
            </div>

            <div
              onClick={() => setSelectedDetail("ingredients")}
              className="cute-card p-6 text-center cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-fade-in animation-delay-200 hover:shadow-2xl"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center animate-pulse hover:animate-bounce">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                嚴選食材
              </h4>
              <p className="text-xs text-foreground/60">點擊了解更多</p>
            </div>

            <div
              onClick={() => setSelectedDetail("awards")}
              className="cute-card p-6 text-center cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-fade-in animation-delay-400 hover:shadow-2xl"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center animate-pulse hover:animate-bounce">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                榮譽認證
              </h4>
              <p className="text-xs text-foreground/60">點擊了解更多</p>
            </div>

            <div
              onClick={() => setSelectedDetail("team")}
              className="cute-card p-6 text-center cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-fade-in animation-delay-600 hover:shadow-2xl"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center animate-pulse hover:animate-bounce">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2" style={{ fontFamily: "var(--font-pacifico)" }}>
                我們的團隊
              </h4>
              <p className="text-xs text-foreground/60">點擊了解更多</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="cute-card p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in animation-delay-200 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Clock className="w-6 h-6 text-primary animate-spin-slow" />
                </div>
                <h3
                  className="text-xl font-bold text-primary animate-bounce-subtle"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  營業時間
                </h3>
              </div>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between py-3 border-b-2 border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 px-3 rounded-lg group/item">
                  <span className="font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    週一至週五
                  </span>
                  <span className="font-mono text-base group-hover/item:text-primary transition-colors">
                    10:00 - 21:00
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b-2 border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 px-3 rounded-lg group/item">
                  <span className="font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200"></span>
                    週六至週日
                  </span>
                  <span className="font-mono text-base group-hover/item:text-primary transition-colors">
                    09:00 - 22:00
                  </span>
                </div>
                <div className="flex justify-between py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 px-3 rounded-lg group/item">
                  <span className="font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></span>
                    國定假日
                  </span>
                  <span className="font-mono text-base group-hover/item:text-primary transition-colors">
                    09:00 - 22:00
                  </span>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-lg animate-fade-in">
                  <p className="text-xs text-primary font-bold flex items-center gap-2 animate-bounce-subtle">
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                    每月第一個週一公休
                  </p>
                </div>
              </div>
            </div>

            <div className="cute-card p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in animation-delay-400 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Phone className="w-6 h-6 text-primary animate-bounce-subtle" />
                </div>
                <h3
                  className="text-xl font-bold text-primary animate-bounce-subtle"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  聯絡資訊
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold">電話</p>
                    <p className="text-base font-bold text-foreground/90 font-mono group-hover/item:text-primary transition-colors">
                      02-1234-5678
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary animate-pulse animation-delay-200" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold">電子郵件</p>
                    <p className="text-sm font-medium text-foreground/90 group-hover/item:text-primary transition-colors break-all">
                      contact@moemoe-tea.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold">LINE官方帳號</p>
                    <p className="text-base font-bold text-foreground/90 font-mono group-hover/item:text-primary transition-colors">
                      @moemoe-tea
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cute-card p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in animation-delay-600 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <MapPin className="w-6 h-6 text-primary animate-bounce-subtle" />
                </div>
                <h3
                  className="text-xl font-bold text-primary animate-bounce-subtle"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  店鋪位置
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border-2 border-primary/10 hover:border-primary/30">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-2 font-semibold">地址</p>
                    <p className="text-base font-bold text-foreground/90 leading-relaxed group-hover/item:text-primary transition-colors">
                      台北市大安區忠孝東路四段181巷7弄8號
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl hover:from-primary/15 hover:to-primary/10 transition-all duration-300 border-l-4 border-primary shadow-sm">
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-lg flex-shrink-0">📍</span>
                    <span>位於東區巷弄內，鄰近忠孝敦化捷運站，步行約3分鐘即可抵達</span>
                  </p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                  <p className="text-xs text-foreground/70 text-center font-medium">💡 建議使用Google Maps導航更準確</p>
                </div>
              </div>
            </div>

            <div className="cute-card p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in animation-delay-800 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Train className="w-6 h-6 text-primary animate-bounce-subtle" />
                </div>
                <h3
                  className="text-xl font-bold text-primary animate-bounce-subtle"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  交通方式
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Train className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold flex items-center gap-2">
                      捷運
                      <span className="px-2 py-0.5 bg-primary text-primary-foreground text-[10px] rounded-full font-bold">
                        推薦
                      </span>
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium group-hover/item:text-primary transition-colors">
                      忠孝敦化站5號出口，步行約3分鐘
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Bus className="w-5 h-5 text-primary animate-pulse animation-delay-200" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold">公車</p>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium group-hover/item:text-primary transition-colors">
                      忠孝敦化路口站
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {["232", "233", "235", "240", "266"].map((bus, idx) => (
                        <span
                          key={bus}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {bus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-3 rounded-lg transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="bg-primary/10 p-2 rounded-full group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Car className="w-5 h-5 text-primary animate-pulse animation-delay-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1 font-semibold">停車資訊</p>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium group-hover/item:text-primary transition-colors">
                      敦化國小地下停車場，步行約5分鐘
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">💳 接受悠遊卡、信用卡付款</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 animate-bounce-subtle">
            <Button
              asChild
              className="retro-gradient hover:scale-125 text-primary-foreground transition-all duration-500 px-8 py-4 text-base font-bold tracking-wide rounded-full cute-border shadow-lg hover:shadow-2xl"
            >
              <Link href="/">
                <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
                回到首頁
                <Sparkles className="w-4 h-4 ml-2 animate-spin-slow" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {selectedDetail && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedDetail(null)}
        >
          <div
            className="cute-card max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b-2 border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary animate-pulse" />
                <h3
                  className="text-2xl font-bold text-primary animate-bounce-subtle"
                  style={{ fontFamily: "var(--font-pacifico)" }}
                >
                  {detailsContent[selectedDetail as keyof typeof detailsContent].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDetail(null)}
                className="p-2 hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line text-base">
                {detailsContent[selectedDetail as keyof typeof detailsContent].content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
