import { BtnVariant }  from '@/app/ui/Btn'
import { Hero } from '@/app/ui/Hero'
import { Sections } from '@/app/ui/Sections'
import { InfoContent } from '@/app/ui/InfoContent'
import { Cta } from '@/app/ui/Cta'

export default function Home() {
  const sectionList = [
    {
      bg: "bg-cta-web-design",
      href: "/web-design",
      name: "Web design",
    },
    {
      bg: "bg-cta-app-design",
      href: "/app-design",
      name: "App design",
    },
    {
      bg: "bg-cta-graphic-design",
      href: "/graphic-design",
      name: "Graphic design",
    }
  ]

  const infoContentList = [
    {
      imageSrc: "/illustration-passionate.svg",
      bgGradient: "bg-gradient-to-r from-gradient-info",
      name: "Passionate",
      text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
    },
    {
      
      imageSrc: "/illustration-resourceful.svg",
      bgGradient: "bg-gradient-to-t from-gradient-info",
      name: "Resourceful",
      text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
    },
    {
      
      imageSrc: "/illustration-friendly.svg",
      bgGradient: "bg-gradient-to-b from-gradient-info",
      name: "Friendly",
      text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
    }
  ]

  return (
    <main className="min-h-screen home">
      <Hero 
        title="Award-winning custom designs and digital branding solutions" 
        subtitle="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
        cta={{label: "Learn more", href: "/about-us", variant: BtnVariant.Light}}
        image={{src: "/phone.png", alt:"Phone", width: 280, height: 573}}
      />
      <div className="hidden md:block bg-pattern-leaf absolute h-[594px] w-[1006px] bg-no-repeat left-0 top-[475px] z-0"></div>
      <Sections links={sectionList} />
      <InfoContent contents={infoContentList} gap="gap-y-20 sm:gap-y-8 md:gap-x-[30px]" lastItem={true} />
      <div className="hidden md:block bg-pattern-leaf absolute h-[594px] w-[1006px] bg-no-repeat right-0 top-[1879px] rotate-180 z-0"></div>
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
    </main>
  )
}
