import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Button variant="secondary">Secondary</Button>
      <ModeToggle />
    </div>
  )
}

export default Home
