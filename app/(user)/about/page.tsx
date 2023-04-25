import Header from '@/components/Header';

export const metadata = {
  title: 'Minth Blog - A propos',
  description:
    'Page de description de Dominique Grisoni, créateur du blog Minth Blog & developpeur web front end, utilisant javascript, react, next, tailwind & CSS.',
};

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header
        title="A Propos de moi"
        text="Une petite description de mon parcours"
      />
      <h2 className="text-4xl font-serif mt-10 font-bold">Grisoni Dominique</h2>
      <hr className="border border-myblack w-[80%] mt-4" />
      <section className="mt-4 text-sm md:text-lg">
        <h4 className="mt-10 font-serif text-2xl font-bold text-center mb-4">
          Développeur Front-End Javascript
        </h4>
        <p>
          Ayant reçu une formation dans l&apos;Hôtellerie-Restauration
          jusqu&apos;en 2015.J&apos;ai ensuite travaillé en tant que cuisinier
          puis Chef de cuisine jusqu&apos;en 2022.
          <br />
          Pour enfin, suite à une formation de developpeur web full stack
          (Javascript et Symphony) me redirigé vers un metier qui me{' '}
          <b>passione...</b>
          <br />
          <h4 className="text-xl font-semibold font-serif text-myblue">
            Le developpement Web !
          </h4>
        </p>
      </section>
      <hr className="w-[80%] border border-myblack mt-10" />
      <section className="mb-10">
        <h4 className="mt-10 font-serif text-2xl font-bold text-center mb-4">
          Un résumé de mon parcours
        </h4>
        <h5 className="font-semibold font-serif text-xl ">Formation :</h5>
        <ol className="mt-2 italic">
          <li className="mb-2">
            <b>2009 - 2012 :</b> Baccalauréat Technologique de
            l&apos;Hôtellerie-Restauration à Bastia (Haute-Corse)
          </li>
          <li className="mb-2">
            <b>2012 - 2015 :</b> BTS Hôtellerie-Restauration Option Art de la
            table en alternance à Marseille
          </li>
          <li className="mb-2">
            <b>2020 - 2021 :</b> Formation Graduate developpeur web et web
            mobile fullstack chez Studi (parcours en ilgne d&apos;une année)
          </li>
        </ol>
        <h5 className="font-semibold font-serif text-xl mt-2">
          Competences aquises :
        </h5>
        <ul className="mt-2 italic">
          <li className="mb-2">- Le travail en équipe</li>
          <li className="mb-2">- La gestion du temps</li>
          <li className="mb-2">- L&apos;organisation</li>
          <li className="mb-2">- La resolution de problemes</li>
          <li className="mb-2">- Les languages Javascript, PHP(symfonny)</li>
          <li className="mb-2">- Le frameworks React.js et Next.js</li>
          <li className="mb-2">
            - Le CSS en général et par differentes librairies (Tailwind,
            Bootstrap, Styled-components, SASS...)
          </li>
        </ul>
      </section>
      <hr className="w-[80%] border border-myblack mt-10" />
      <section className="mb-10">
        <div>
          <h4 className="mt-10 font-serif text-2xl font-bold text-center mb-4">
            Me contacter
          </h4>
          <ul className="mt-2">
            <li className="mb-2  font-semibold text-lg">
              E-Mail:{' '}
              <a
                href={`mailto:dominique.grisoni@gmail.com`}
                target="_blank"
                className="font-normal text-myblue hover:underline"
              >
                Ici
              </a>
            </li>
            <li className="mb-2  font-semibold text-lg">
              LinkedIn:{' '}
              <a
                className="font-normal text-myblue hover:underline"
                href="https://www.linkedin.com/in/dominique-grisoni-6384a721b/"
                target="_blank"
              >
                Dominique Grisoni
              </a>
            </li>
            <li className="mb-2  font-semibold text-lg">
              GitHub:{' '}
              <a
                className="font-normal text-myblue hover:underline"
                href="https://github.com/DumeGrisoni"
                target="_blank"
              >
                DumeGrisoni
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
