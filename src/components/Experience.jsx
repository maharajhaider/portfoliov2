import { useState } from "react";

const work_exp = [
    {
        role: 'Software Developer Intern',
        company: 'Rivian',
        bullets: [
        ],
        date: 'Sep 2024 - Apr 2025'
    },
    {
        role: 'Software Developer Intern',
        company: 'Avena Tech Corporation',
        bullets: [
            'Redesigned, developed and deployed full-stack websites utilizing Figma, React, and Tailwind optimizing load times by 75%',
            'Increased deployment speed by 50% by creating a CI/CD pipeline for integration, unit testing, and deployment on a VPS',
            'Developed and deployed containerized REST API endpoints using Express and Postgres, migrating over 60 WordPress blogs to a new, efficient platform for future blogs',
            'Coordinated 8 client meetings to discuss requirements and design changes, ensuring alignment with client needs and adherence to Nielsen Norman Group’s UX/UI principles'
        ],
        date: 'Jul 2023 - Present'
    },
    {
        role: 'Research Assistant',
        company: 'Simon Fraser Univserity',
        bullets: [
            'Developed Unity simulations in C# and Python for IMU sensor data in order to analyze whether it accurately matches the real world, allowing researchers to see how good their machine learning models are',
            'Collected XYZ and rotational data generated from training data generated by the T2M-GPT model in order for researchers to identify joints of motion to increase accuracy to real human motion',
            'Collaborated with graduate students from SFU and Dartmouth College under the supervision of Dr. Xing-Dong Yang'
        ],
        date: 'Jun 2023 - Sept 2023'
    },
    {
        role: 'Technical Support',
        company: 'Auphan Software',
        bullets: [
            'Resolved 1000+ tickets for POS software systems, payment processor integration, and software installation with big North American companies, increasing CSAT by 30%',
            'Collaborated with sales, development, and technical support teams to communicate regression reports and ensured tracking and support until resolution',
            'Troubleshooted database and server outages involving Apache, PostgreSQL, and pgbouncer',
        ],
        date: 'Mar 2021 - Aug 2021'
    }
]


const Experience = () => {
    const [experience, setExperience] = useState(0);

    const selectExperience = (index) => {
        setExperience(index);
    }

    return (
        <section id='experience' className='flex flex-col items-center bg-black text-white '>
            <div className='mx-12 md:mx-24 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h1 className='font-extralight text-4xl mb-12'>EXPERIENCE</h1>
                <section className='flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div className='flex flex-col'>
                        {work_exp.map((work, index) => {
                            return (
                                <h3 
                                    key={index} 
                                    onClick={() => selectExperience(index)} 
                                    className={index === experience ? `text-lg md:text-xl px-8 py-6 text-nowrap bg-[#1F1E1E] border-l-4 border-white cursor-pointer` : `text-lg md:text-xl px-8 py-6 text-nowrap border-l-4 border-[#1F1E1E] cursor-pointer`}
                                >{work.company}</h3>
                            )
                        })}
                    </div>
                    <div className='w-full'>
                        {
                            work_exp.map((work, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            index === experience &&
                                            <section className='flex flex-col gap-4 min-w-full max-w-full'>
                                                <div className='flex items-center justify-between'>
                                                    <h2 className='text-lg md:text-4xl'>{work.company}</h2>
                                                    <h3 className='text-sm md:text-xl text-gray-400'>{work.date}</h3>
                                                </div>
                                                <h3 className='text-blue-500 text-xl'>{work.role}</h3>
                                                <ul className='list-disc pl-5'>
                                                    {
                                                        work.bullets.map((bullet, index) => {
                                                            return (
                                                                <li key={index} className='mb-3'>{bullet}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </section>
                                        }
                                    </div>
                                )
                            }
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
}
export default Experience;