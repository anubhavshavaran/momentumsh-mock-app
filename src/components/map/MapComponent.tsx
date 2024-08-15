import { Group, Image, Line, Rect, Text } from "react-konva";
import link from './../../assets/icons/LinkWhite.png'
import useImage from "use-image";


export default function MapComponent() {
    const [linkImage] = useImage(link);

    return (
        <>
            <Group
                x={20}
                y={50}
                draggable
            >
                <Rect
                    x={0}
                    y={0}
                    width={250}
                    height={150}
                    fill="#181e25"
                    stroke="#FFAD62"
                    strokeWidth={1.5}
                    cornerRadius={4}
                />

                <Line
                    x={20}
                    y={20}
                    points={[-20, 15, 230, 15]}
                    stroke="#FFAD62"
                    strokeWidth={1.5}
                />
                <Text
                    x={10}
                    y={10}
                    text="cart_router.py"
                    fontSize={14}
                    fontFamily="Mulish"
                    fill="#ffffff"
                    fontStyle="normal"
                />
                <Image
                    x={225}
                    y={12}
                    image={linkImage}
                />

                <Text
                    x={10}
                    y={55}
                    text="add_item_to_cart"
                    fontSize={14}
                    fontFamily="Mulish"
                    fill="#ffffff"
                    fontStyle="normal"
                />

                <Text
                    x={10}
                    y={80}
                    text="“DependentLibs” : [“sqlalchemy”]"
                    fontSize={10}
                    fontFamily="Mulish"
                    fill="#FFAD62"
                    fontStyle="400"
                />
                <Text
                    x={10}
                    y={100}
                    text="“Params” : [“user_id”, “item”, “db”]"
                    fontSize={10}
                    fontFamily="Mulish"
                    fill="#FFAD62"
                    fontStyle="400"
                />
                <Text
                    x={10}
                    y={120}
                    text="“ResponseObject” : “JSONResponse”"
                    fontSize={10}
                    fontFamily="Mulish"
                    fill="#FFAD62"
                    fontStyle="400"
                />
            </Group>
        </>
    );
}