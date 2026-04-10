import './MinimalBarChart.css';

const bars = [
  { id: 'dept1', heightPx: 20 },
  { id: 'dept2', heightPx: 30 },
  { id: 'dept3', heightPx: 60 },
  { id: 'dept4', heightPx: 50 },
];

export default function MinimalBarChart() {
  const columns = `repeat(${bars.length}, 1fr)`;

  return (
    <section
      className="minimal-chart"
      style={{ gridTemplateColumns: columns }}
    >
      {bars.map((item) => (
        <div
          key={item.id}
          className="minimal-chart__bar"
          style={{ height: item.heightPx }}
          title={`${item.id}: ${item.heightPx}px`}
        />
      ))}
      {bars.map((item) => (
        <div key={`${item.id}-label`} className="minimal-chart__label">
          {item.id}
        </div>
      ))}
    </section>
  );
}
