import { ContentStyle } from "./Content.style"
import BeastCard from "components/BeastCard/BeastCard"
import BEASTS from "assets/beastsData"

console.log(BEASTS)

export default function Content () {
  return (
    <ContentStyle>
      
      {BEASTS.map((beast, idx) => (
        <BeastCard
          key={idx}
          beastName={beast.name}
          BeastPicture={beast.picture}
          beastNumber={beast.number}
        />
      ))}

    </ContentStyle>
  )
}