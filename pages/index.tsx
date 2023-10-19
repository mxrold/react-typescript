import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "@/components/LazyImage"
import { getRandomNumer } from "@/utils/getRandomNumer";
import { generateId } from "@/utils/generateId";

type ImageItem = {
  id: string,
  url: string
}

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${getRandomNumer()}.jpg`
    }

    setImages([
      ...images, newImageItem
    ])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={addNewFox}>Add new fox</button>
      {
        images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <LazyImage 
              src={url} 
              width={"320"}
              height={"auto"}
              className={"mx-auto rounded-md bg-gray-300"}
              onClick={() => console.log("OnClick")}
            />
          </div>
        ))
      }
    </main>
  )
}
