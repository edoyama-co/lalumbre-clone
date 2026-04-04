export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== SECTION 0: HERO ===== */}
      {/* Full-viewport hero with background image, logo, headline, CTA button, phone number */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-6 py-20 flex flex-col items-center">
          <img
            src="/images/lumbre-logo.png"
            alt="La Lumbre Artisan Pizza logo"
            className="w-56 md:w-72 lg:w-80 mb-10 mx-auto drop-shadow-lg"
          />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-md leading-tight">
            Brick Oven Pizzeria on Wheels!
          </h1>
          <a
            href="tel:9516912329"
            className="inline-block border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white font-semibold text-base md:text-lg px-8 py-3 rounded-md transition-all duration-300 mb-6 tracking-wide"
          >
            Tap here to call and book us for your event!
          </a>
          <p className="text-lg md:text-xl font-sans text-white">
            Our number &ndash;{" "}
            <a
              href="tel:9516912329"
              className="text-white hover:text-accent-blue transition-colors"
            >
              951-691-2329
            </a>
          </p>
        </div>
      </section>

      {/* ===== SECTION 1: WOW YOUR GUESTS + HOW TO ORDER ===== */}
      {/* Dark stone texture background, single-column centered text layout */}
      <section className="relative py-20 px-6">
        {/* Stone texture background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria-setup.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* WOW your guests */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white">
            WOW your guests!
          </h1>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/90 mb-14">
            <p>
              Are you looking to WOW your guests with a unique experience at your
              event? You&apos;ve come to the right place! We are a family-owned
              Pizzeria on wheels, our traveling ovens are specialized and custom
              made to make wood fire pizzas anywhere we can park them.
            </p>
            <p>
              We specialize in making pizza from scratch just like it was done in
              the old country. We bring it all to you &ndash; that&apos;s right,
              we bring the brick ovens to you, where you get to experience and
              see how your pizza is being made in real Italian firewood ovens.
            </p>
            <p>
              Our head Pizzaiolo and sons work with sourcing local ingredients
              from farmers markets where they make custom menu&apos;s for their
              customers special events. &ldquo;Mangia&rdquo;, from our family to
              yours!
            </p>
          </div>

          {/* Pizza oven on wheels image */}
          <div className="flex justify-center mb-20">
            <img
              src="/images/pizza-oven-wheels.jpg"
              alt="La Lumbre mobile brick oven pizza on wheels"
              className="rounded-lg shadow-2xl w-full max-w-2xl object-cover"
            />
          </div>

          {/* Charcuterie image */}
          <div className="flex justify-center mb-14">
            <img
              src="/images/charcuterie-pizza.png"
              alt="Charcuterie and pizza spread by La Lumbre"
              className="rounded-lg shadow-2xl w-full max-w-xl object-cover"
            />
          </div>

          {/* How to Order */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white">
            How to Order
          </h1>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/90">
            <p>
              Just like every event is different and unique, we cater in custom
              menus. We customize your menu to your liking.
            </p>
            <p>
              We don&apos;t just offer pizzas, we also make fried mac-n-cheese
              squares, panzarottis, pepperoni rolls, fruit salads, antipasto
              salads, green salads, dates filled with goat cheese wrapped in
              maple bacon, cheese boards and charcuterie boards the list goes on.
              Oh, and did we forget to mention &ndash; specialty pizzas!!!!
            </p>
            <p>
              Give us a call or fill out the form below and our office will get
              in contact with you for pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: BOOK YOUR EVENT ===== */}
      {/* Dark stone texture background, centered text */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria-setup.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Book your event!
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-6">
            We also sell individual pizzas at events like schools, fundraisers,
            churches, carnivals, festivals, and recreational parks!
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-10">
            Text us at{" "}
            <a
              href="tel:9516912329"
              className="text-accent-blue hover:underline"
            >
              951-691-2329
            </a>{" "}
            and we&apos;ll help you get started!
          </p>

          {/* Contact form placeholder matching Gravity Forms CTA */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
              Book a Call
            </h2>
            <p className="text-white/70 mb-8 text-sm md:text-base">
              Fill out the form and our office will get in contact with you for
              pricing.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <textarea
                placeholder="Tell us about your event"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-accent-blue transition-colors resize-none"
              />
              <button
                type="button"
                className="w-full border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white font-semibold py-3 rounded transition-all duration-300 tracking-wide"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FOLLOW US ===== */}
      {/* Dark background with trees/greenery image */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria-food-3.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-accent-gold italic">
            Don&apos;t forget to follow and like us!
          </h1>

          {/* Social media icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/lalumbreartisanpizza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Follow on Facebook"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/la_lumbre_artisan_pizza_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Follow on Instagram"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.yelp.com/biz/la-lumbre-artisan-pizza-murrieta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#af0606] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Follow on Yelp"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.467 7.467 0 011.91 3.1c.238.682-.24 1.611-.24 1.611zm-3.01 5.836a1.072 1.072 0 01-1.39.79 7.466 7.466 0 01-2.855-2.14s-.462-.688-.128-1.37l2.344-4.654c.513-.87 1.752-.486 1.87.58l.615 5.247a1.07 1.07 0 01-.456 1.547zm-6.86-1.658c.073 1.013-1.067 1.633-1.722.935L5.02 13.96a1.072 1.072 0 01.134-1.606 7.466 7.466 0 013.28-1.488c.714-.13 1.39.48 1.39.48l.466 5.426zm-1.86-8.152c-.344.953-1.617.95-1.923-.004L4.926 3.51a1.072 1.072 0 01.79-1.39 7.466 7.466 0 013.592.082c.688.221.988.95.988.95l-.866 5.468zm2.503-1.47c.7-.72 1.813-.11 1.68.92l-.68 5.233c-.13.98-1.425 1.2-1.954.336L7.3 9.764a1.072 1.072 0 01.206-1.596A7.466 7.466 0 0110.72 6.6s.66-.155 1.213.55z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-background border-t border-white/10 py-6 px-6 text-center">
        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} La Lumbre Artisan Pizza. All rights
          reserved.
        </p>
        <p className="text-sm text-white/30 mt-1">
          <a
            href="tel:9516912329"
            className="hover:text-accent-blue transition-colors"
          >
            951-691-2329
          </a>
        </p>
      </footer>
    </div>
  );
}
