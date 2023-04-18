import { buildLegacyTheme } from 'sanity';

const props = {
  '--black': '#111212',
  '--white': '#EAEDEE',
  '--grey': '#8A9292',
  '--blue': '#00b4d8',
  '--blue-hover': '#90e0ef',
};

export const myTheme = buildLegacyTheme({
  '--black': props['--black'],
  '--white': props['--white'],
  '--gray': props['--grey'],
  '--gray-base': props['--grey'],

  '--component-bg': props['--black'],
  '--component-text-color': props['--white'],

  '--brand-primary': props['--blue'],

  '--default-button-color': props['--blue'],
  '--default-button-primary-color': props['--blue'],

  '--state-info-color': props['--blue-hover'],

  '--main-navigation-color': props['--black'],
  '--main-navigation-color--inverted': props['--white'],

  '--focus-color': props['--blue'],
});
