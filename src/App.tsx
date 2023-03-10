import { ConfigProvider } from 'antd';
import Contact from './contact';
import Experiences from './experiences';
import Header from './header';
import ProjectList from './projects';

export default function App() {
  return (
    <ConfigProvider>
      <Header />
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 50px rgba(0,0,0,0.3)',
        }}
      >
        <ProjectList />
        <Experiences />
        <Contact />
      </div>
    </ConfigProvider>
  );
}
