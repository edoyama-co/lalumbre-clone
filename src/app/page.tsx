export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION (dark bg) ===== */}
      <section className="bg-background text-foreground flex flex-col items-center justify-center py-20 px-6 text-center">
        <img
          src="/images/logo.png"
          alt="La Lumbre Artisan Pizza logo"
          className="w-48 md:w-64 mb-8"
        />
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-accent">
          Brick Oven Pizzeria on Wheels!
        </h1>
        <a
          href="tel:9516912329"
          className="inline-block bg-accent hover:bg-accent-hover text-light-text font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-colors mb-4"
        >
          Tap here to call and book us for your event!
        </a>
        <p className="text-xl md:text-2xl font-sans mt-2">
          <a href="tel:9516912329" className="text-accent hover:underline">
            951-691-2329
          </a>
        </p>
      </section>

      {/* ===== WOW YOUR GUESTS (light bg) ===== */}
      <section className="bg-light-bg text-light-text py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-12 text-accent">
            Wow Your Guests
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                La Lumbre Artisan Pizza is a family-owned brick oven pizzeria on
                wheels, bringing the authentic taste of wood fire pizzas straight
                to your event.
              </p>
              <p>
                Our Pizzaiolo and his sons craft every pizza with passion, using
                only the freshest ingredients and traditional techniques passed
                down through generations.
              </p>
              <p>
                We offer custom menus tailored to your event, ensuring every
                guest leaves impressed and satisfied. From intimate gatherings to
                large celebrations, La Lumbre brings the heat.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/pizza-oven.jpg"
                alt="La Lumbre brick oven pizza being prepared"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO ORDER (dark bg) ===== */}
      <section className="bg-background text-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-12 text-accent">
            How to Order
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/images/charcuterie.png"
                alt="Charcuterie board by La Lumbre"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                We create custom menus for every event. Whether you are craving
                our signature wood fire pizzas or something a little different,
                we have you covered.
              </p>
              <p>
                Beyond pizza, our menu features fried mac-n-cheese, panzarottis,
                pepperoni rolls, fresh salads, charcuterie boards, and specialty
                pizzas that will have your guests coming back for more.
              </p>
              <p>
                Give us a call to discuss your event and we will build the
                perfect menu together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOK YOUR EVENT (light bg) ===== */}
      <section className="bg-light-bg text-light-text py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-accent">
            Book Your Event
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            We also sell individual pizzas at events like schools, fundraisers,
            churches, carnivals, festivals, and recreational parks!
          </p>
          <a
            href="tel:9516912329"
            className="inline-block bg-accent hover:bg-accent-hover text-light-text font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-colors"
          >
            Call Us: 951-691-2329
          </a>
        </div>
      </section>

      {/* ===== SOCIAL (dark bg) ===== */}
      <section className="bg-background text-foreground py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-accent">
            Follow Us
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Don&apos;t forget to follow and like us!
          </p>
          <div className="flex justify-center gap-8 text-lg">
            <span className="text-accent hover:text-accent-hover cursor-pointer transition-colors">
              Facebook
            </span>
            <span className="text-accent hover:text-accent-hover cursor-pointer transition-colors">
              Instagram
            </span>
            <span className="text-accent hover:text-accent-hover cursor-pointer transition-colors">
              TikTok
            </span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (dark) ===== */}
      <footer className="bg-background text-foreground border-t border-accent/20 py-8 px-6 text-center">
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} La Lumbre Artisan Pizza. All rights
          reserved.
        </p>
        <p className="text-sm opacity-50 mt-2">
          <a href="tel:9516912329" className="hover:text-accent transition-colors">
            951-691-2329
          </a>
        </p>
      </footer>
    </div>
  );
}
