import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/post-card'

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

    return (
        <main className="container mx-auto p-12">
            <h1 className="text-4xl font-bold mb-12">Post index</h1>

            {/* LIST DỌC – MỖI POST 1 HÀNG */}
            <ul className="flex flex-col gap-16">
                {posts.map((post) => (
                    <li key={post._id}>
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>

            <hr className="my-12" />
            <Link href="/">&larr; Return home</Link>
        </main>
    )
}
