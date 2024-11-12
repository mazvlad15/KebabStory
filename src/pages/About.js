import React from 'react';

function About() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
                <h1 className='my-2'>About us</h1>
                <p className="lead">
                    Bine ați venit la <strong>SuperKebab</strong>, locul unde pasiunea pentru gust autentic și ingrediente de calitate se întâlnesc! Suntem un foodmarket dedicat preparării celor mai savuroase shawarme și specialități de fast-food, realizate cu grijă și atenție la detalii. Indiferent dacă ești în căutarea unei gustări rapide sau a unui prânz consistent, la SuperKebab găsești mereu o varietate de opțiuni delicioase.
                </p>
                <h2>Misiunea Noastră</h2>
                <p className="lead">
                    Scopul nostru este simplu: să oferim clienților o experiență culinară unică, inspirată de aromele tradiționale și reinterpretată în stil modern. Folosim ingrediente proaspete, carne de cea mai bună calitate și condimente autentice, pentru a crea preparate care să satisfacă toate gusturile.
                </p>
                <h2>De ce să ne alegi?</h2>
                <ul className="lead">
                    <li><strong>Calitate și Prospețime</strong> – Preparăm fiecare shawarma la comandă, astfel încât să te bucuri de un gust intens și proaspăt la fiecare mușcătură.</li>
                    <li><strong>Diversitate</strong> – De la shawarma clasică cu pui, până la opțiuni speciale cum ar fi shawarma cu carne de vită, pulled pork, sau chiar versiuni vegetariene, avem ceva pentru fiecare.</li>
                    <li><strong>Atmosferă Primitoare</strong> – Fie că alegi să iei masa la noi sau să comanzi la pachet, te așteptăm cu zâmbetul pe buze și o servire rapidă și prietenoasă.</li>
                </ul>
                <p className="lead">
                    <strong>Alege SuperKebab – gustul care te face să revii!</strong>
                </p>
            </main>
        </div>
    );
}

export default About;
