'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
            end={amount}
            decimals={2}
            prefix="$"
            duration={1.5}
        />
    </div>
  )
}

export default AnimatedCounter