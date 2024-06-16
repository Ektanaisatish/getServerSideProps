import Image from "next/image";
import img from '../public/1.jpg'
import img2 from '../public/2.jpg'
function Pets() {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        alt="nature"
        height='280'
        width='420'
      />
      <Image
        src={img2}
        placeholder="blur"
        alt="nature"
        height='280'
        width='420'
      />
      
      {['1', '2'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpeg`}
              alt='nature'
              height='280'
              width='420'
            />
          </div>
        );
      })}
    </div>
  );
}

export default Pets;
