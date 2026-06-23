const AboutPage = () => {
  return (
    <>
      <section className="border-b border-stone-200 bg-[#f5f0e8]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center md:py-12">
          <p className="mb-4 text-xs tracking-[0.4em] text-[#8b6914] uppercase">
            Renaissance Parfume
          </p>
          <h1 className="text-xl font-semibold tracking-[0.2em] text-stone-900 md:text-3xl">
            О нас
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <div className="space-y-8 text-stone-700">
          <div>
            <p className="mb-2 text-xs tracking-[0.35em] text-stone-400 uppercase">
              О магазине
            </p>
            <p className="text-lg leading-relaxed">
              Renaissance Parfume — это избранные ароматы мировых брендов в
              сердце Тараза. Мы помогаем найти свой запах: от классических
              композиций до современных новинок.
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs tracking-[0.35em] text-stone-400 uppercase">
              Адрес
            </p>
            <p className="text-lg leading-relaxed">
              г. Тараз, ул. Абая 130
              <br />
              ТД «БАРС»
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs tracking-[0.35em] text-stone-400 uppercase">
              Контакты
            </p>
            <p className="text-lg leading-relaxed">
              WhatsApp:{" "}
              <a
                href="https://wa.me/77000070720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-[#8b6914]"
              >
                +7 700 007 07 20
              </a>
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs tracking-[0.35em] text-stone-400 uppercase">
              Режим работы
            </p>
            <p className="text-lg leading-relaxed">
              Ежедневно с 10:00 до 20:00
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
