import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <div className="p-4 w-full flex space-x-8 justify-center md:justify-start items-centers bg-ATECblue text-white">
        <img
          className="h-12"
          src="/images/ATEC-logo-white.png"
          alt="AdvanceTEC"
        />
      </div>

      <div className="flex flex-col space-y-4 w-full items-center justify-center p-8 bg-white shadow-lg">
        <div className="flex flex-col text-center space-y-2">
          <div className="flex flex-col text-center space-y-2">
            <div className="text-2xl font-semibold">Dashboard</div>
            <div className="text-sm text-gray-500">Select an application</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
