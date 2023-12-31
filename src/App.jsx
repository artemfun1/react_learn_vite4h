import { useState } from 'react';
import DifferencesSection from './Components/DifferencesSection';
import FeedbackSection from './Components/FeedbackSection';
import Header from './Components/Header/Header';
import IntroSection from './Components/IntroSection';
import TabsSection from './Components/TabsSection';
import TeachingSection from './Components/TeachingSection';

export default function App() {
	const [tab, setTab] = useState('feedback');

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
			</main>
		</>
	);
}
