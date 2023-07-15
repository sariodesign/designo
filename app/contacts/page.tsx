import { InfoContent } from '../ui/InfoContent'
import { BtnVariant } from '../ui/Btn'
import { Footer } from "../ui/Footer"

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
      <InfoContent contents={infoContentList} />
      <Footer cta={false} />
    </main>
  )
}