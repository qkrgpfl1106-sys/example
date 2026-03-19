'use client'

import Link from 'next/link'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-transparent hover:border-border transition-all duration-300">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left font-light tracking-tighter text-2xl mb-8">
                cherishmoa
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 text-lg font-light">
              <Link href="/lookbook" onClick={closeMenu} className="hover:line-through">LOOKBOOK</Link>
              <Link href="/shop" onClick={closeMenu} className="hover:line-through">SHOP</Link>
              <Link href="/concept" onClick={closeMenu} className="hover:line-through">CONCEPT</Link>
              <Link href="/about" onClick={closeMenu} className="hover:line-through">ABOUT</Link>
            </nav>
          </SheetContent>
        </Sheet>
        
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-light">
          <Link href="/lookbook" className="hover:opacity-50 transition-opacity uppercase">Lookbook</Link>
          <Link href="/shop" className="hover:opacity-50 transition-opacity uppercase">Shop</Link>
        </nav>
      </div>

      <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-xl font-light tracking-[0.3em] uppercase">
        cherishmoa
      </Link>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Search className="w-4 h-4" />
        </Button>
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="hover:bg-transparent relative">
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </header>
  )
}
