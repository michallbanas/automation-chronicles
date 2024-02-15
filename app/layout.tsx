import "./globals.css"
import { Analytics } from "@/components/analytics"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "QA Blog",
  description: "QA Blog description",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 max-w-2xl mx-auto py-10 px-4 ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
          <header className="flex items-center justify-between">
            <ModeToggle />
            <nav data-test="navbar" className="ml-auto text-sm font-medium h-6 flex items-center space-x-6">
              <Link href="/">Domov</Link>
              <Link href="/o-mne">O mne</Link>
            </nav>
          </header>
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
