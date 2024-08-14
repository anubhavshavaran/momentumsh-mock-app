import Button from '../Button';
import Input from '../Input';
import SelectList from '../SelectList';
import Column from './Column';
import ControlPanelAction from './ControlPanelAction';
import Dependency from './Dependency';
import PanelLog from './PanelLog';
import PanelSubtitle from './PanelSubtitle';
import PanelTitle from './PanelTitle';

function ControlPanel() {
    return (
        <div className='controlPanelContainer'>
            <div className='controlPanel'>
                <p className='text-white text-[20px] font-bold mb-6'>cart_campaign</p>

                <Column gap='2' margin='4'>
                    <PanelLog message='Last 2 commits scanned' />
                    <PanelLog message='5 entry points identified' />
                </Column>

                <Column gap='2' margin='5'>
                    <PanelTitle text='Selected flow' />
                    <SelectList options={['POST /carts/{carts_id}']}/>
                </Column>


                <div className='mb-8'>
                    <Column gap='1' margin='3'>
                        <PanelTitle text='Dependencies' />
                        <PanelSubtitle text='Select the ones you want to mock' />
                    </Column>
                    <Column gap='3' margin='0'>
                        <Dependency link='#' label='httpx' />
                        <Dependency link='#' label='product_client' />
                        <Dependency link='#' label='sqlalchemy.orm' />
                        <Dependency link='#' label='cart_crud' />
                        <Dependency link='#' label='cartModel' />
                    </Column>
                </div>

                <div className='mb-8'>
                    <Column gap='1' margin='3'>
                        <PanelTitle text='Databases' />
                        <PanelSubtitle text='Select if you want to mock databases' />
                    </Column>

                    <Column gap='3' margin='0'>
                        <Dependency label='I want to mock databases' />
                        <Dependency label='I don’t want to mock database' />
                    </Column>
                </div>

                <Column gap='3' margin='3'>
                    <PanelTitle text='Database Configurations' />
                    <div className='flex flex-col gap-5 mt-4'>
                        <Input label='Database User' />
                        <Input label='Database Password' />
                        <Input label='Database Hostname' />
                    </div>
                </Column>
            </div>
            <ControlPanelAction>
                <Button label='save' onClick={() => console.log('saving data...')} />
            </ControlPanelAction>
        </div>
    );
}

export default ControlPanel;