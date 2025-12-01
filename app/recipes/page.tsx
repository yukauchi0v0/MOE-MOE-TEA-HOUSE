"use client"

import type React from "react"

import Link from "next/link"
import { Heart, Sparkles, Trash2, ShoppingCart, Plus, X, Minus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const foodItems = [
  {
    id: 1,
    name: "草莓大福",
    image: "/ichigo-daifuku-strawberry-mochi-japanese-sweet.jpg",
    category: "和菓子",
    price: 45,
  },
  { id: 2, name: "抹茶蛋糕", image: "/matcha-green-tea-roll-cake-japanese.jpg", category: "和菓子", price: 85 },
  { id: 3, name: "銅鑼燒", image: "/dorayaki-japanese-red-bean-pancake.jpg", category: "和菓子", price: 55 },
  { id: 4, name: "櫻花麻糬", image: "/sakura-mochi-pink-cherry-blossom-japanese.jpg", category: "和菓子", price: 50 },
  { id: 5, name: "抹茶提拉米蘇", image: "/matcha-tiramisu-dessert.jpg", category: "和菓子", price: 95 },
  { id: 6, name: "水果大福", image: "/mango-mille-crepe-cake.jpg", category: "和菓子", price: 65 },
  { id: 7, name: "焦糖布丁", image: "/caramel-pudding-dessert.jpg", category: "和菓子", price: 60 },
  { id: 8, name: "蜂蜜吐司", image: "/honey-toast-with-ice-cream.jpg", category: "和菓子", price: 120 },
  { id: 9, name: "草莓鬆餅", image: "/strawberry-waffle-with-whipped-cream.jpg", category: "和菓子", price: 110 },
  { id: 10, name: "紐約起司蛋糕", image: "/new-york-cheesecake-slice.png", category: "和菓子", price: 90 },
  { id: 11, name: "巧克力布朗尼", image: "/chocolate-brownie-ice-cream.png", category: "和菓子", price: 85 },
  { id: 12, name: "繽紛水果聖代", image: "/colorful-fruit-parfait.png", category: "和菓子", price: 100 },

  // 茶飲
  { id: 13, name: "抹茶拿鐵", image: "/matcha-latte-in-cute-japanese-cup.jpg", category: "茶飲", price: 75 },
  { id: 14, name: "櫻花奶茶", image: "/sakura-cherry-blossom-milk-tea-pink.jpg", category: "茶飲", price: 70 },
  { id: 15, name: "焙茶歐蕾", image: "/hojicha-roasted-green-tea-latte.jpg", category: "茶飲", price: 65 },
  { id: 16, name: "柚子蜂蜜茶", image: "/yuzu-citrus-honey-tea-japanese.jpg", category: "茶飲", price: 80 },
  { id: 17, name: "珍珠奶茶", image: "/bubble-milk-tea-with-tapioca-pearls.jpg", category: "茶飲", price: 70 },
  { id: 18, name: "芒果冰沙", image: "/mango-smoothie-with-ice.jpg", category: "茶飲", price: 85 },
  { id: 19, name: "檸檬綠茶", image: "/lime-green-tea-refreshing-drink.jpg", category: "茶飲", price: 60 },
  { id: 20, name: "草莓優格", image: "/strawberry-yogurt-drink.jpg", category: "茶飲", price: 75 },
  { id: 21, name: "焦糖奶霜紅茶", image: "/caramel-milk-foam-black-tea.jpg", category: "茶飲", price: 80 },
  { id: 22, name: "百香果綠茶", image: "/passion-fruit-green-tea.jpg", category: "茶飲", price: 70 },
  { id: 23, name: "白桃烏龍茶", image: "/white-peach-oolong-tea-japanese.jpg", category: "茶飲", price: 75 },
  { id: 24, name: "黑糖珍珠鮮奶", image: "/brown-sugar-boba-milk-tea-japanese-style.jpg", category: "茶飲", price: 85 },
]

interface PlateItem {
  id: number
  foodId: number
  name: string
  image: string
  x: number
  y: number
}

export default function RecipesPage() {
  const [plateItems, setPlateItems] = useState<PlateItem[]>([])
  const [nextId, setNextId] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("全部")
  const [draggingId, setDraggingId] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [showCart, setShowCart] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [foodPage, setFoodPage] = useState(0)
  const plateRef = useRef<HTMLDivElement>(null)

  const addToPlate = (food: (typeof foodItems)[0]) => {
    const randomX = Math.random() * 60 - 30 // -30% to 30%
    const randomY = Math.random() * 60 - 30
    const newItem: PlateItem = {
      id: nextId,
      foodId: food.id,
      name: food.name,
      image: food.image,
      x: randomX,
      y: randomY,
    }
    setPlateItems([...plateItems, newItem])
    setNextId(nextId + 1)
  }

  const removeFromPlate = (id: number) => {
    setPlateItems(plateItems.filter((item) => item.id !== id))
  }

  const clearPlate = () => {
    setPlateItems([])
  }

  const handleMouseDown = (e: React.MouseEvent, item: PlateItem) => {
    e.preventDefault()
    if (!plateRef.current) return

    const plateRect = plateRef.current.getBoundingClientRect()
    const plateRadius = plateRect.width / 2

    // Calculate current position in pixels
    const currentX = plateRadius + (item.x / 100) * plateRadius
    const currentY = plateRadius + (item.y / 100) * plateRadius

    // Calculate offset from mouse to item center
    const offsetX = e.clientX - (plateRect.left + currentX)
    const offsetY = e.clientY - (plateRect.top + currentY)

    setDraggingId(item.id)
    setDragOffset({ x: offsetX, y: offsetY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === null || !plateRef.current) return

    const plateRect = plateRef.current.getBoundingClientRect()
    const plateRadius = plateRect.width / 2

    // Calculate new position relative to plate center
    const mouseX = e.clientX - plateRect.left - dragOffset.x
    const mouseY = e.clientY - plateRect.top - dragOffset.y

    // Convert to percentage offset from center
    const percentX = ((mouseX - plateRadius) / plateRadius) * 100
    const percentY = ((mouseY - plateRadius) / plateRadius) * 100

    // Limit to plate boundaries (keep within ~80% of radius)
    const maxPercent = 60
    const clampedX = Math.max(-maxPercent, Math.min(maxPercent, percentX))
    const clampedY = Math.max(-maxPercent, Math.min(maxPercent, percentY))

    setPlateItems((items) =>
      items.map((item) => (item.id === draggingId ? { ...item, x: clampedX, y: clampedY } : item)),
    )
  }

  const handleMouseUp = () => {
    setDraggingId(null)
  }

  const filteredFoods =
    selectedCategory === "全部" ? foodItems : foodItems.filter((food) => food.category === selectedCategory)

  const itemsPerPage = 6 // 每頁顯示6個食物（2行 x 3列）
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage)
  const currentPageFoods = filteredFoods.slice(foodPage * itemsPerPage, (foodPage + 1) * itemsPerPage)

  const nextPage = () => {
    if (foodPage < totalPages - 1) {
      setFoodPage(foodPage + 1)
    }
  }

  const prevPage = () => {
    if (foodPage > 0) {
      setFoodPage(foodPage - 1)
    }
  }

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setFoodPage(0)
  }

  const cartSummary = plateItems.reduce(
    (acc, item) => {
      const existingItem = acc.find((i) => i.foodId === item.foodId)
      const foodData = foodItems.find((f) => f.id === item.foodId)
      if (existingItem) {
        existingItem.count++
      } else {
        acc.push({
          foodId: item.foodId,
          name: item.name,
          image: item.image,
          count: 1,
          price: foodData?.price || 0,
        })
      }
      return acc
    },
    [] as Array<{ foodId: number; name: string; image: string; count: number; price: number }>,
  )

  const totalPrice = cartSummary.reduce((sum, item) => sum + item.price * item.count, 0)

  const addItemToCart = (foodId: number) => {
    const food = foodItems.find((f) => f.id === foodId)
    if (food) {
      addToPlate(food)
    }
  }

  const removeItemFromCart = (foodId: number) => {
    const itemToRemove = plateItems.find((item) => item.foodId === foodId)
    if (itemToRemove) {
      removeFromPlate(itemToRemove.id)
    }
  }

  const deleteAllItemsOfType = (foodId: number) => {
    setPlateItems(plateItems.filter((item) => item.foodId !== foodId))
  }

  const submitOrder = () => {
    setShowCart(false)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      clearPlate()
    }, 2000)
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

      <section className="flex-1 overflow-y-auto px-3 md:px-4 py-3 md:py-4 bg-background grid-bg">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-3 md:mb-4 animate-fade-in">
            <div className="inline-block bg-accent/20 border-2 md:border-4 border-accent rounded-3xl px-4 md:px-8 py-2 md:py-3 mb-2 animate-bounce-in">
              <div className="flex items-center justify-center gap-1 md:gap-2 mb-1">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent animate-spin-slow" />
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent animate-spin-slow animation-delay-200" />
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent animate-spin-slow animation-delay-400" />
              </div>
              <h2
                className="text-lg md:text-2xl lg:text-3xl font-bold text-primary"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                客製化你的和風時光
              </h2>
              <p className="text-[8px] md:text-[10px] tracking-widest text-secondary font-bold mt-1">
                CUSTOMIZE YOUR JAPANESE TIME
              </p>
            </div>
            <p className="text-xs md:text-sm text-foreground/80">點擊食物加入盤子，拖曳移動位置！✨</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
            <div className="w-full lg:w-[450px] flex-shrink-0 animate-fade-in">
              <div className="bg-card rounded-2xl border-2 md:border-4 border-primary p-3 md:p-4 shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
                <div
                  ref={plateRef}
                  className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] bg-background rounded-full border-4 md:border-8 border-secondary shadow-2xl flex items-center justify-center cursor-default"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <div className="absolute inset-4 md:inset-6 rounded-full border-2 md:border-4 border-secondary/30"></div>

                  {plateItems.length === 0 ? (
                    <div className="text-center text-muted-foreground pointer-events-none">
                      <Sparkles className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 opacity-50" />
                      <p className="text-sm md:text-base">盤子是空的</p>
                      <p className="text-xs">從下方選擇食物吧！</p>
                    </div>
                  ) : (
                    plateItems.map((item) => (
                      <div
                        key={item.id}
                        className={`absolute group ${draggingId === item.id ? "cursor-grabbing z-50" : "cursor-grab"}`}
                        style={{
                          left: `calc(50% + ${item.x}%)`,
                          top: `calc(50% + ${item.y}%)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onMouseDown={(e) => handleMouseDown(e, item)}
                      >
                        <div
                          className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 md:border-3 border-white shadow-lg transition-transform ${
                            draggingId === item.id ? "scale-110" : "group-hover:scale-105"
                          }`}
                        >
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <button
                          className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFromPlate(item.id)
                          }}
                        >
                          <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <p className="mt-2 md:mt-3 text-sm md:text-base font-medium text-foreground">
                  盤子上有 <span className="text-primary font-bold text-lg md:text-xl">{plateItems.length}</span> 個食物
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-2 md:space-y-3 animate-fade-in-delay">
              <div className="bg-card rounded-2xl border-2 md:border-4 border-primary p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 text-center border-b-2 border-primary pb-2">
                  選擇食物
                </h3>

                <div className="flex gap-2 mb-2 md:mb-3">
                  {["全部", "和菓子", "茶飲"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  {foodPage > 0 && (
                    <button
                      onClick={prevPage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:scale-110 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  )}

                  <div className="grid grid-cols-3 gap-1.5 md:gap-2" style={{ minHeight: "140px" }}>
                    {currentPageFoods.map((food) => (
                      <button
                        key={food.id}
                        onClick={() => addToPlate(food)}
                        className="bg-background rounded-xl border-2 border-secondary p-1.5 md:p-2 hover:border-accent hover:shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div className="relative w-full h-12 md:h-16 mb-1 rounded-lg overflow-hidden">
                          <Image src={food.image || "/placeholder.svg"} alt={food.name} fill className="object-cover" />
                        </div>
                        <p className="text-[9px] md:text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">
                          {food.name}
                        </p>
                        <div className="flex items-center justify-center gap-0.5 mt-0.5 text-[9px] md:text-[10px] text-muted-foreground">
                          <Plus className="w-2 h-2 md:w-2.5 md:h-2.5" />
                          <span>加入</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {foodPage < totalPages - 1 && (
                    <button
                      onClick={nextPage}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:scale-110 transition-all"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  )}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center gap-1.5 mt-3">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setFoodPage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === foodPage ? "bg-primary w-4" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t-2 border-primary/20">
                  <Button
                    onClick={() => setShowCart(true)}
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    查看
                  </Button>
                  <Button
                    onClick={clearPlate}
                    disabled={plateItems.length === 0}
                    className="w-full bg-secondary hover:bg-secondary/80 hover:scale-105 text-foreground py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4" />
                    清空
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCart && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-card rounded-3xl border-4 border-primary p-4 md:p-6 shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                購物車明細
              </h3>
              <button
                onClick={() => setShowCart(false)}
                className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="space-y-3">
              {cartSummary.map((item) => (
                <div
                  key={item.foodId}
                  className="flex items-center gap-3 bg-background rounded-xl p-3 border-2 border-secondary"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground">NT$ {item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => removeItemFromCart(item.foodId)}
                        className="w-6 h-6 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3 text-foreground" />
                      </button>
                      <span className="font-semibold text-foreground min-w-[2rem] text-center">{item.count}</span>
                      <button
                        onClick={() => addItemToCart(item.foodId)}
                        className="w-6 h-6 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3 text-primary-foreground" />
                      </button>
                      <button
                        onClick={() => deleteAllItemsOfType(item.foodId)}
                        className="ml-auto w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                        title="刪除全部"
                      >
                        <Trash2 className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-primary text-lg">NT$ {item.price * item.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t-2 border-primary space-y-2">
              <div className="flex justify-between items-center text-base">
                <span className="text-muted-foreground">總數量</span>
                <span className="font-semibold text-foreground">{plateItems.length} 個</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-foreground">總金額</span>
                <span className="text-primary">NT$ {totalPrice}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button
                onClick={() => setShowCart(false)}
                className="w-full bg-secondary hover:bg-secondary/80 text-foreground py-3 rounded-xl"
              >
                繼續選購
              </Button>
              <Button
                onClick={submitOrder}
                disabled={plateItems.length === 0}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl disabled:opacity-50"
              >
                送出訂單
              </Button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card rounded-3xl border-4 border-green-500 p-8 shadow-2xl text-center animate-bounce-in">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">下單成功!</h3>
            <p className="text-sm text-muted-foreground">感謝您的訂購，我們會盡快為您準備</p>
            <div className="flex items-center justify-center gap-1 mt-4">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <Sparkles className="w-4 h-4 text-accent animate-pulse delay-75" />
              <Sparkles className="w-4 h-4 text-accent animate-pulse delay-150" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
