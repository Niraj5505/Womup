import React from 'react'
import { Container } from '../ui/Container.tsx'
import { BrandLogo } from '../common/BrandLogo.tsx'
import { Shield, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 mt-20 text-slate-600">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <BrandLogo size="md" showTagline />
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed mt-2">
              Transforming everyday shopping into empowering rewards. Designed for modern Indian
              consumers with cashback, community perks, and seamless savings.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-womup-purple mt-1">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>100% Safe & Verified Platform</span>
            </div>
          </div>

          {/* Col 2: Platform Pillars */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Pillars
            </span>
            <span className="text-sm text-slate-600 hover:text-womup-magenta transition-colors cursor-pointer">
              Empowerment
            </span>
            <span className="text-sm text-slate-600 hover:text-womup-magenta transition-colors cursor-pointer">
              Smart Shopping
            </span>
            <span className="text-sm text-slate-600 hover:text-womup-magenta transition-colors cursor-pointer">
              Rewards Revolution
            </span>
          </div>

          {/* Col 3: Visual Identity */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Color Identity
            </span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-womup-purple" title="Deep Purple" />
              <span className="text-xs text-slate-600">Deep Purple</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-womup-magenta" title="Bright Magenta" />
              <span className="text-xs text-slate-600">Bright Magenta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink-500" title="Pink" />
              <span className="text-xs text-slate-600">Warm Pink</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber-500" title="Gold/Yellow" />
              <span className="text-xs text-slate-600">Gold / Yellow</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WOMUP. Empowerment • Shopping • Revolutions.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>for Indian innovators</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
