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
        <div className="absolute inset-0 bg-black/35" />

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
        <div className="absolute inset-0 bg-black/35" />

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
        <div className="absolute inset-0 bg-black/35" />

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
              {/* Yelp icon from Bootstrap Icons */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
