const projects = [
    {
        name: 'Kanban Planner',
        thumbnail: 'images/kanban.png',
        github: 'https://github.com/Mighty303/Kanban-planner',
        description: 'This is a side project I have been working on alongside school for a couple months mainly for fun.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
        name: 'Project Kaisel',
        thumbnail: 'images/kaisel.png',
        github: 'https://github.com/cedafiso0403/frontend-kaisel-bot',
        description: 'Project Kaisel is an easy to use web-application for displaying game statistics for the current season.',
        tech: ['React']
    },
    {
        name: 'Pokemon',
        thumbnail: 'images/pokemon.png',
        github: 'https://github.com/Mighty303/Project-Pokemon',
        description: 'Text-based Pokemon game practicing OOP concepts in Python. This was a high school passion project written in May 2020.',
        tech: ['Python']
    },
    {
        name: 'Sudoku Solver',
        thumbnail: 'images/sudoku.png',
        github: 'https://github.com/Mighty303/SudokuSolver',
        description: 'Recreated a sudoku solver using the recursive backtracking algorithm using an ArrayList to store positions.',
        tech: ['Java']
    },
]


const Projects = () => {
    return (
        <section className='flex flex-col items-center min-h-screen bg-black'>
            <div className='mx-12 md:mx-24 py-24'>
                <h1 id='projects' className='text-white text-3xl mb-12'>Featured Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4 bg-gray-900 rounded-2xl transition-none ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-700'>
                                    <img src={project.thumbnail} className='w-full rounded-2xl' alt={`${projects.name}`} />
                                    <div className='flex justify-between items-center px-4'>
                                        <h1 className='text-white text-2xl'>{project.name}</h1>
                                        <a href={project.github} rel='noreferrrer noopener' target='_blank'>
                                            <img src='images/icons/github.png' className='w-6 h-6 hover:opacity-50' />
                                        </a>
                                    </div>
                                    <p className='text-gray-300 px-4'>{project.description}</p>
                                    <ul className='flex gap-2 px-4 pb-4'>
                                        {project.tech.map((tech, index) => {
                                            return (
                                                <li key={index} className='text-blue-500'>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
export default Projects;