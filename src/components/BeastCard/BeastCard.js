import { BeastCardStyle } from "./BeastCard.style"

export default function BeastCard({
  beastNumber,
  beastName,
  BeastPicture
}) {

  const secondaryNumbers = [
    (beastNumber * 4 - 3),
    (beastNumber * 4 - 2),
    (beastNumber * 4 - 1),
    (beastNumber * 4 - 0)
  ]

  const betOnPrimaryBeastNumber = () => {
    alert(`betting on ${beastNumber} - ${beastName}`)
  }
  
  const betOnSecondaryBeastNumber = (secondaryNumber) => {
    alert(`betting on secondary number ${secondaryNumber} of ${beastNumber} - ${beastName}`)

  }

  const parseTextFromNumber = (number) => {
    const digits = number.toString().length
    switch (digits) {
      case 1:
        return `0${number.toString()}`
      case 2:
        return number.toString()    
      default:
        return '00'
    }
  }

  return (
    <BeastCardStyle>
      <div
        className='primary-block'
        onClick={betOnPrimaryBeastNumber}
      >
        <BeastPicture />
        <h5>{beastNumber.toString()}</h5>
        <h4>{beastName}</h4>
      </div>
      <div
        className='secondary-block'
      >
        {secondaryNumbers.map((number, index) => (
          <p
            key={index}
            onClick={() => betOnSecondaryBeastNumber(number)}
          >
            {parseTextFromNumber(number)}
          </p>
        ))}
      </div>
    </BeastCardStyle>
  )
}