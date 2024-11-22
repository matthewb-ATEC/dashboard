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
        <div className="flex flex-grow rounded-md bg-white shadow-md flex items-center text-center justify-center">
          <div className="flex flex-col space-y-4 p-8">
            {/* Icons provided by google fonts icons */}
            <i className="material-icons text-ATECblue text-5xl">{iconName}</i>

            <div className="flex flex-col space-y-2">
              <div className="font-semibold text-2xl">{title}</div>
              <div className="text-gray-500 text-wrap">{description}</div>
            </div>
          </div>
        </div>
      </a>
    )

  return (
    <div className="flex flex-grow rounded-md bg-white shadow-md flex items-center text-center justify-center">
      <div className="flex flex-col space-y-4 p-8">
        {/* Icons provided by google fonts icons */}
        <i className="material-icons text-gray-400 text-5xl">{iconName}</i>

        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-gray-400 text-2xl">{title}</div>
          <div className="text-gray-300 text-wrap">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Application
