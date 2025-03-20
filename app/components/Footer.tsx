import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hobby Lobby</h3>
            <p>Where sports enthusiasts come to play, learn, and grow.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#sports">Sports</Link></li>
              <li><Link href="#booking">Booking</Link></li>
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Turf the Hobby Lobby, Chulna Rd, adjacent to Balaji Darshan Society, Chulna Village, Vasai West, Maharashtra 401202</p>
            <p>Phone:9284017480</p>
            <p>Email: turfhobbylobby@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Hobby Lobby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

