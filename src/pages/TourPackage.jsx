import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const TourPackage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<Header />
			<main class='main' id='main'>
				<section class='section about-hero' style={{ backgroundImage: "url('./media/bg-about.jpg')" }} id='hero'>
					<h1 class='hero__title'>Tour Package</h1>
				</section>

				<section class='section tour container'>
					<div class='tour__container'>
						<div class='tour__card'>
							<img src='./media/img-1.jpg' alt='tahiti img' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Beach Resort</h5>
								<span class='tour__data-subtitle'>Tahiti</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-2.jpg' alt='dubai img' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Burj Khalifa</h5>
								<span class='tour__data-subtitle'>Dubai</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-3.jpg' alt='las vegas img' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Bellagio Fountain</h5>
								<span class='tour__data-subtitle'>Las Vegas</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-4.jpg' alt='san francisco img' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Golden Bridge</h5>
								<span class='tour__data-subtitle'>San Francisco</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-5.jpg' alt='' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Chicken Island</h5>
								<span class='tour__data-subtitle'>Krabi</span>
							</div>
							<Link to='/tour-package/asd' class='tour__link'></Link>
						</div>
						<div class='tour__card'>
							<img src='./media/img-6.jpg' alt='cape town img' class='tour__card-img' />
							<div class='tour__data'>
								<h5 class='tour__data-title'>Table Mountain</h5>
								<span class='tour__data-subtitle'>Cape Town</span>
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
export default TourPackage;
