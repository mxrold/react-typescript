import { RandomFox } from "@/components/RandomFox"
import { getRandomNumer } from "@/utils/getRandomNumer";

export default function Home() {
  const randomNumber = getRandomNumer();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RandomFox image={`https://randomfox.ca/images/${randomNumber}.jpg`} />
    </main>
  )
}
