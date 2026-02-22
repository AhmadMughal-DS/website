/**
 * Home Page
 * Combines all homepage sections: Hero, Stats, Services, Benefits, Team, Contact.
 */
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Benefits />
      <Team />
      <Contact />
    </>
  );
}
