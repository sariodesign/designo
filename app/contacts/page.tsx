import { HeroContact } from '../ui/HeroContact'
import { InfoContent } from '../ui/InfoContent'
import { BtnVariant } from '../ui/Btn'
import { ContactForm } from '../ui/ContactForm'

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

export default function Contacts() {
  return (
    <main className="min-h-screen">
      <HeroContact title="Contact us" subtitle="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line." />
      <InfoContent contents={infoContentList} gap="gap-y-20" />
    </main>
  )
}