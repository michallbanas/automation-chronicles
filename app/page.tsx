import { allPosts } from "@/.contentlayer/generated"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Home() {
  return (
    <section id="articles" className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2 className="mb-[0.5em]">{post.title}</h2>
          </Link>
          <div data-test="articleBadges" className="flex flex-row gap-2">
            {post.badges && post.badges.split(",").map((badge) => <Badge key={badge}>{badge.trim()}</Badge>)}
          </div>
          {post.description && <p className="mt-[1.0em]">{post.description}</p>}
        </article>
      ))}
    </section>
  )
}
