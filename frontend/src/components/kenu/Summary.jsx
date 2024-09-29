import React from 'react'
import PackData from './PackData'
import Policy from './Policy'
import Info from './info'

function Summary() {
  return (
    <>
    <div role="tablist" className="border-none tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Info" defaultChecked/>
  <div role="tabpanel" className="tab-content bg-transparent  rounded-box p-6">
    <Info />
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label=" Polices"
     />
  <div role="tabpanel" className="tab-content bg-transparent  rounded-box p-6">
   <Policy />
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label=" Summary" />
  <div role="tabpanel" className="tab-content bg-transparent rounded-box p-6">
    <PackData />
  </div>
</div>
    </>
  )
}

export default Summary