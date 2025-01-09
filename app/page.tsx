import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SportsOptions from './components/SportsOptions'
import BookingPreview from './components/BookingPreview'
import EventsOffers from './components/EventsOffers'
import GalleryPreview from './components/GalleryPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <SportsOptions />
        <BookingPreview />
        <EventsOffers />
        <GalleryPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

