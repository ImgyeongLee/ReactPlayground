import { Text3D, Center, Float, useMatcapTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const ThreeGamer = ({ setName }) => {
  const [matcapTexture] = useMatcapTexture('CB4E88_F99AD6_F384C3_ED75B9');
  return (
    <Center>
      <Float speed={1}>
        <group
          onClick={() => {
            console.log('I am a Gamer!');
            setName('a Gamer!');
          }}>
          <Text3D font={'/gleefulbubble.json'} size={7} bevelEnabled bevelSize={0.1} bevelThickness={0.1} height={0.8}>
            Gamer
            <meshMatcapMaterial color="white" matcap={matcapTexture} />
          </Text3D>
        </group>
      </Float>
    </Center>
  );
};

export default ThreeGamer;
