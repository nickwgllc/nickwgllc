"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Home, Headphones, Mic, BarChart, Settings, PlusCircle, Users, Bookmark } from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-2", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export function AppSidebar() {
  const mainNavItems = [
    {
      title: "Home",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "My Feeds",
      href: "/feeds",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      title: "Listening",
      href: "/listening",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      title: "Saved",
      href: "/saved",
      icon: <Bookmark className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Team",
      href: "/team",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const secondaryNavItems = [
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">IC</span>
          </div>
          <span className="font-bold text-xl">InCrowd.fm</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-4">
        <div className="flex flex-col gap-1">
          <Button className="w-full justify-start gap-2" asChild>
            <Link href="/create">
              <PlusCircle className="h-5 w-5" />
              Create New
            </Link>
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="px-3 text-xs font-medium text-muted-foreground">Main</h3>
              <SidebarNav items={mainNavItems} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="px-3 text-xs font-medium text-muted-foreground">Other</h3>
              <SidebarNav items={secondaryNavItems} />
            </div>
          </div>
        </ScrollArea>
        <div className="mt-auto">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Headphones className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Usage</p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">12h</span> of 40h used
                </div>
              </div>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[30%] bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

