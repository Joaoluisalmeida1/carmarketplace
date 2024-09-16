import React from "react"
import { Button } from './components/ui/button'
import { SignInButton } from "@clerk/clerk-react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Category from "./components/ui/Category"
import MostSearchedCar from "./components/ui/MostSearchedCar"


function Home() {
    return (
        <div>
            {/* Header */}
            <Header/>
            {/* Hero */}
            <Hero/>
            {/* Category */}
            <Category/>
            {/* Most Searched Car*/}
            <MostSearchedCar/>
        </div>
    )   
}

export default Home