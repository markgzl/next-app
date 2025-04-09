import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Modern Financial Platform",
  description: "Streamline your business payments, expenses, and financial operations with our all-in-one platform.",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}