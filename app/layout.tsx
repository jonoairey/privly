import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-indigo-600 text-white p-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-2xl font-bold">Privly</div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white p-4">
          <div className="max-w-7xl mx-auto text-center">
            © {new Date().getFullYear()} Privly
          </div>
        </footer>
      </body>
    </html>
  )
}
