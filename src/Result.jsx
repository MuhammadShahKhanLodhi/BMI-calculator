import React from 'react'

export default function Result({bmi, weightClass}) {
  return (
    <div className='h-1/4 my-7 flex flex-col items-center flex-wrap'>
        <h2 className='mb-4 font-bold'>Your BMI is : {bmi} </h2>
        {
            weightClass !== "" && 
            <div className='h-auto w-5/6 border-2 bg-slate-400 border-black flex justify-between items-center p-6 shadow-inner shadow-black/60 customResult'>
              <h3 className='text-lg'>You are {weightClass}!</h3>
              <div className='w-1/2 text-left'>
                <h3>What Next? Take Action Towards Better Health:</h3>
                <ul>
                  <h4>{<b>Maintain a Healthy Weight</b>}</h4>
                  <li className='list-disc'>Maintaining a healthy weight is important for your heart health.</li>
                  <h4>{<b>Increase Physical Activity</b>}</h4>
                  <li className='list-disc'>Moving more can lower your risk factors for heart disease.</li>
                  <h4>{<b>Eat a Heart-Healthy Diet</b>}</h4>
                  <li className='list-disc'>Eating a healthy diet is the key to heart disease prevention.</li>
                  <h4>{<b>Know and Control Your Heart Health Numbers</b>}</h4>
                  <li className='list-disc'>Tracking your heart health stats can help you meet your heart health goals.</li>
                </ul>
              </div>
            </div>
        }
    </div>
  )
}
