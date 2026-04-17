function Contact() {
    return (
        // <section>
        //     <h2>Contactame</h2>
        //     <p>¿Trabajamos juntos? Escribeme Oe</p>
        //     <button>
        //         <a href="https://wa.link/t4u0tf">
        //             Contactar
        //         </a>
        //     </button>
        // </section>

        <div class="bg-dark text-secondary px-4 py-5 my-5 text-center">
            <div class="py-5">
                <h1 class="display-5 fw-bold text-white">Contactame</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">¿Trabajamos juntos? Escribeme al Email o Whatsapp.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"> Email</button>
                        <button type="button" class="btn btn-outline-light btn-lg px-4">WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;