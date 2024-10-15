import Benefits from '@/components/Benefits'
import SectionContact from '@/components/ContactPage/Section'
import EmailCapitation from '@/components/EmailCapitation'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import HowWorks from '@/components/HowWorks'
import News from '@/components/News'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HowWorks />
      <News />
      <Benefits />
      <Feedbacks />
      <Partners />
      <SectionContact />
      <EmailCapitation />
    </main>
  )
}
