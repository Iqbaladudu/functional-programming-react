import RecursiveComponents from "./RecursiveComponents";
// import { BigSuccessButton, DangerButton } from "./composition"
import { BigSuccessButton, DangerButton } from "./partiallyApply"

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {
	return (
		<>
			<RecursiveComponents data={nestedObject} />
			<BigSuccessButton text="Yess!" />
			<DangerButton text="lol" />
		</>
	);
}

export default App;