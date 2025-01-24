import { div, img } from 'framer-motion/client'
import React from 'react'

const Team = () => {

    const team = [
        {
            img: "/images/image/team1.webp",
            name: "John Jones",
            role: "Master Chef",
        },
        {
            img: "/images/image/team2.webp",
            name: "Anna Smith",
            role: "Pastry Chef",
        },
        {
            img: "/images/image/team3.webp",
            name: "Michael Brown",
            role: "Sous Chef",
        },
    ]

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col text-center w-[50%] items-center justify-center gap-2 mx-auto">
                <h1 className="text-5xl font-playfair font-medium">Team Member</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellat sequi autem nam nemo accusantium suscipit accusamus porro voluptatibus laboriosam!</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-lg shadow-lg h-[300px] lg:h-[500px] w-[300px] lg:w-full justify-center mx-auto"
                    >
                        <div
                            className="bg-cover bg-center w-full h-full"
                            style={{ backgroundImage: `url(${member.img})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                            <p className="text-white text-base">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Team
