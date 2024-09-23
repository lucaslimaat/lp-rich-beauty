import Benefits from '@/components/Benefits'
import EmailCapitation from '@/components/EmailCapitation'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import HowWorks from '@/components/HowWorks'
import News from '@/components/News'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HowWorks />
      <News />
      <Benefits />
      <Feedbacks />
      <EmailCapitation />
    </main>
  )
}
