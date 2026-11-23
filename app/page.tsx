import Image from "next/image"
import avatar from "@/public/avatar.png"
export default function Home(){
  return(
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-6 dark:bg-zinc-950">
      <article className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
        <Image
        src={avatar}
        alt="Portrait of Bello Olamilekan"
        width={96}
        height={96}
        placeholder="blur"
        className="mb-4 h-24 w-24 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Bello Olamilekan
        </h1>
        <p className="mt-1 text-sm font-medium text-emerald-600">
          Full-Stack Engineer
        </p>
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          I build fast, reliable web products with Next.js, Go and PostgreSQL.
        </p>
      </article>
    </main>
  )
}