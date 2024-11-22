import Application from './Application'

const Dashboard = () => {
  return (
    <div className="bg-gray-50 flex flex-grow items-center justify-center">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mx-6 md:mx-24">
        <Application
          link={`http://app.advancetecllc.com/expense-report`}
          iconName={`request_quote`}
          title={`Expense Report`}
          description={`File your expenses`}
        />
        <Application
          link={`http://app.advancetecllc.com/inventory`}
          iconName={`inventory`}
          title={`Inventory`}
          description={`View and manage material stock`}
        />
      </div>
    </div>
  )
}

export default Dashboard
