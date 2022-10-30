import Card from "../components/Card";

export default function Home() {
  const cardSamples = [
    {
      title: "Esto es una prueba",
      userID: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nam adipisci eveniet facere amet ducimus accusamus architecto, ullam repudiandae placeat quasi sequi natus, dolorem rem officia quas perferendis quo libero?",
    },
    {
      title: "Esto es una prueba 2",
      userID: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nam adipisci eveniet facere amet ducimus accusamus architecto, ullam repudiandae placeat quasi sequi natus, dolorem rem officia quas perferendis quo libero?",
    },
  ];
  return (
    <div className="home">
      {cardSamples.map((sample) => {
        return <Card data={sample} />;
      })}
    </div>
  );
}
