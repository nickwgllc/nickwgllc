import type React from "react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">IC</span>
            </div>
            <span className="font-bold text-xl">InCrowd.fm</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">{children}</main>
      <footer className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} InCrowd.fm. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

