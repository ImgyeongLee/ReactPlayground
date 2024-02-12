import { Text3D, Center, Float, useMatcapTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const ThreeName = ({ setName }) => {
  const [matcapTexture] = useMatcapTexture('CB4E88_F99AD6_F384C3_ED75B9');
  return (
    <Center>
      <Float speed={1}>
        <group
          onClick={() => {
            console.log('I am a Korean!');
            setName('a Korean!');
          }}>
          <Text3D font={'/gleefulbubble.json'} size={7} bevelEnabled bevelSize={0.1} bevelThickness={0.1} height={0.8}>
            Korean
            <meshMatcapMaterial color="white" matcap={matcapTexture} />
          </Text3D>
        </group>
      </Float>
    </Center>
  );
};

export default ThreeName;
