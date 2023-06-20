import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <WelcomeHero />
      <FeatureList />
      <FeaturedReading />
      <Footer />
    </>
  )
}
