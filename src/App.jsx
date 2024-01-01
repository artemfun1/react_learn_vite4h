import { useState } from 'react';
import DifferencesSection from './components/DifferencesSection';
import FeedbackSection from './components/FeedbackSection';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import TeachingSection from './components/TeachingSection';
import EffectSection from './components/EffectSection'

export default function App() {
	const [tab, setTab] = useState('effect');

	const [visible,setVisible]= useState(true)

	// setTimeout(()=>{
	// 	setVisible(false)
	// },2000)
	
	return (
		<>
			{visible &&<Header />}
			<main>
				<IntroSection />
				<TabsSection active={tab} onChange={current => setTab(current)} />

				{tab === 'main' && (
					<>
						<TeachingSection />
						<DifferencesSection />
					</>
				)}

				{tab === 'feedback' && <FeedbackSection />}
				{tab === 'effect' && <EffectSection/>}
			</main>
		</>
	);
}
