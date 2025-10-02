import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";

export default function Home() {
  return (
    <>
      <div>
        <h1>Bienvenido a mi portafolio</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio placeat illo fuga dolore quaerat, dolores omnis
          quidem et perferendis doloremque excepturi soluta consequatur inventore harum quos. Ipsum nemo iste ut?
        </p>
      </div>
      <AboutMe />
      <Proyects />
    </>
  );
}
