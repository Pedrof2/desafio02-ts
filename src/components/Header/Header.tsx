import './Header.css'
import { Text } from "@chakra-ui/react"

interface HeaderProps {
  text: string;
}
export const Header  = ({text} : HeaderProps) => {

  return(
    <>
    <div className='header'>
    <Text fontSize='3x1'> {text}</Text>
    </div>
    </>
  )
}
