import Image from "next/image"

import { FeaturedReadingAlt } from "@/components/blog-list"
import { Body } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <div className="relative bg-muted">
        <div className="container relative z-10 flex flex-col py-8">
          <FeaturedReadingAlt />
        </div>
        <div className="absolute -inset-24 blur-lg">
          <Image
            fill={true}
            className="object-cover"
            alt=""
            src="/ssspot.svg"
          />
        </div>
      </div>
      <div className="relative bg-muted py-8 lg:py-24">
        <div className="mx-auto max-w-5xl px-8">
          <Body />
        </div>
      </div>
      <Footer />
    </>
  )
}
