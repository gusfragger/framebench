'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from './NavLinks'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex w-60 flex-col flex-shrink-0 border-r border-border bg-background">
      <div className="flex flex-col flex-1 px-0 py-6">
        {/* Brand header */}
        <div className="px-4 pb-4 border-b border-border">
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest leading-relaxed">
            FRAME_DATA /<br />
            V1.0.4-ALPHA
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Main navigation" className="flex-1 pt-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center px-4 py-2 text-xs uppercase tracking-widest transition-colors',
                      'focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2',
                      isActive
                        ? 'border-l-2 border-accent-cyan text-foreground'
                        : 'border-l-2 border-transparent text-text-muted hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 pt-4 border-t border-border">
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
            SYSTEM STATUS{' '}
            <span className="text-accent-green">●</span>
          </p>
        </div>
      </div>
    </aside>
  )
}
