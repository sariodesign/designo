import { BtnVariant }  from '@/app/ui/Btn'
import { Hero } from '@/app/ui/Hero'
import { ProjectList } from '@/app/ui/ProjectList'
import { Sections } from '@/app/ui/Sections'
import { Cta } from '@/app//ui/Cta'

export default function WebDesign() {
  const sectionList = [
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

  const webDesignProjects = [
    {
      preview: './web-design/image-express.jpg',
      name: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
    },
    {
      preview: './web-design/image-transfer.jpg',
      name: 'Transfer',
      description: 'Site for low-cost money transfers and sending money within seconds',
    },
    {
      preview: './web-design/image-photon.jpg',
      name: 'Photon',
      description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
    },
    {
      preview: './web-design/image-builder.jpg',
      name: 'Builder',
      description: 'Connects users with local contractors based on their location',
    },
    {
      preview: './web-design/image-blogr.jpg',
      name: 'Blogr',
      description: 'Blogr is a platform for creating an online blog or publication',
    },
    {
      preview: './web-design/image-camp.jpg',
      name: 'Camp',
      description: 'Get expert training in coding, data, design, and digital marketing',
      lastItem: true
    }
  ]

  return (
    <main>
      <Hero 
        title="Web design" 
        subtitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <div className="hidden md:block bg-pattern-leaf absolute h-[594px] w-[1006px] bg-no-repeat left-0 top-[281px] z-0"></div>
      <ProjectList projects={webDesignProjects} />
      <Sections links={sectionList} lastItem={true} />
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
    </main>
  )
}