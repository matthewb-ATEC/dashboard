import { Link } from 'react-router-dom'

interface NavTabProps {
  name: string
  link?: string | null
}

const toKebabCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const NavTab = ({ name, link }: NavTabProps) => {
  const tabLink = link !== null ? link : toKebabCase(name)

  return (
    <Link to={`/${tabLink}`}>
      <div className="w-full h-full py-2 px-8 md:px-0 hover:bg-white hover:text-atec transition duration-200">
        {name}
      </div>
    </Link>
  )
}

export default NavTab
