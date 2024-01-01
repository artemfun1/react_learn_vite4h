import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './Header.css';
import logo from '/logo-name.svg';

const HeaderContainer = styled.header`
	height: 50px;
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	background: #fafafa;
`;

export default function Header() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		let interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<HeaderContainer>
			<img src={logo} alt={'logo'} />

			<span>Время сейчас {time.toLocaleTimeString()}</span>
		</HeaderContainer>
	);
}
