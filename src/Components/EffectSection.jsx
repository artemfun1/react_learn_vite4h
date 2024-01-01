import { useState } from 'react'
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function EffectSection() {


  const [modal,setModal] = useState(false)


	function openModal() {
    setModal((prev)=>!prev)
  }

	return (
		<section>
			<h3>Effects</h3>

			<Button onClick={openModal}>Открыть информацию</Button>

			<Modal open={modal}>
				<h3>Hello from Modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
					molestias.
				</p>
			</Modal>
		</section>
	);
}
