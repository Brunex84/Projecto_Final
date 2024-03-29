import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const DetailPackage = () => {

    const [selectedImage, setSelectedImage] = useState(" ../media/detail-img.jpg");
    useEffect(() => {
			window.scrollTo(0, 0);
		});
	return (
		<>
			<Header />
			<main class='container' style={{ marginTop: '120px' }}>
				<section class='detail'>
					<div class='detail__card card'>
						<img src={selectedImage} alt='' class='detail__card-img' />
						<div class='detail__card-img-list'>
							<img
								src='../media/detail-img.jpg'
								alt=''
								onClick={() => setSelectedImage('../media/detail-img.jpg')}
								class={`detail__card-img-item ${selectedImage === '../media/detail-img.jpg' ? 'active' : ''}`}
							/>
							<img
								src='../media/detail-img2.jpg'
								alt=''
								onClick={() => setSelectedImage('../media/detail-img2.jpg')}
								class={`detail__card-img-item ${selectedImage === '../media/detail-img2.jpg' ? 'active' : ''}`}
							/>
							<img
								src='../media/detail-img3.jpg'
								alt=''
								onClick={() => setSelectedImage('../media/detail-img3.jpg')}
								class={`detail__card-img-item ${selectedImage === '../media/detail-img3.jpg' ? 'active' : ''}`}
							/>
							<img
								src='../media/detail-img4.jpg'
								alt=''
								onClick={() => setSelectedImage('../media/detail-img4.jpg')}
								class={`detail__card-img-item ${selectedImage === '../media/detail-img4.jpg' ? 'active' : ''}`}
							/>
						</div>
						<div class='detail__card-data'>
							<div class='detail__card-title'>
								<h4>Description</h4>
								<h5>
									400€ <span>/ 4D3N</span>
								</h5>
							</div>
							<p class='detail__card-description'>
								In this destination, you can enjoy your days with friends and family. Beach or city, you can choose any of them. Book a gorgeous hotel or resort or, simply, a friendly hotel. 
							</p>
						</div>
					</div>
					<div class='detail__form card'>
						<h4 class='detail__form-title'>Join Now</h4>
						<form action=''>
							<div class='form__group'>
								<input class='form__group-input' type='text' placeholder='Enter your name' />
							</div>
							<div class='form__group'>
								<input class='form__group-input' type='email' placeholder='Enter your email' />
							</div>
							<div class='form__group'>
								<textarea class='form__group-textarea' placeholder='Enter your message' rows='5'></textarea>
							</div>
							<div class='form__group'>
								<button class='button button-detail'>Submit</button>
							</div>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default DetailPackage;
