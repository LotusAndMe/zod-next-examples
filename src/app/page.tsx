import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href='/products'>Products page</Link>
      <Link href='/checkoutform'>Form page</Link>
      <Link href='/cart'>Cart local storage</Link>
    </main>
  )
}
