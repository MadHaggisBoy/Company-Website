

export default function Hero() {
    return (
      <div className="container-fluid text-center shadow" style={{ marginBottom: '6rem', backgroundImage: 'url(hero.webp)', backgroundSize: '100% 100%', color: 'white'}}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <p className="text-left fs-4 font-italic" style={{textShadow: '2px 2px black'}}>Welcome to Brainstorm, where innovation meets execution. We provide efficient solutions that elevate businesses to new heights. Unleash the power of technology with our team of developers. Let's transform your ideas into reality and propel your business into the future. Explore the possibilities with Brainstorm - Where Ideas Take Flight.</p>
          </div>
          <div className="col p-5 d-none d-sm-block">
          <img src="./designIdea.png" alt="Logo"/>
          </div>
        </div>
      </div>
    );
  }
  