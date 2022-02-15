import React from 'react'
import Portrait from '../Assets/Portrait.jpg'

export const Introduction = () => {
  return (
    <div class="flex h-screen">
        <div class="flex-1">
            <div class="p-20">
                <h1 class="text-7xl text-">Dario Mercuri</h1>
                <div class="py-10">
                  <div>
                    <div class="text-2xl">Web Developer</div>
                  </div>
                </div>
                <div class="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis magna nisi, at finibus orci pretium nec. Fusce nisi eros, sagittis a tellus eu, ultrices laoreet justo. Fusce vel aliquet risus. Proin sodales facilisis dui quis porttitor. Integer pulvinar eleifend eros nec porttitor. Fusce hendrerit dignissim magna in bibendum. Nam hendrerit porttitor nunc, eu vehicula leo ultricies sed. Sed fringilla tortor ex, quis tempus urna faucibus sed. Nulla arcu neque, suscipit eget arcu sit amet, fringilla euismod magna.
                </div>
            </div>
        </div>
        <div class="flex-1">
            <img class="p-20 w-full h-full object-contain" src={Portrait} alt=''></img>
        </div>
    </div>
  )
}
