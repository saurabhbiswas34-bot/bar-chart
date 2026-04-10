import './index.css';

const MIN = 0;
const MAX = 100;

function ProgressBar({ value }) {
  const progressValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <progress id="file" className="progress" value={progressValue} max={MAX}>
      {progressValue}%
    </progress>
  );
}

export default function App() {
  return (
    <main className="wrapper">
      <ProgressBar value={72} />
    </main>
  );
}
