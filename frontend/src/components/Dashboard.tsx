import Application from './Application'
import { applications } from '../applications'
import Body from './Body'

const Dashboard = () => {
  const sortedApplications = applications.sort((a, b) => {
    if (a.enabled !== b.enabled) {
      return a.enabled ? -1 : 1
    }
    return a.title.localeCompare(b.title)
  })

  console.log(sortedApplications)

  return (
    <Body>
      <div className="grid gap-8 grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
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
    </Body>
  )
}

export default Dashboard
