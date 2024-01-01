import { useCallback, useEffect, useState } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import useInput from './hooks/useInput';

export default function EffectSection() {
	const [modal, setModal] = useState(false);

	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	// const [value,setValue] = useState('')

	const input = useInput()

	const fetchUsers = useCallback(async () => {
		setLoading(true);
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		setUsers(users);
		setLoading(false);
	}, []);

	useEffect(() => {
		// 	async function fetchUsers() {
		// 		setLoading(true);
		// 		const response = await fetch(
		// 			'https://jsonplaceholder.typicode.com/users'
		// 		);
		// 		const users = await response.json();
		// 		setUsers(users);
		// 		setLoading(false);
		// 	}

		fetchUsers();
	}, [fetchUsers]);

	return (
		<section>
			<h3>Effects</h3>

			<Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
				Открыть информацию
			</Button>

			<Modal open={modal}>
				<h3>Hello from Modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
					molestias.
				</p>
				<Button onClick={() => setModal(false)}>Закрыть</Button>
			</Modal>

			

			{loading && <p>loading...</p>}
			{!loading && (
				<>
				<input type="text" className='control' {...input} />
				<h6>{input.value}</h6>
					<ul>
						{users
						.filter(u=> u.name.toLowerCase().includes(input.value.toLowerCase())
						)
						.map(us => (
							<li key={us.id}>{us.name}</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}
