import RevealLinks from '../ContactComponents/Contactfooter';
import Example from '../HomeComponents/HomeOrbC';
const AboutUs = () => {
    return (
        <>
           <Example /> 
            <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                                Mind Integrity by
                                <br className="block sm:hidden" /> Tatianna Anderson
                            </h2>
                            <p className="max-w-lg font-bold mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                            I am an artist and technologist passionate about merging creativity with my analytical skills.  With a background in painting and a diverse portfolio, I have cultivated my artistic abilities alongside my technical expertise, having earned certifications in Python and Data Analysis. Currently, I work as a Junior Developer at PeopleShores, where I've gained essential consulting skills and extensive software training. My previous roles include sales and customer service positions at Vuori and Orlebar Brown, where I developed strong communication and project management skills. Additionally, I have six years of freelance experience as a self-taught artist, designing for galleries and creating promotional media. I aim to leverage my artistic vision and technical knowledge to provide meaningful solutions for clients and companies. My proficiency spans Java, JavaScript, React, HTML, CSS, SQL, and various design tools.
                            </p>
                            <div>
                                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                    <span className="relative inline-block">
                                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    </span>
                                </p>
                            </div>
                             
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                </span>
                                
                                   
                        </div>
                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <div>
                                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://res.cloudinary.com/dvvin6oes/image/upload/v1727848634/MagicEraser_241002_015504_r4iubb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RevealLinks />
        </>
    );
};

export default AboutUs;