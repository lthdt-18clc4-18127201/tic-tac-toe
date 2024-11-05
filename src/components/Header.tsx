
interface Props {
  children: React.ReactNode
}

const Header = ({children}: Props) => {
  return (
    <div className="h-screen w-full">
    <div className="flex justify-center items-center">
      { children }
    </div>
  </div>
  )
}

export default Header