import { BtnVariant }  from '@/app/ui/Btn'
import { Hero } from '@/app/ui/Hero'
import { ProjectList } from '@/app/ui/ProjectList'
import { Sections } from '@/app/ui/Sections'
import { Cta } from '@/app//ui/Cta'

export default function AppDesign() {
  const sectionList = [
    {
      bg: "bg-cta-web-design",
      href: "/web-design",
      name: "Web design",
    },
    {
      bg: "bg-cta-graphic-design",
      href: "/graphic-design",
      name: "Graphic design",
    }
  ]

  const appDesignProjects = [
    {
      preview: './app-design/image-airfilter.jpg',
      name: 'Airfilter',
      description: 'Solving the problem of poor indoor air quality by filtering the air',
    },
    {
      preview: './app-design/image-eyecam.jpg',
      name: 'Eyecam',
      description: 'Product that lets you edit your favorite photos and videos at any time',
    },
    {
      preview: './app-design/image-faceit.jpg',
      name: 'Faceit',
      description: 'Get to meet your favorite internet superstar with the faceit app',
    },
    {
      preview: './app-design/image-todo.jpg',
      name: 'Todo',
      description: 'A todo app that features cloud sync with light and dark mode',
    },
    {
      preview: './app-design/image-loopstudios.jpg',
      name: 'Loopstudios',
      description: 'A VR experience app made for Loopstudios',
      lastItem: true
    }
  ]

  return (
    <main>
      <Hero 
        title="App design" 
        subtitle="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ProjectList projects={appDesignProjects} />
      <Sections links={sectionList} lastItem={true} />
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
    </main>
  )
}
