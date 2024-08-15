import { Layer, Stage } from 'react-konva';
import Grid from './Grid';
import MapComponent from './MapComponent';

export default function Canvas() {

    return (
        <Stage width={1200} height={650} className='canvas'>
            <Grid width={1200} height={650} gridSize={50} />
            <Layer>
                <MapComponent />
                <MapComponent />
                <MapComponent />
                <MapComponent />
                <MapComponent />
            </Layer>
            
        </Stage>
    );
}