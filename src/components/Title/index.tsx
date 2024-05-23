
interface TitleProps {
  content: string 
}
import './style.css'
export function Title({ content }: TitleProps) {
  return (
    <h1 className='title'>{content}</h1>
  )
}