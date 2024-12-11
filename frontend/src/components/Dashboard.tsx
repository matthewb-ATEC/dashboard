import Application from './Application'
import { applications } from '../applications'
import Body from './Body'
import { Subtitle, Title } from './Text'

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
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <Title text="Applications" />
          <Subtitle text="Select an active appliation to access the related tool" />
        </div>

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
      </div>
    </Body>
  )
}

export default Dashboard
