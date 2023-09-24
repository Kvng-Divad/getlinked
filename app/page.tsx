
import Attributes from './components/attributes/Attributes'
import Faq from './components/faqs/Faq'
import Footer from './components/footer/Footer'
import HeroSection from './components/heroSection/HeroSection'
import Intro from './components/introSection/Intro'
import Partners from './components/partners/Partners'
import Policy from './components/policy/Policy'
import Prizes from './components/prizes/Prizes'
import Rules from './components/rulesSection/Rules'
import Timeline from './components/timeline/Timeline'

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <div className='p-4'>
        <Intro/>
        <Rules/>
        <Attributes/>
        <Faq/>
        <Timeline/>
        <Prizes/>
        <Partners/>
        <Policy/>
      </div>
      <Footer/>
    </main>
  )
}
