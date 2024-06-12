import React, { useState } from 'react'
import Result from './Result'

export default function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState()
  const [weightClass, setWeightClass] = useState("")

  const calculateBMI = () => {
    const bmi = (weight / (Math.pow((height / 100), 2))).toFixed(1)
    setBmi(bmi)
    if(bmi < 18.5){
      setWeightClass("Underweight")
    } else if(bmi >= 18.5 && bmi <= 24.9) {
      setWeightClass("Healthyweight")
    } else if(bmi > 24.9 && bmi <= 29.9) {
      setWeightClass("Overweight")
    } else if(bmi > 29.9) {
      setWeightClass("Obese")
    }
  }

  return (
    <>
      <h1 className='text-center mt-20 mx-5 text-6xl'>BMI Calculator</h1>
      <main className='h-auto w-auto flex justify-center items-center mt-10'>
        <div className='bg-cyan-700 rounded-xl shadow-2xl shadow-black h-auto w-3/4 p-8 text-center'>
          <div className='flex justify-around items-center h-28 flex-wrap'>
            <label htmlFor="heightInput">Height(cm): 
            <input
              type='number'
              id='heightInput'
              value={height}
              onChange={event => setHeight(event.target.value)}
              className='w-24 border-2 border-black rounded-lg bg-slate-100 ml-3 pl-2'
            />
            </label>
            
            <label htmlFor='weightInput'>Weight(kg): 
              <input
                type='number'
                id='weightInput'
                value={weight}
                onChange={event => setWeight(event.target.value)}
                className='w-24 border-2 border-black rounded-lg bg-slate-100 ml-3 pl-2'
              />
            </label>
            
          </div>
          <button
            onClick={calculateBMI}
            className='border-2 border-black rounded-lg bg-slate-100 w-32'
            >Calculate BMI</button>
          <Result bmi={bmi} weightClass={weightClass} />
        </div>
      </main>
    </>
  )
}

/* 
What Next? Take Action Towards Better Health:

Maintain a Healthy Weight

Learn more about overweight and obesity
Increase Physical Activity

Moving more can lower your risk factors for heart disease.
Eat a Heart-Healthy Diet

Eating a healthy diet is the key to heart disease prevention.
Know and Control Your Heart Health Numbers

Tracking your heart health stats can help you meet your heart health goals.
 */