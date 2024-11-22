import Application from './Application'
import { applications } from '../applications'

const Dashboard = () => {
  return (
    <div className="bg-gray-50 flex flex-grow items-center justify-center">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mx-6 md:m-16">
        {applications.map((application) => (
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
