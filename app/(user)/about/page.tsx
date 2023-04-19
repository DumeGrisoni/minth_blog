import Header from '@/components/Header';

export const metadata = {
  title: 'Page a propos',
  description:
    'Page de description de Dominique Grisoni, créateur du blog Minth Blog & developpeur web front end, utilisant javascript, react, next, tailwind & CSS.',
};

const About = () => {
  return (
    <div>
      <Header
        title="A Propos de moi"
        text="Une petite description de mon parcours"
      />
    </div>
  );
};

export default About;
