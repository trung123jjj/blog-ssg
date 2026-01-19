import Image from 'next/image'

export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Hello Next.js</h1>

      <Image
        src="/hero.png"
        alt="Hero"
        width={1200}
        height={800}
        priority
      />
    </main>
  )
}
