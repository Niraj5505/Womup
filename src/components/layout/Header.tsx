import React from 'react'
import { Sparkles, Coins, ShoppingBag, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { BrandLogo } from '../common/BrandLogo.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Button } from '../ui/Button.tsx'

export interface HeaderProps {
  onOpenRewardsDemo?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenRewardsDemo }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-womup-purple-950 via-womup-purple-800 to-womup-magenta py-1.5 px-4 text-center text-xs text-white font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>
          <strong className="text-amber-300 font-semibold">WOMUP Revolution:</strong>{' '}
          Empowerment • Shopping • Revolutions
        </span>
      </div>

      <Container size="lg">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <BrandLogo size="md" />
            <div className="hidden lg:flex items-center">
              <span className="text-[11px] font-semibold tracking-wide uppercase text-slate-500 pl-3 border-l border-slate-200">
                Empowerment • Shopping • Revolutions
              </span>
            </div>
          </div>

          {/* Right Action & Rewards Preview Pill */}
          <div className="flex items-center gap-3">
            {/* Rewards / Coin Balance Preview (Rewards-platform inspired) */}
            <div
              onClick={onOpenRewardsDemo}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 hover:border-amber-300 cursor-pointer transition-all shadow-2xs group"
              title="Click to view rewards preview"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-white">
                <Coins className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-bold text-slate-900 font-inr">₹2,450</span>
                <span className="text-[11px] font-medium text-amber-800 hidden sm:inline">
                  Rewards
                </span>
              </div>
              <Badge variant="gold" size="sm" className="hidden md:inline-flex">
                VIP
              </Badge>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="sm"
              leftIcon={<ShoppingBag className="w-3.5 h-3.5" />}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={onOpenRewardsDemo}
            >
              Design System
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
