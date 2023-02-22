import { ConfigProvider } from 'antd';
import ClientList from './clients';
import Header from './Header';
import ProjectList from './projects';

export default function App() {
  return (
    <ConfigProvider>
      <Header />
      <ProjectList />
      <ClientList />
    </ConfigProvider>
  );
}
