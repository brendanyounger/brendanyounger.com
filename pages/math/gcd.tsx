import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GCD from "../../components/GCD";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GcdArticle() {
  const [showMax, setShowMax] = useState(true);
  const [showAvg, setShowAvg] = useState(true);
  const [showIter, setShowIter] = useState(true);
  const [max, setMax] = useState(500);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>GCD visualization – brendanyounger.com</title>
        <meta
          name="description"
          content="Visualize the number of iterations in the classical GCD computation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Math visualizations
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How many iterations does gcd(x, y) take?
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <GCD
                      min={1}
                      max={max}
                      showIter={showIter}
                      showAvg={showAvg}
                      showMax={showMax}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span>Iterations of gcd(x, y) on the z-axis</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-700">
                  A theorem of Lamé, Dixon, and Heilbronn states that the average number of
                  iterations of the classical GCD function is
                  <BlockMath math="\frac{12~\mathrm{ln}(2)}{\pi^2} \mathrm{ln}(\mathrm{max}(x, y))" />
                  and the maximum is given by
                  <BlockMath math="\lceil \mathrm{ln}(N \sqrt{5}) / \mathrm{ln}((1 + \sqrt{5}) / 2)\rceil - 2" />
                </p>
              </div>
              <div className="mt-5 prose prose-red text-gray-700 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"></div>
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-4">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="max"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Maximum x, y value<br/>
                      <span className="text-sm text-gray-500">
                        Currently {max}
                      </span>
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <input
                          id="max"
                          type="range"
                          min="250"
                          max="1500"
                          step="250"
                          value={max}
                          onChange={(e) => setMax(parseInt(e.target.value, 10))}
                          className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <Switch.Group as="div" className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <Switch.Label as="span" className="text-sm font-medium text-gray-700" passive>
                        Show maximum
                      </Switch.Label>
                      <Switch.Description as="span" className="text-sm text-gray-500">
                        Stair step upper bound
                      </Switch.Description>
                    </span>
                    <Switch
                      checked={showMax}
                      onChange={setShowMax}
                      className={classNames(
                        showMax ? "bg-red-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showMax ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </Switch.Group>
                </li>
                <li className="py-4">
                  <Switch.Group as="div" className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <Switch.Label as="span" className="text-sm font-medium text-gray-700" passive>
                        Show average
                      </Switch.Label>
                      <Switch.Description as="span" className="text-sm text-gray-500">
                        Smooth middle surface
                      </Switch.Description>
                    </span>
                    <Switch
                      checked={showAvg}
                      onChange={setShowAvg}
                      className={classNames(
                        showAvg ? "bg-red-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showAvg ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </Switch.Group>
                </li>
                <li className="py-4">
                  <Switch.Group as="div" className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <Switch.Label as="span" className="text-sm font-medium text-gray-700" passive>
                        Show iterations
                      </Switch.Label>
                      <Switch.Description as="span" className="text-sm text-gray-500">
                        Spiky surface in the middle
                      </Switch.Description>
                    </span>
                    <Switch
                      checked={showIter}
                      onChange={setShowIter}
                      className={classNames(
                        showIter ? "bg-red-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showIter ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </Switch.Group>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
