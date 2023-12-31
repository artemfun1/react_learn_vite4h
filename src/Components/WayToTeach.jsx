


export default function WayToTeach(props){



	return (
		props.ways.map(el => (
			<li key={Math.random().toString()}>
				<p>
					<strong>{el.title}</strong>
					{el.description}
				</p>
			</li>
		))
	)




}

