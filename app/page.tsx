import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="xl:pt-20 lg:pt-20 md:pt-20 hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="flex pt-10 pb-6 w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 align-middle"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo_1.png"
                  alt="Propertok Logo"
                  className="dark:invert"
                  width={80}
                  height={24}
                  priority
                />
              </a>
              <h1 className="text-5xl font-bold text-black align-middle pt-4 pl-6">
                Propertok
              </h1>
            </div>

            <h2 className="py-6 text-5xl font-extrabold w-full">
              Discover homes from TikTok. Simple.
            </h2>

            <ul className="text-justify list-disc	pb-10 p-2">
              <li className="p-2">
                Intuitive and user-friendly interface that simplifies TikTok
                property searches and saves time.
              </li>
              <li className="p-2">
                Real-time notifications for new listings to never miss a
                potential opportunity.
              </li>
              <li className="p-2">
                Customizable tagging and categorization features that allow to
                organize properties efficiently and effectively.
              </li>
            </ul>

            <p className="pb-6">
              Sign up to receive notifications when we launch Propertok and take
              advantage of a LIMITED LAUNCH OFFER ⤵️!
            </p>

            <div>
              <Link href="https://tally.so/r/w8QMvz">
                <button className="btn btn-primary text-white">
                  Sign me in!
                </button>
              </Link>
            </div>
            <p className="pt-2 pb-6 text-primary">10 people signed in</p>
            {/* <label className="form-control w-full ">
              <input
                type="text"
                placeholder="Enter your best email"
                className="input input-bordered w-full "
              />
              <div className="py-6">
                <button className="btn btn-primary">Avísame</button>
              </div>
            </label> */}
            <h2 className="pt-6 text-2xl font-bold w-full">Homes on Tiktok?</h2>
            <p className="py-6 text-justify">
              TikTok has emerged as a major hub for real estate transactions.
              Here at Propertok, we are dedicated to simplifying and
              streamlining access to these kinds of properties.
            </p>

            <div className="pt-6">
              <div className="border-2 rounded-3xl">
                <a
                  className="justify-center pointer-events-none flex place-items-center gap-2 py-8 lg:pointer-events-auto lg:p-0"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/noticia.png"
                    alt="Propertok Logo"
                    className="dark:invert"
                    width={500}
                    height={24}
                    priority
                  />
                </a>
              </div>
            </div>
            <div className="pt-6">
              <div className="border-2 rounded-3xl">
                <a
                  className="justify-center pointer-events-none flex place-items-center gap-2 py-8 lg:pointer-events-auto lg:p-0"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/noticia3.png"
                    alt="Propertok Logo"
                    className="dark:invert"
                    width={500}
                    height={24}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pb-20">
        Propertok is being developed by{" "}
        <a href="https://twitter.com/sopadesigns">@sopadesigns</a>
      </p>
    </main>
  );
}
