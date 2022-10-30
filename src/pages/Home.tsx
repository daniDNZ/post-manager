import Card from "../components/Card";

export default function Home() {
  const cardSample = {
    title: "Esto es una prueba",
    userID: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nam adipisci eveniet facere amet ducimus accusamus architecto, ullam repudiandae placeat quasi sequi natus, dolorem rem officia quas perferendis quo libero?",
  };
  return (
    <div className="home">
      <Card data={cardSample} />
    </div>
  );
}
