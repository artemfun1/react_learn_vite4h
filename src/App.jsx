import { useState } from 'react';
import DifferencesSection from './Components/DifferencesSection';
import FeedbackSection from './Components/FeedbackSection';
import Header from './Components/Header/Header';
import IntroSection from './Components/IntroSection';
import TabsSection from './Components/TabsSection';
import TeachingSection from './Components/TeachingSection';
import EffectSection from './Components/EffectSection'

export default function App() {
	const [tab, setTab] = useState('effect');

	
	return (
		<>
			<Header />
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
