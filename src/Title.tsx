import { Typography } from 'antd';

export default function Title({ children }: any) {
  return (
    <Typography.Title
      style={{
        display: 'flex',
        textTransform: 'uppercase',
        color: '#fff',
        transform: 'skewX(-30deg)',
        borderBottom: '3px solid #333',
      }}
    >
      <div style={{ padding: '0 8px', background: '#333' }}>{children}</div>
    </Typography.Title>
  );
}
