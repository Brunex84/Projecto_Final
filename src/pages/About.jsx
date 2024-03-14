import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
			<>
				<Header />
				<main class='main' id='main'>
                <section
                    class='section about-hero'
                    style={{ backgroundImage: "url('./media/bg-about.jpg')" }}
                    id='hero'
                >
					<h1 class='hero__title'>About Us</h1>
				</section>

				<section class='section about container'>
					<div class='about__container'>
                        <img class='about__img'
                             src='./media/about-image.jpg'
                             alt='' />

						    <div class='about__data'>
								<h3 class='about__data-title'>2023</h3>
								<p class='about__data-description'>
									Our mission is to help people find the best place for holidays or weekend visit. We have a big know-how of beaches, cities, activities and many more, all around the world. With us, you can have the best holidays of your life. Do not hesitate to contact us, we can help you to find your dream holiday.
								</p>
								<p class='about__data-description'>
									Travel is the only way to see the world: physical and mental. Consult our packages to find the best destinations and activities. Travel is life and life can be just travel.
								</p>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</>
		);
}

export default About;