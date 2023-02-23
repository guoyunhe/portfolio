import { Typography } from 'antd';

export default function Title({ children }: any) {
  return (
    <Typography.Title
      style={{
        display: 'flex',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: '#fff',
        borderBottom: '3px solid #333',
        borderBottomLeftRadius: '0.4em',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          borderTopRightRadius: '0.4em',
          padding: '4px 10px',
          marginBottom: -3,
          background: '#333',
        }}
      >
        {children}
      </div>
    </Typography.Title>
  );
}
