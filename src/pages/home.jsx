import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      <Hero />
      
      <section id="sobre" className="section">
        <h2>Así se vive Isla Negra</h2>
        {/* Usamos preload="metadata" como tenías en tu JS */}
        <video autoPlay muted loop playsInline className="video-full" preload="metadata">
          <source src="/media/videos/terraza.mp4" type="video/mp4" />
        </video>
      </section>

      <section id="menu" className="section">
        <h2>Sabores del litoral</h2>
        <p>Pescados de río, pastas caseras y coctelería.</p>
      </section>

      <section id="reservas" className="section">
        <h2>Reservas limitadas</h2>
        <a className="btn" href="https://www.apparta.co/isla-negra/reservas">Quiero mi mesa</a>
      </section>
    </main>
  );
};

export default Home;