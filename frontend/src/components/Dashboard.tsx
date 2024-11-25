import Application from './Application'
import { applications } from '../applications'

const Dashboard = () => {
  const sortedApplications = applications.sort((a, b) => {
    if (a.enabled !== b.enabled) {
      return a.enabled ? -1 : 1
    }
    return a.title.localeCompare(b.title)
  })

  console.log(sortedApplications)

  return (
    <div className="bg-gray-50 flex flex-grow items-center justify-center">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 m-6 md:m-16">
        {sortedApplications.map((application) => (
          <Application
            key={application.id}
            link={application.link}
            iconName={application.iconName}
            title={application.title}
            description={application.description}
            enabled={application.enabled}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
