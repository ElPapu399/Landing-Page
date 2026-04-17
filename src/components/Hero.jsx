export function Hero() {
    return (
        // <section className="hero container">
        //     <h1>
        //         Hola, soy Pablo
        //     </h1>
        //     <p>
        //         Ingeniero de Software | Desarrollador Frontend | Editor de Videos
        //     </p>
        //     <button className="btn">
        //         Contactar
        //     </button>
        // </section>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Hola soy Pablo</h1>
                    <p class="lead text-body-secondary">Ingeniero de Software | Desarrollador Frontend | Editor de Videos</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Contactar</a>
                    </p>
                </div>
            </div> 
        </section>
    );
};

export default Hero;