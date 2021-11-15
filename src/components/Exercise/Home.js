import React from 'react'
import Logo from '../../assets/Icons/Logo.png';
import Nutrition from '../../assets/Icons/Nutrition.png';
import User from '../../assets/Icons/User.png';
import Workout from '../../assets/Icons/Workout.png';
import Group from '../../assets/Icons/Group.png';
import Iconschevron from '../../assets/Icons/Iconschevron.png'

const Home = () => {
    return (
        <div class="bg-wild-sand-500 antialiased min-h-screen flex flex-col">
            <div class="bg-white flex flex-row justify-between ">
                <div class="flex">
                    <img src={Logo} alt="" />
                    <span class="pt-5 mx-10">
                        <button class=" text-black lg:flex">
                            Library
                            <img src={Iconschevron} alt="" />
                        </button>
                    </span>
                </div>
                <span class="pt-5 mr-10">
                    <button class=" text-black lg:flex">
                        Joe Smith
                        <img src={Iconschevron} alt="" />
                    </button>
                </span>
            </div>
            <div class="relative flex flex-grow">
                <nav
                    class="w-20 bg-white text-white h-screen px-7" >
                    <ul class="mt-8">
                        <li>
                            <img src={Workout} alt="" class="py-4" />
                            <img src={Nutrition} alt="" class="py-4" />
                            <img src={User} alt="" class="py-4" />

                        </li>
                    </ul>
                </nav>
                <div class='overflow-x-auto w-full min-h-screen py-10 px-7 flex-1'>
                    <div class='bg-white'>
                        <div class='flex justify-between py-5 ml-10'>
                            <div class="flex rounded">
                                <div class="flex border-2 rounded">
                                    <button class="flex items-center justify-center px-4 ">
                                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                    <input type="text" class="px-4 py-2 w-80" placeholder="Search Begineer Plan" />
                                </div>
                                <button class="text-white bg-gray-900 rounded-lg px-4  py-2 ml-5">All Exercises</button>
                            </div>
                            <button class="text-white bg-gray-900 mr-5 rounded-lg px-4  py-2" >Add Exercise</button>
                        </div>
                        <table class='max-w-8xl w-full whitespace-nowrap bg-white '>
                            <thead class="bg-gray-900 mx-full">
                                <tr class="text-white text-left">
                                    <th class="font-semibold text-sm uppercase px-6 py-4">Exercise Name </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4"> Body Part </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Muscles Involved </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Equipment </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Level </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Created By </th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4"> Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="text-center font-montserrat">test1</td>
                                    <td class="text-center font-montserrat"> Arms</td>
                                    <td class="text-center font-montserrat"> <span>Biceps</span>&nbsp;<span>Triceps</span></td>
                                    <td class="text-center font-montserrat"> BodyWeight </td>
                                    <td class="text-center font-montserrat"> Beginner </td>
                                    <td class="text-center font-montserrat "> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat"> <img src={Group} alt="" class="py-4" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat">test1</td>
                                    <td class="text-center font-montserrat"> Arms</td>
                                    <td class="text-center font-montserrat"> <span>Biceps</span>&nbsp;<span>Triceps</span></td>
                                    <td class="text-center font-montserrat"> BodyWeight </td>
                                    <td class="text-center font-montserrat"> Beginner </td>
                                    <td class="text-center font-montserrat"> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat"> <img src={Group} alt="" class="py-4" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat">test1</td>
                                    <td class="text-center font-montserrat"> Arms</td>
                                    <td class="text-center font-montserrat"> <span>Biceps</span>&nbsp;<span>Triceps</span></td>
                                    <td class="text-center font-montserrat"> BodyWeight </td>
                                    <td class="text-center font-montserrat"> Beginner </td>
                                    <td class="text-center font-montserrat"> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat"> <img src={Group} alt="" class="py-4" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat">test1</td>
                                    <td class="text-center font-montserrat"> Arms</td>
                                    <td class="text-center font-montserrat"> <span>Biceps</span>&nbsp;<span>Triceps</span></td>
                                    <td class="text-center font-montserrat"> BodyWeight </td>
                                    <td class="text-center font-montserrat"> Beginner </td>
                                    <td class="text-center font-montserrat"> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat"> <img src={Group} alt="" class="py-4" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat">test1</td>
                                    <td class="text-center font-montserrat"> Arms</td>
                                    <td class="text-center font-montserrat"> <span>Biceps</span>&nbsp;<span>Triceps</span></td>
                                    <td class="text-center font-montserrat"> BodyWeight </td>
                                    <td class="text-center font-montserrat"> Beginner </td>
                                    <td class="text-center font-montserrat"> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat"> <img src={Group} alt="" class="py-4" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class='flex justify-center py-5'>
                            <label>Page 1 of 19</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
