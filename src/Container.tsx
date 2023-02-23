export default function Container({ children }: any) {
  return (
    <div style={{ maxWidth: 1200, padding: 20, margin: 'auto', overflow: 'hidden' }}>
      {children}
    </div>
  );
}
