import Sidebar from '../components/sidebar/Sidebar';
import Titlebar from '../components/Titlebar';
import Taskbar from '../components/Taskbar';

export default function Home() {
  return (
    <div className='w-full grid grid-cols-home grid-rows-home'>
      <Sidebar />
      <Titlebar title='Configure Flows' />
      <Taskbar paths={['cart', 'cart_routes.py', 'POST /carts/{cart_id}']} />
    </div>
  );
}
