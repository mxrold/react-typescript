import { useState } from "react";
import { RandomFox } from "@/components/RandomFox"
import { getRandomNumer } from "@/utils/getRandomNumer";


export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${getRandomNumer()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumer()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumer()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumer()}.jpg`
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {
        images.map((image, index) => (
          <div className="p-4">
            <RandomFox key={index} image={image} />
          </div>
        ))
      }
    </main>
  )
}
