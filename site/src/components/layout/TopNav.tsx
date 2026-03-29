'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from './NavLinks'

export function TopNav() {
  const pathname = usePathname()

  return (
    <header className="flex lg:hidden items-center border-b border-border bg-background px-4 py-3">
      <span className="font-sans font-semibold text-foreground mr-6">FrameBench</span>
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'px-3 py-1 text-xs uppercase tracking-widest transition-colors',
                    'focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2',
                    isActive
                      ? 'border-b-2 border-accent-cyan text-foreground'
                      : 'border-b-2 border-transparent text-text-muted hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
