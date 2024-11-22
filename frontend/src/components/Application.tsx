interface ApplicationProps {
  link: string
  iconName: string
  title: string
  description: string
}

const Application = ({
  link,
  iconName,
  title,
  description,
}: ApplicationProps) => {
  return (
    <a href={link} rel="noopener noreferrer">
      <div className="rounded-md bg-white shadow-md flex items-center text-center justify-center">
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
}

export default Application
