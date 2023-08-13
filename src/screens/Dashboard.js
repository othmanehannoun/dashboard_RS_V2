import React, {useState, useEffect, useRef} from 'react'
import { OwnerLineChart } from '../components/charts/OwnerLineChart'
import "../styles/owner/index.css"


function Dashboard() {
 
  return (
    <div className='containet'>
        <div className="my-3">
            <div className="row">
              <div className="col-sm-8 mb-3">
                <div className="p-4 rounded-3 border bg-white">
                  <OwnerLineChart 
                    // OfferConsommees = {OfferConsommees}
                  />
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="p-5 rounded-3 border bg-white h-100 bg-hestia-gold-gradient d-flex flex-column text-light">
                  <p className="fs-4">Nombre total de clients dans l'application</p>
                  <p className="display-4 fw-semibold text-center m-auto">
                    120
                  </p>
                </div>
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default Dashboard