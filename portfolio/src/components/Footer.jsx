import {FaLinkedin, FaGithub} from 'react-icons/fa'

export const Footer = () => {
    return(
        <footer className='bg-gray-900 text-white py-8 mt-16'>
            <div className='container mx-auto text-center'>
                <div className='flex justify-center gap-6 mb-4'>
                    <a 
                        href="https://www.linkedin.com/in/shunukumbura"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-2xl hover:text-blue-500'
                        >
                            <FaLinkedin/>
                        </a>
                        <a 
                            href="https://github.com/ShalomHunukumbura"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-2xl hover-text-gray-500'
                        >
                            <FaGithub/>
                        </a>
                </div>
                <p className='text-sm'>© {new Date().getFullYear()} Shalom Hunukumbura</p>
            </div>

        </footer>
    )
}