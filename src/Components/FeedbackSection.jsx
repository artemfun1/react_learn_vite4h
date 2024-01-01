import { useRef, useState } from 'react';
import Button from './Button/Button';

function StateVsRef() {
	const [show, setShow] = useState(false);

	const input = useRef();

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			setShow(prev => !prev);
		}
	}

	return (
		<div>
			<h3>input value: {show && input.current.value}</h3>
			<input
				ref={input}
				type='text'
				onKeyDown={handleKeyDown}
				className='control'
			/>
		</div>
	);
}

export default function FeedbackSection() {
	const [form, setForm] = useState({
		name: '',
		hasError: false,
		reason: 'error',
	});

	// const [name, setName] = useState('');
	// const [reason, setReason] = useState('error');
	// const [hasError, setHasError] = useState(false);

	function handleNameChange(event) {
		// setName(event.target.value);
		// setHasError(event.target.value.trim().length === 0);
		setForm(prev => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0,
		}));
	}

	return (
		<section>
			<h3>Обратная связь</h3>

			<form style={{ marginBottom: '1rem' }}>
				<label htmlFor='name'>Ваше имя</label>
				<input
					type='text'
					className='control'
					id='name'
					value={form.name}
					style={{
						border: form.hasError ? '1px solid red' : null,
					}}
					onChange={handleNameChange}
				/>
				<label htmlFor='reason'>Причина обращения</label>
				<select
					id='reason'
					className='control'
					value={form.reason}
					onChange={event =>
						setForm(prev => ({
							...prev,
							reason: event.target.value,
						}))
					}
				>
					<option value='error'>Ошибка</option>
					<option value='help'>Нужна помощь</option>
					<option value='suggest'>Предложения</option>
				</select>

				{/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

				<Button disabled={form.hasError} isActive={!form.hasError}>
					Отправить
				</Button>
			</form>

			<StateVsRef />
		</section>
	);
}
