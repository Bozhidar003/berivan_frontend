"use client"

import { useState } from "react"
import { Search, User, ShoppingBag, ChevronDown, Menu, X, ChevronRight } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    name: "Бижута",
    submenu: [
      {
        category: "Колиета",
        items: ["Златни колиета", "Сребърни колиета", "Диамантени колиета", "Тенис колиета"],
      },
      {
        category: "Пръстени",
        items: ["Брачни пръстени", "Сватбени пръстени", "Модни пръстени", "Накитни пръстени"],
      },
      {
        category: "Гривни",
        items: ["Пръстени", "Колиета", "Гравирани колиета", "Колиета с перли"],
      },
      {
        category: "Обеци",
        items: ["Перлени Обеци", "Обеци с диаманти", "Златни Обеци", "Висящи обеци"],
      },
    ],
  },
  { name: "Колекции", submenu: [] },
  { name: "Ново", submenu: [] },
  { name: "За нас", submenu: [] },
  { name: "Контакти", submenu: [] },
]

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null)

  return (
    <header className="w-full">
      {/* Logo Section */}
      <div className="flex justify-center py-6 md:py-8 border-b border-gray-200 bg-white">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wider text-[#1A1A1A]">LUXE</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-[#1A1A1A] sticky top-0 z-50 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Menu Items */}
            <div className="flex items-center gap-10">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="text-white text-sm tracking-wide hover:text-[#D4AF37] transition-luxury flex items-center gap-1">
                    {item.name}
                    {item.submenu.length > 0 && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Mega Menu */}
                  {activeMenu === item.name && item.submenu.length > 0 && (
                    <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl z-50 min-w-[800px] p-8 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-5 gap-8">
                        {item.submenu.map((category) => (
                          <div key={category.category}>
                            <h3 className="font-serif text-lg text-[#1A1A1A] mb-4 pb-2 border-b border-[#D4AF37]">
                              {category.category}
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((subItem) => (
                                <li key={subItem}>
                                  <Link
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-[#D4AF37] transition-luxury block"
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <User className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-[#1A1A1A] sticky top-0 z-50 lg:hidden">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-luxury"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <User className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#D4AF37] transition-luxury">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-2">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-200">
                  {item.submenu.length > 0 ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileActiveMenu(mobileActiveMenu === item.name ? null : item.name)
                        }
                        className="w-full flex items-center justify-between py-4 text-[#1A1A1A] hover:text-[#D4AF37] transition-luxury"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            mobileActiveMenu === item.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      {mobileActiveMenu === item.name && (
                        <div className="pb-4 pl-4 space-y-4">
                          {item.submenu.map((category) => (
                            <div key={category.category}>
                              <h4 className="font-serif text-sm text-[#D4AF37] mb-2">
                                {category.category}
                              </h4>
                              <ul className="space-y-2">
                                {category.items.map((subItem) => (
                                  <li key={subItem}>
                                    <Link
                                      href="#"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-sm text-gray-600 hover:text-[#D4AF37] transition-luxury block"
                                    >
                                      {subItem}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-[#1A1A1A] hover:text-[#D4AF37] transition-luxury font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
