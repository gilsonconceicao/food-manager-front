export const metadata = {
  title: 'Bolos da cris',
  description: 'Página inicial da aplicação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
