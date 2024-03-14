/* import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Time = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	let timeCuriosities = useState([]);

	async function getTime() {
		await fetch('http://worldtimeapi.org/api/timezone/Europe/Lisbon')
			.then(result => result.json())
			.then(data => {
				timeCuriosities.push(data);
				console.log('time curiosities: ', timeCuriosities[0].datetime, timeCuriosities[0].day_of_week, timeCuriosities[0].timezone, timeCuriosities[0].week_number);
			});
	}

	getTime(); */

	import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
	import Footer from '../components/Footer';

	function FetchData() {
		const [record, setRecords] = useState([]);

		useEffect(() => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(data => setRecords(data))
				.catch(err => console.log(err));
		}, []);

		return (
			<>
				<Header />
				<main class='main' id='main'>
					<section class='section about-hero' style={{ backgroundImage: "url('./media/bg-about.jpg')" }} id='hero'>
						<h1 class='hero__title'>Time</h1>
					</section>

					<section class='section about container'>
						<div class='about__data'>
							<h3 class='about__data-title'>Time table</h3>
							load data somewhere here
						</div>
						{/* <div>
							<table>
								<thead>
									<tr>
										<th>DateTime</th>
										<th>|DayOfWeek</th>
										<th>|TimeZone</th>
										<th>|WeekNumber</th>
									</tr>
								</thead>
								<tbody>
									{timeCuriosities[0].map(item => (
										<tr key={item.id}>
											<td>{item.datetime}</td>
											<td>{item.day_of_week}</td>
											<td>{item.timezone}</td>
											<td>{item.week_number}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div>
							<h1 style={{ color: 'green' }}>using JavaScript inbuilt FETCH API</h1>
							<center>
								{timeCuriosities.map(dataObj => {
									return (
										<div
											style={{
												width: '15em',
												backgroundColor: '#35D841',
												padding: 2,
												borderRadius: 10,
												marginBlock: 10,
											}}
										>
											<p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
										</div>
									);
								})}
							</center>
						</div> */}

						<div>
							<ul>
								{record.map((list, index) => (
									<li key={index}>
										{list.id} | {list.name}{' '}
									</li>
								))}
							</ul>
						</div>
					</section>
				</main>
				<Footer />
			</>
		);
	};
/* 
export default Time; */
export default FetchData;