import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect} from 'react';


const HomePage = () => {
	const getStarted = () => {
		window.scrollTo({
			top: 700,
			behavior: 'smooth',
		});
	};

    useEffect(() => {
        window.scrollTo(0, 0);
    });

	return (
		<>
			<Header />
			<main class='main' id='main'>
				<section class='section hero' style={{ backgroundImage: "url('./media/bg-image.png')" }}>
					<h1 class='hero__title'>
						Explore the World <br />
						in just one Click
					</h1>

					<button onClick={getStarted} class='button button-hero'>
						Get Started
					</button>
				</section>
				<section class='section tour container'>
					<h3 class='section-title'>Popular Destinations</h3>

					<div class='tour__container'>
						<div class='tour__card'>
							<img src='./media/img-1.jpg' alt='Tahiti' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Beach Resort</h5>
								<span class='tour__data-subtitle'>Tahiti</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-2.jpg' alt='' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Burj Khalifa</h5>
								<span class='tour__data-subtitle'>Dubai</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-3.jpg' alt='' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Bellagio Fountain</h5>
								<span class='tour__data-subtitle'>Las Vegas</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
					</div>
				</section>
            </main>
            <Footer />
		</>
	);
};

export default HomePage;
