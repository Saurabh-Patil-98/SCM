import React from 'react'

const Payment = () => {
  return (
    <div class=" dark:bg-gray-800 transition-colors duration-300 w-[1000px] ">
    <div class="container mx-auto p-4">
        <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Personal Information</h1>
            <p class="text-gray-600 dark:text-gray-300 mb-6">Use a permanent address where you can receive mail.</p>
            <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First name" class="border p-2 rounded w-full"></input>
                    <input type="text" placeholder="Last name" class="border p-2 rounded w-full"></input>
                </div>
                <div class="mb-4">
                    <input type="email" placeholder="Email address" class="border p-2 rounded w-full"></input>
                </div>
               
                <div class="mb-4">
                    <input type="text" placeholder="Street address" class="border p-2 rounded w-full"></input>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input type="text" placeholder="Start_time" class="border p-2 rounded w-full"></input>
                    <input type="text" placeholder="end_time" class="border p-2 rounded w-full"></input>
                    <input type="text" placeholder="total_duration" class="border p-2 rounded w-full"></input>
                </div>
                <button type="button" id="submit" class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                    Submit
                </button>
            </form>

        </div>
    </div>

  </div>
  )
}


export default Payment;