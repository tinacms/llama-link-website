import { BlogList, FeaturedReadingAlt } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <div className="bg-muted">
        <div className="container flex flex-col gap-8 py-8">
          <FeaturedReadingAlt asLink={true} />
          <BlogList />
        </div>
      </div>
      <Footer />
    </>
  )
}
