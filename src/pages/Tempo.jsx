import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FetchData() {
	const [record, setRecords] = useState([]);
	const [city, setCity] = useState('Bolho'); 

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_pt&APPID=8d81f0e12efe061269e2c7b1b9c821d8`)
			.then(res => res.json())
			.then(data => setRecords(data))
			.catch(err => console.log(err));
	}, [city]); 

	return (
		<>
			<Header />
			<main className='main' id='main'>
				<section className='section about-hero' style={{ backgroundImage: "url('./media/bg-about.jpg')" }} id='hero'>
					<h1 className='hero__title'>Weather</h1>
				</section>

				<section className='section about container'>
					<div className='about__data'>
						<h3 className='about__data-tempo'>Weather Table</h3>
					</div>
					<div className='form__input-container'>
						<input
							onKeyDown={e => {
								if (e.key === 'Enter') setCity(e.target.value);
							}}
							id='city-input'
							type='text'
							placeholder='Enter your City'
						/>
					</div>

					<div className='about__data-weather'>
						<ul>
							<li key={record.id}>
								{record.name} | {record.sys?.country} |
								{record.weather?.map(wt => (
									<span key={wt.id}>
										{wt.main} | {wt.temp}
									</span>
								))}
								{parseInt(record.main?.temp)}ºC
							</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default FetchData;
