import Container from './Container'
import { Subtitle, Title } from './Text'

interface ApplicationProps {
  link: string
  iconName: string
  title: string
  description: string
  enabled: boolean
}

const Application = ({
  link,
  iconName,
  title,
  description,
  enabled,
}: ApplicationProps) => {
  if (enabled)
    return (
      <a className="flex flex-grow" href={link} rel="noopener noreferrer">
        <Container>
          <div className="flex flex-col h-full justify-center items-center text-center space-y-4">
            {/* Icons provided by google fonts icons */}
            <i className="material-icons text-atec-light text-5xl">
              {iconName}
            </i>

            <div className="flex flex-col space-y-2">
              <Title className="text-xl" text={title} />
              <Subtitle text={description} />
            </div>
          </div>
        </Container>
      </a>
    )

  return (
    <Container>
      <div className="flex flex-col h-full justify-center items-center text-center space-y-4 p-4">
        {/* Icons provided by google fonts icons */}
        <i className="material-icons text-gray-300 text-5xl">{iconName}</i>

        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-gray-300 text-xl">{title}</div>
          <div className="text-gray-200">{description}</div>
        </div>
      </div>
    </Container>
  )
}

export default Application
