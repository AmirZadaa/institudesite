'use client'
import { CircleArrowDown, CircleArrowUp } from 'lucide-react'
import React, { useState } from 'react'

const SyllabusCard = () => {
  const [showOptions, setShowOptions] = useState([true, false, false, false, false])

  const handleShowOptions = (index: number) => {
    setShowOptions((prevState) => prevState.map((state, idx) => (idx === index ? !state : false)))
  }

  return (
    <>
      <div className="container mx-auto mt-10 lg:mt-16 w-full">
        {/* 1st Box */}
        <div className="border-2 bg-white text-black rounded-xl w-full cursor-pointer px-1">
          <div
            onClick={() => handleShowOptions(0)}
            className="flex justify-between items-center py-4 px-1 lg:py-8 lg:px-8"
          >
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-gray-400 flex gap-1">
                <span className="hidden lg:block ">Module{' '}</span>1{' '}
              </h1>
              <h1 className="font-semibold">Online Facebook Ads Course</h1>
            </div>
            <div>{showOptions[0] ? <CircleArrowUp /> : <CircleArrowDown />}</div>
          </div>
          {showOptions[0] && (
            <div className="px-1 lg:py-4 lg:px-12">
              <ul className="text-gray-800 list-disc pl-6 lg:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <li>Basics of Facebook Ads</li>
                <li>How do Facebook Ads work?</li>
                <li>Different Types of Facebook Ads</li>
                <li>Audience and Targeting optimization</li>
                <li>Understanding Placement options for Facebook ads</li>
                <li>Ad copy and copywriting for Facebook Ads</li>
                <li>Landing Page Optimization for Ads Relevancy</li>
                <li>Buyer Persona</li> 
                <li>Understanding Advanced Facebook Pixel Setup</li>
                <li>In-depth Facebook Analytics</li>
                <li>Facebook Ads A/B Testing</li>
                <li>Tracking Options related to Facebook</li>
                <li>Competitors spying</li>
                <li>Facebook Ads for Affiliate advertising</li>
                <li>How to get Clients for Facebook Ads?</li>
                <li>Understanding the Reporting for Facebook Ads & other Advanced concepts</li>
              </ul>
            </div>
          )}
        </div>
        {/* 2nd Box */}
        <div className="border-2 text-black bg-white rounded-xl cursor-pointer mt-4">
          <div
            onClick={() => handleShowOptions(1)}
            className="flex justify-between items-center py-4 px-2 lg:py-8 lg:px-8"
          >
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-gray-400 flex gap-1">
                <span className="hidden lg:block ">Module{' '}</span>2{' '}
              </h1>
              <h1 className="font-semibold">Online Instagram Marketing Course</h1>
            </div>
            <div>{showOptions[1] ? <CircleArrowUp /> : <CircleArrowDown />}</div>
          </div>
          {showOptions[1] && (
            <div className="px-1 lg:py-4 lg:px-12">
              <ul className="text-gray-800 list-disc pl-6 lg:pl-0  grid grid-cols-1 lg:grid-cols-2 gap-4">
                <li>Instagram Profile Creation & Customization</li>
                <li>Instagram Posting and Growth Best Practices</li>
                <li>Importance of Hashtags on Instagram</li>
                <li>How does Instagram Algorithm work?</li>
                <li>How to run Instagram Ads?</li>
                <li>Case Studies</li>
              </ul>
            </div>
          )}
        </div>
        {/* 3rd Box */}
        <div className="border-2 bg-white  text-black rounded-xl cursor-pointer mt-4">
          <div
            onClick={() => handleShowOptions(2)}
            className="flex justify-between items-center py-4 px-1 lg:py-8 lg:px-8"
          >
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-gray-400 flex gap-1">
                <span className="hidden lg:block ">Module{' '}</span>3{' '}
              </h1>
              <h1 className="font-semibold">Online LinkedIn Marketing Course</h1>
            </div>
            <div>{showOptions[2] ? <CircleArrowUp /> : <CircleArrowDown />}</div>
          </div>
          {showOptions[2] && (
            <div className="px-1 lg:py-4 lg:px-12">
              <ul className="text-gray-800 list-disc pl-6 lg:pl-0  grid grid-cols-1 lg:grid-cols-2 gap-4">
                <li>Introduction to LinkedIn</li>
                <li>LinkedIn Profile Setup</li>
                <li>Best Practices for LinkedIn Posts</li>
                <li>How to Run LinkedIn Ads?</li>
                <li>Facebook v/s LinkedIn Advertising</li>
                <li>LinkedIn Ad Objectives</li>
                <li>LinkedIn Ad Formats</li>
                <li>Targeting Budget and Scheduling Options</li>
                <li>LinkedIn Automation</li>
              </ul>
            </div>
          )}
        </div>
        {/* 4th Box */}
        <div className="border-2 bg-white text-black rounded-xl cursor-pointer mt-4">
          <div
            onClick={() => handleShowOptions(3)}
            className="flex justify-between items-center py-4 px-1 lg:py-8 lg:px-8"
          >
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-gray-400 flex gap-1">
                <span className="hidden lg:block ">Module{' '}</span>4{' '}
              </h1>
              <h1 className="font-semibold">Online Twitter Marketing Course</h1>
            </div>
            <div>{showOptions[3] ? <CircleArrowUp /> : <CircleArrowDown />}</div>
          </div>
          {showOptions[3] && (
            <div className="px-1 lg:py-4 lg:px-12">
              <ul className="text-gray-800 list-disc pl-6 lg:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <li>Introduction Twitter</li>
                <li>How does Twitter Algorithm work?</li>
                <li>Twitter for Business</li>
                <li>How to Run Twitter Ads?</li>
                <li>LinkedIn Ads Billing and Account Setup</li>
                <li>Types of Twitter Ads</li>
                <li>Audience Bidding, Budgets & Creatives</li>
                <li>Case Studies</li>
              </ul>
            </div>
          )}
        </div>
        {/* Fifth Box */}
        <div className="border-2 bg-white  text-black rounded-xl cursor-pointer mt-4">
          <div
            onClick={() => handleShowOptions(4)}
            className="flex justify-between items-center py-4 px-1 lg:py-8 lg:px-8"
          >
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-gray-400 flex gap-1">
                <span className="hidden lg:block ">Module{' '}</span>5{' '}
              </h1>
              <h1 className="font-semibold">Online Google Ads Course</h1>
            </div>
            <div>{showOptions[4] ? <CircleArrowUp /> : <CircleArrowDown />}</div>
          </div>
          {showOptions[4] && (
            <div className="px-1 lg:py-4 lg:px-12">
              <ul className="text-gray-800 list-disc pl-6 lg:pl-0  grid grid-cols-1 lg:grid-cols-2 gap-4">
                <li>Introduction to Google Ads</li>
                <li>How does Google Ads work?</li>
                <li>Different Types of Google Ads</li>
                <li>Understanding the Importance of Landing Pages</li>
                <li>In-Depth Search Ads (Basic to Advanced)</li>
                <li>Google Search Ads Creation, Optimization, and Reporting</li>
                <li>In-Depth Display Ads (Basic to Advanced)</li>
                <li>Google Display Ads Creation, Optimization, and Reporting</li>
                <li>How to Run App Install Ads in Google Ads?</li>
                <li>Running Call Only Ads</li>
                <li>Understanding Conversion-based campaigns & optimizing them</li>
                <li>Google Ads Checklists</li>
                <li>Understanding In-depth Optimization of Google Ads</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SyllabusCard
