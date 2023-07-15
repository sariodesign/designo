import { Location } from "../ui/LocationBlock"
import { BtnVariant } from '../ui/Btn'
import { Cta } from '../ui/Cta'
import { Footer } from "../ui/Footer"

export default function Locations() {

  const locations = [
    {
        mapImage: {
          src: '/image-map-canada.png',
          alt: '',
          width: 375 ,
          height: 320
        },
        place: 'canada',
        info: [
          {
            heading: 'Designo Central Office',
            text: ['3886 Wellington Street','Toronto, Ontario M9C 3J5']
          },
          {
            heading: 'Contact',
            text: ['P : +1 253-863-8967','M : contact@designo.co']
          }
        ]
    },
    {
      mapImage: {
        src: '/image-map-australia.png',
        alt: '',
        width: 375 ,
        height: 320
      },
      place: 'australia',
      info: [
        {
          heading: 'Designo AU Office',
          text: ['19 Balonne Street','New South Wales 2443']
        },
        {
          heading: 'Contact',
          text: ['P : (02) 6720 9092','M : contact@designo.au']
        }
      ]
    },
    {
      mapImage: {
        src: '/image-map-united-kingdom.png',
        alt: '',
        width: 375 ,
        height: 320
      },
      place: 'united kingdom',
      info: [
        {
          heading: 'Designo UK Office',
          text: ['13  Colorado Way','Rhyd-y-fro SA8 9GA']
        },
        {
          heading: 'Contact',
          text: ['P : 078 3115 1400','M : contact@designo.uk']
        }
      ],
      lastItem: true
    }
  ]

  return (
    <main className="min-h-screen">
      {locations.map((item, index) => <Location key={index} {...item} />)}
      <Cta title="Let’s talk about your project" subtitle="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." ctaBtn={{label:"get in touch", href:"/contacts", variant:BtnVariant.Light}} />
      <Footer cta={true} />
    </main>
  )
}