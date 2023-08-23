import { BtnVariant }  from '@/app/ui/Btn'
import { Hero } from '@/app/ui/Hero'
import { ProjectList } from '@/app/ui/ProjectList'
import { Sections } from '@/app/ui/Sections'
import { Cta } from '@/app//ui/Cta'

export default function GraphicDesign() {
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
    }
  ]

  const graphicDesignProjects = [
    {
      preview: './graphic-design/image-change.jpg',
      name: 'Tim Brown',
      description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
    },
    {
      preview: './graphic-design/image-boxed-water.jpg',
      name: 'Boxed water',
      description: 'A simple packaging concept made for Boxed Water',
    },
    {
      preview: './graphic-design/image-science.jpg',
      name: 'Science!',
      description: 'A poster made in collaboration with the Federal Art Project',
      lastItem: true
    }
  ]

  return (
    <main>
      <Hero 
        title="Graphic Design" 
        subtitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="hidden md:block bg-pattern-leaf absolute h-[594px] w-[1006px] bg-no-repeat left-0 top-[281px] z-0"></div>
      <ProjectList projects={graphicDesignProjects} />
      <Sections links={sectionList} lastItem={true} />
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
    </main>
  )
}