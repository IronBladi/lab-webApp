export default function ProgressBar({ progress }) {
  return (
    <div style={{ width: '100%', background: '#eee', height: '20px', borderRadius: '10px' }}>
      <div style={{
        width: `${progress}%`,
        background: 'green',
        height: '100%',
        borderRadius: '10px'
      }} />
    </div>
  );
}
