import { useState, useEffect, useRef } from "react"
import type { ImgHTMLAttributes } from "react";
// import type { FunctionComponent, FC } from "react"

// Types
type LazyImageProps = { src: string }
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>
type Props = LazyImageProps & ImageNativeTypes

// Interfaces
// interface Props extends ImgHTMLAttributes<HTMLImageElement> {
//   src: string
// }

// Forma explícita "JSX.Element" -> La más usada actualmente
export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      })
    })

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src])

  return (
    <img
      ref={node}
      src={currentSrc}
      {...imgProps}
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