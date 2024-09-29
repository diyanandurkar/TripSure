import React from 'react';
import { Link } from 'react-router-dom';
import Package from '../Packages'; // Import Package component

function PackData() {
  return (
    <div className="info-container container mx-auto p-4 md:p-20">
      <br /><br />
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={3}><h1 className="text-2xl">Goa Package</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Day 1</th>
              <td>Check in to Summit Calangute Resort & Spa, 4 Star</td>
            </tr>
            <tr>
              <th>Day 2</th>
              <td>Day Meals: Breakfast : Included at Summit Calangute Resort & Spa , Goa</td>
            </tr>
            <tr>
              <th>Day 3</th>
              <td>Day Meals: Breakfast : Included at Summit Calangute Resort & Spa , Goa</td>
            </tr>
            <tr>
              <th>Day 4</th>
              <td>Day Meals: Breakfast : Included at Summit Calangute Resort & Spa , Goa</td>
            </tr>
          </tbody>
        </table>
        
        </div>
      
    </div>
  );
}

export default PackData;