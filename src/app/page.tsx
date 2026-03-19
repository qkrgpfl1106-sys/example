import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: 'THE ESSENTIALS',
    description: '삶의 본질에 집중하는 체리쉬모아의 첫 번째 컬렉션.',
    image: '/lookbook-1.png',
    align: 'right',
  },
  {
    id: 2,
    title: 'ATMOSPHERE',
    description: '공간과 어우러지는 부드러운 실루엣과 텍스처.',
    image: '/lookbook-2.png',
    align: 'left',
  },
  {
    id: 3,
    title: 'DETAIL MATTERS',
    description: '작은 차이가 만드는 완벽한 조화.',
    image: '/lookbook-3.png',
    align: 'right',
  },
]

export default function Home() {
  return (
    <div className="w-full bg-background overflow-x-hidden">
      {/* Hero Lookbook Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/lookbook-1.png"
          alt="Hero Collection"
          fill
          priority
          className="object-cover scale-105 hover:scale-100 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs tracking-[0.4em] mb-4 opacity-80 uppercase">2026 Spring Collection</p>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 italic lowercase text-white drop-shadow-[4px_4px_0px_var(--color-kitsch-pink)]">
            it&apos;s important to cherish every little moment.
          </h1>
          <Link 
            href="/lookbook" 
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase"
          >
            VIEW LOOKBOOK
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-white" />
        </div>
      </section>

      {/* Lookbook Grid Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-32 space-y-48">
        {LOOKBOOK_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
              item.align === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="relative w-full md:w-3/5 aspect-[4/5] overflow-hidden group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="text-xs tracking-widest opacity-40">0{item.id} / CONCEPT</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight italic">
                {item.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                {item.description}
              </p>
              <Link 
                href="/product" 
                className="inline-flex items-center gap-2 group text-sm tracking-widest uppercase hover:underline underline-offset-8 transition-all"
              >
                DISCOVER MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Brand Statement */}
      <section className="py-40 bg-secondary/30 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight leading-snug">
            "가장 소중한 순간들을 모아, <br />
            일상에 아름다움을 더합니다."
          </h2>
          <div className="w-12 h-[1px] bg-foreground/20 mx-auto" />
          <p className="text-sm tracking-[0.2em] font-light opacity-60">ABOUT CHERISHMOA</p>
        </div>
      </section>

      {/* Footer minimal info */}
      <footer className="px-6 py-20 border-t border-border/50 text-[10px] tracking-widest font-light opacity-50 flex flex-col md:flex-row items-center justify-between gap-8">
        <p>© 2026 CHERISHMOA ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 uppercase">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Instagram</Link>
        </div>
      </footer>
    </div>
  )
}
