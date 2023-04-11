import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=" bg-black text-gray-300 py-6 px-4 w-full flex flex-col justify-between lg:flex-row">
                <div>

                    <p className=" text-2xl">TechHero</p>
                    <p>A tech job is one that deals with <br />
                        computer programs, hardware, software, <br /> networking, and maintaining systems</p>

                </div>
                <div>

                    <p className=" text-2xl">Company</p>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>

                </div>
                <div>

                    <p className=" text-2xl">Product</p>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>

                </div>
                <div>
                    <p className='text-2xl'>support</p>
                    <p>Help Desk
                        <br /> Sales <br />
                        Become a Partner <br />
                        Developers</p>

                </div>
                <div>
                    <p className=" text-2xl">contact</p>
                    <p>524 Broadway , NYC <br />
                        +1 777 - 978 - 5570</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;