import Sidebar from '../components/sidebar/Sidebar';
import Titlebar from '../components/Titlebar';
import Taskbar from '../components/Taskbar';
import ControlPanel from '../components/control/ControlPanel';

export default function Home() {
  return (
    <div className='w-screen h-screen grid grid-cols-home grid-rows-home'>
      <Sidebar />
      <Titlebar title='Configure Flows' />
      <Taskbar paths={['cart', 'cart_routes.py', 'POST /carts/{cart_id}']} />
      <ControlPanel />
    </div>
  );
}
