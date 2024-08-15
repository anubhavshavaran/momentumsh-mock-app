import { Layer, Line } from 'react-konva';

type GridProps = {
    width: number,
    height: number,
    gridSize: number
}

export default function Grid({ width, height, gridSize }: GridProps) {
    const lines = [];

    // Horizontal lines
    for (let i = 0; i < height / gridSize; i++) {
        lines.push(
            <Line
                key={`h${i}`}
                points={[0, i * gridSize, width, i * gridSize]}
                stroke="#1f2122"
                strokeWidth={1}
            />
        );
    }

    // Vertical lines
    for (let i = 0; i < width / gridSize; i++) {
        lines.push(
            <Line
                key={`v${i}`}
                points={[i * gridSize, 0, i * gridSize, height]}
                stroke="#1f2122"
                strokeWidth={1}
            />
        );
    }

    return <Layer>{lines}</Layer>;
}