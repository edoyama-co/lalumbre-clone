export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== SECTION 0: HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        {/* Background: pizzeria_75.jpg with blue gradient overlay from original Divi CSS */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/pizzeria_75.jpg'), linear-gradient(330deg, #2ea3f2 0%, #2e6df4 100%)",
          }}
        />
        {/* Very subtle darkening just for text readability */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Content */}
        <div className="relative z-10 px-6 py-20 flex flex-col items-center w-full">
          {/* Logo: original is 58% width on desktop */}
          <img
            src="/images/lumbre-logo.png"
            alt="La Lumbre Artisan Pizza logo"
            className="w-[70%] md:w-[58%] max-w-[580px] mb-10 mx-auto drop-shadow-lg"
          />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-md leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" }}
          >
            Brick Oven Pizzeria on Wheels!
          </h1>
          <a
            href="tel:9516912329"
            className="inline-block border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white font-semibold text-base md:text-lg px-8 py-3 rounded-md transition-all duration-300 mb-6 tracking-wide"
            style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: "20px", fontWeight: 500 }}
          >
            Tap here to call and book us for your event!
          </a>
          <p
            className="text-lg md:text-xl text-white"
            style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", paddingTop: "2px" }}
          >
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

      {/* ===== SECTION 1: WOW YOUR GUESTS ===== */}
      {/* Original: pizzeria_31.jpg stone texture, clearly visible */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria_31.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* WOW heading - full width */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-white"
            style={{ fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" }}
          >
            WOW your guests!
          </h1>

          {/* Row 1: Text LEFT | Pizza oven image RIGHT */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:w-1/2 space-y-6 text-white/90"
              style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: "20px", lineHeight: "1.8em" }}
            >
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
            <div className="md:w-1/2 flex justify-center items-start">
              <img
                src="/images/pizza-oven-on-wheels.jpg"
                alt="La Lumbre mobile brick oven pizza on wheels"
                className="rounded-lg shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>

          {/* Row 2: Charcuterie images LEFT | How to Order text RIGHT */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 flex flex-col items-start gap-6">
              <img
                src="/images/charcuterie-and-pizza-1.png"
                alt="Charcuterie and pizza spread"
                className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white"
                style={{ fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" }}
              >
                How to Order
              </h1>
              <div className="space-y-6 text-white/90"
                style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: "20px", lineHeight: "1.8em" }}
              >
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
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: BOOK YOUR EVENT ===== */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria_31.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" }}
          >
            Book your event!
          </h1>
          <p className="text-white/90 mb-4"
            style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: "20px", lineHeight: "1.8em" }}
          >
            We also sell individual pizzas at events like schools, fundraisers,
            churches, carnivals, festivals, and recreational parks!
          </p>
          <p className="text-white/90"
            style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: "20px", lineHeight: "1.8em" }}
          >
            Text us at{" "}
            <a
              href="tel:9516912329"
              className="text-accent-blue hover:underline"
            >
              951-691-2329
            </a>{" "}
            and we&apos;ll help you get started!
          </p>
        </div>
      </section>

      {/* ===== SECTION 3: FOLLOW US ===== */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pizzeria_31.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Non-italic, single line */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 whitespace-nowrap"
            style={{
              fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
              color: "#e09900",
            }}
          >
            Don&apos;t forget to follow and like us!
          </h1>

          {/* Social media icons - round circles like clone v1, with correct Yelp */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/lalumbreartisanpizza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Follow on Facebook"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              {/* Yelp burst logo */}
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.271 10.226c-.278-.625-.109-1.065.577-1.509l3.984-2.574c.564-.365 1.06-.37 1.338.094.253.42.107.992-.197 1.463l-2.647 3.94c-.425.612-.899.579-1.409.023l-1.646-1.437zM11.036 12.078c-.266.636-.72.77-1.398.34l-3.791-2.665c-.51-.358-.637-.893-.252-1.38.349-.441.944-.465 1.504-.265l4.207 1.52c.716.264.803.756.517 1.478l-.787.972zM11.3 14.536c.637.24.79.696.422 1.392l-2.02 3.902c-.3.564-.784.736-1.305.397-.473-.307-.528-.892-.369-1.457l1.35-4.282c.223-.73.68-.877 1.374-.589l.548.637zM13.52 13.96c.192-.667.629-.84 1.366-.558l4.095 1.66c.568.228.78.702.523 1.258-.233.504-.802.604-1.388.526l-4.34-.84c-.732-.132-.87-.594-.678-1.306l.422-.74zM12.432 11.49c.675.09.888.509.698 1.251l-.05.21c-.203.674-.634.868-1.328.656l-.202-.073c-.666-.255-.846-.7-.55-1.36l.082-.17c.312-.597.756-.697 1.35-.514z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
