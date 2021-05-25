import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Home – brendanyounger.com</title>
        <meta name="description" content="Personal page of Brendan Younger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="bg-gray-900 max-w-7xl mx-auto self-center rounded-lg">
          <div className="py-8 px-4 sm:px-6 lg:px-10 lg:py-12">
            <div className="space-y-4">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Current interests
                </h2>
                <p className="text-xl text-gray-300">
                  👋 Welcome! I'm Brendan Younger and I've variously been a programmer,
                  entreprenuer, high school teacher, and mathematics grad student. I recently exited{" "}
                  <a
                    className="text-yellow-400 font-bold hover:text-yellow-500"
                    href="https://logistimatics.com"
                  >
                    Logistimatics
                  </a>{" "}
                  after 4 years{" "}
                  <a
                    className="text-yellow-400 hover:text-yellow-500"
                    href="https://www.youtube.com/watch?v=lwnnIN4YTtY"
                  >
                    with two great guys
                  </a>{" "}
                  and over $10M in annual revenue. This is what I'm currently thinking about. Please{" "}
                  <a
                    className="text-yellow-400 hover:text-yellow-500"
                    href="mailto:brendan@brendanyounger.com"
                  >
                    drop me a line
                  </a>{" "}
                  if you're interested in discussing.
                </p>
              </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2">
                      <h3 className="font-bold leading-6 text-xl text-white">
                        Healthcare in the US
                      </h3>
                      <p className="text-lg text-gray-300">
                        It couldn't possibly get any worse, could it? Something has to give when
                        individual plans carry $12K deductibles. Some folks trying to change it:
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://www.outofpocket.health/"
                        >
                          Out of Pocket &rarr;
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://turquoise.health/"
                        >
                          Turquoise &rarr;
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white leading-6">
                        Software is a tarpit
                      </h3>
                      <p className="text-lg text-gray-300">
                        We need to raise the level of abstraction to avoid making simple mistakes.
                      </p>
                      <div className="prose">
                        <blockquote>
                          <p className="text-white">
                            Civilization advances by extending the number of important operations
                            which we can perform without thinking of them.
                          </p>
                          <span className="text-white">– Alfred North Whitehead</span>
                        </blockquote>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://github.com/papers-we-love/papers-we-love/blob/master/design/out-of-the-tar-pit.pdf"
                        >
                          Out of the Tarpit &rarr;
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://tonsky.me/blog/disenchantment/"
                        >
                          Tonsky &rarr;
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white leading-6">Sensors + wireless</h3>
                      <p className="text-lg text-gray-300">
                        Recovering stolen air conditioners in Florida. Packages that alert you when
                        they're running late. Simple stuff, but very effective when deployed and
                        supported well.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://logistimatics.com"
                        >
                          Logistimatics &rarr;
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white leading-6">Education</h3>
                      <p className="text-lg text-gray-300">
                        K thru 12 educational curriculum in the US is about as enjoyable and
                        sophisticated as day-time television (a reference which is rapidly becoming
                        dated). With thousands of years of human culture and development, surely we
                        can provide better material for study. Can't we?
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://www.mathmammoth.com/complete/harold_jacobs_geometry"
                        >
                          Jacobs' Geometry &rarr;
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="https://www.khanacademy.org/"
                          rel="nofollow"
                        >
                          <strong>NOT</strong> Khan Academy &rarr;
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white leading-6">Climate</h3>
                      <p className="text-lg text-gray-300">
                        I grew up in Madison, Wisconsin. A good year was when you could skate on the
                        Warner Park lagoon between Christmas and New Year's. As the '90's wore on,
                        there were fewer good years. Some people care about flooding, drought, heat
                        waves, mass migration, etc. I just want more hockey.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl text-white leading-6">
                          Queen of the sciences
                        </h3>
                        <p className="text-lg text-gray-300">
                          Scientific fields modernized in roughly this order: mathematics (1700's),
                          physics (1800's), chemistry (first half of the 1900's), biology (late
                          1900's to present). Mathematics would seem to be due for a rebirth, but is
                          still mostly a pen-and-pencil affair.
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-yellow-400 hover:underline"
                          href="http://worrydream.com/LadderOfAbstraction/"
                        >
                          Bret Victor's Ladder of Abstraction &rarr;
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
