import { HeroImage } from '@/app/ui/HeroImage'
import { CardContent } from '../ui/CardContent'
import { InfoContent } from '../ui/InfoContent'
import { BtnVariant } from '../ui/Btn'
import { Cta } from '../ui/Cta'
import { Footer } from '../ui/Footer'

const infoContentList = [
  {
    imageSrc: "/illustration-canada.svg",
    bgGradient: "bg-gradient-to-r from-gradient-info",
    name: "Canada",
    btn: {
      label: "See location",
      href: "/",
      variant: BtnVariant.Primary
    }
  },
  {
    
    imageSrc: "/illustration-australia.svg",
    bgGradient: "bg-gradient-to-t from-gradient-info",
    name: "Australia",
    btn: {
      label: "See location",
      href: "/",
      variant: BtnVariant.Primary
    }
  },
  {
    
    imageSrc: "/illustration-united-kingdom.svg",
    bgGradient: "bg-gradient-to-b from-gradient-info",
    name: "United Kingdom",
    btn: {
      label: "See location",
      href: "/",
      variant: BtnVariant.Primary
    }
  }
]

export default function OurCompany() {
  return (
    <main className="min-h-screen">
      <HeroImage 
        title="About us" 
        subtitle="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        image={{src: "/image-about-hero.jpg", alt:"About us", width: 1920, height: 1080, responsive: {tablet: "/tablet/image-about-hero.jpg", desktop: "/desktop/"}}}
      />
      <CardContent
        title="World-class talent"
        text="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. "
        image={{src:"/image-world-class-talent.jpg", alt:"The world-class talent", width:1920, height:1080 , responsive: {tablet:"", desktop:""}}}
      />
      <InfoContent contents={infoContentList} />
      <CardContent
        title="The real ideal"
        text="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        image={{src:"/image-real-deal.jpg", alt:"The real ideal", width:1920 , height:1080 , responsive: {tablet:"", desktop:""}}}
        lastItem={true}
      />
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
      <Footer cta={true} />
    </main>
  )
}