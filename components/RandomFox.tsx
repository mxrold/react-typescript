// import type { FunctionComponent, FC } from "react"
type Props = {
  image: string,
}

// Forma explícita "JSX.Element" -> La más usada actualmente
export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <img
      width="320"
      height="auto"
      src={image}
      className="mx-auto rounded-md bg-gray-300"
    />
  )
}

// Forma implícita
// export const RandomFox = () => {
//     return <img />
// }

// Usando tipos de React "FunctionComponent"
// export const RandomFox = (): FunctionComponent => {
//     return  <img />
// }

// Usando tipos de React "FC"
// export const RandomFox = (): FC => {
//     return  <img />
// }