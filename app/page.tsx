'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Leaf, TrendingUp, Users, MessageSquare, BarChart3, Share2, Smartphone } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      console.log('[v0] Form submitted with email:', email)
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const features = [
    {
      icon: TrendingUp,
      title: 'Crop Recommendations',
      description: 'Based on location and season',
    },
    {
      icon: Leaf,
      title: 'Farming Best Practices',
      description: 'Practical guidance you can use today',
    },
    {
      icon: BarChart3,
      title: 'Market Visibility',
      description: 'Nearby market demand and price updates',
    },
    {
      icon: Users,
      title: 'Direct Sales',
      description: 'Buy and sell agricultural produce directly',
    },
    {
      icon: MessageSquare,
      title: 'AI Farming Assistant',
      description: 'Chat-based answers to farming questions',
    },
    {
      icon: Share2,
      title: 'Farmer Knowledge',
      description: 'Articles and insights from the community',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Flink</span>
          </div>
          <p className="text-sm text-muted-foreground hidden sm:block">Built for farmers. Powered by technology.</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            <span className="text-balance">Smarter Farming Starts with Better Information</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
            Flink helps smallholder farmers decide what to plant, when to plant, and where to sell — using practical insights and market access.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button
              type="submit"
              className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap"
              disabled={submitted}
            >
              {submitted ? '✓ Joined!' : 'Join the Waiting List'}
            </Button>
          </form>
          
          {submitted && (
            <p className="text-sm text-accent mt-4 animate-pulse">Thank you! Check your email soon.</p>
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">The Challenge Farmers Face</h2>
          <div className="grid gap-4 sm:gap-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many smallholder farmers rely on guesswork when making critical decisions. Without reliable information, they struggle with low yields, significant post-harvest losses, and unfair market prices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Better information can change everything — helping farmers grow more, waste less, and earn more.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">How Flink Helps</h2>
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Flink is a lightweight, mobile-first platform designed for low-connectivity environments. It brings practical farming information right to your phone, without requiring high internet speeds or expensive devices.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Actionable Insights</h3>
                  <p className="text-muted-foreground">Get crop recommendations, farming tips, and market updates tailored to your location and season.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Direct Market Access</h3>
                  <p className="text-muted-foreground">Connect with buyers and other farmers. Sell your produce at fair prices without middlemen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Works Everywhere</h3>
                  <p className="text-muted-foreground">Designed for low internet speeds and affordable phones. Flink is built for African farmers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Why This Matters</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">More Productivity</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When farmers have the right information, they make better decisions. Better decisions lead to bigger harvests.
              </p>
            </div>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Less Waste</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Practical farming guidance and proper storage tips reduce post-harvest losses. What you grow, you keep.
              </p>
            </div>
            <div className="bg-gradient-to-r from-secondary/20 to-primary/10 border border-secondary/30 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Better Income</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See market prices before you harvest. Sell directly to buyers. Skip the middleman. Keep more of what you earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Farm Smarter?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Join the waiting list to be among the first to access Flink. Early access means early growth for your farm.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base bg-primary-foreground text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold whitespace-nowrap"
              disabled={submitted}
            >
              {submitted ? '✓ Joined!' : 'Get Early Access'}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-card border-t border-border text-center text-muted-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="text-base sm:text-lg font-medium">Flink — Built for farmers. Powered by technology.</p>
          <p className="text-sm mt-2">Empowering smallholder farmers across Africa with information and market access.</p>
        </div>
      </footer>
    </main>
  )
}
