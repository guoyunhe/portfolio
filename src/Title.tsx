import { Typography } from 'antd';

export default function Title({ children }: any) {
  return (
    <Typography.Title
      style={{
        display: 'flex',
        textTransform: 'uppercase',
        color: '#fff',
        transform: 'skewX(-30deg)',
        transformOrigin: 'left bottom',
        borderBottom: '3px solid #333',
      }}
    >
      <div style={{ padding: '4px 10px', marginBottom: -3, background: '#333' }}>{children}</div>
    </Typography.Title>
  );
}
