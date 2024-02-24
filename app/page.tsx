import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="pt-20 hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="flex h-48 w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 py-8 lg:pointer-events-auto lg:p-0"
                rel="noopener noreferrer"
              >
                <Image
                  src="/house.png"
                  alt="Propertok Logo"
                  className="dark:invert"
                  width={60}
                  height={24}
                  priority
                />
              </a>
            </div>
            <h1 className="text-5xl font-bold text-primary">Propertok</h1>

            <h2 className="pt-6 text-5xl font-bold w-full">
              Accede a inmuebles que se venden fuera de Idealista.
            </h2>
            <p className="py-6">
              Usa Propertok para descubre el 80% de las propiedades ocultas en
              TikTok, no disponibles en otros portales.
            </p>
            <p className="pb-6">
              ¡Apúntate para recibir notificaciones cuando lancemos Propertok y
              aprovecha una OFERTA DE LANZAMIENTO LIMITADA ⤵️!
            </p>
            <div className="pb-6">
              <button className="btn btn-primary">Avísame</button>
            </div>

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
            <h2 className="pt-6 text-2xl font-bold w-full">
              Inmuebles en Tiktok?
            </h2>
            <p className="py-6">
              El 80% de los inmuebles vendidos en España lo son fuera de los
              portales inmobiliarios. TikTok se ha convertido en un gran espacio
              generador de transacciones inmobiliarias. En Propertok, buscamos
              facilitar y organizar el acceso a este tipo de inmuebles.
            </p>
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
        </div>
      </div>

      <p className="pb-6">
        Propertok is being developed by{" "}
        <a href="https://twitter.com/sopadesigns">@sopadesigns</a>.
      </p>
    </main>
  );
}