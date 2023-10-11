import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href='/products'>Products page with api</Link>
      <Link href='/checkoutform'>Form example with api</Link>
      <Link href='/cart'>Cart local storage example</Link>
      <Link href='/producturl?id=1&color=green'>Url search params example</Link>
      <Link href='/productserver?id=1&color=green'>SSR product page example</Link>
      <Link href='/prisma'>IN DEV (for prisma exist package zod-prisma-types -convert prisma types to zod)</Link>
    </main>
  )
}
