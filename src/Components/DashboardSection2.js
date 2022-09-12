import React from 'react';
import ReactDOM from 'react-dom';
import trustedBy1 from '../images/circle-girl.png'
import trustedBy2 from '../images/Circle-Laptop.png'
import trustedBy3 from '../images/trustedBy-3.png'
import trustedBy4 from '../images/trustedBy-4.png'

const DashboardSection2 = () => {
    return (
        <div className='general-padding '>
            <div className='m-t-40'>
                <h1 className='strong-font-ex'>NGIS Initiative</h1>
                <p className='nine-size align-center'>On a mission to Empower 1 million Girl Child by 2030</p>
                
                <div className='m-t-60 '>
                    <div className='flex-align-top '>
                        <div className='position-relative  m-l-40' style={{marginLeft:'200px'}}>
                            <img  className='img-w-500  img-abs' src={trustedBy2}/>
                            <img className='img-w-500 img-abs1' src={trustedBy1}/>
                            {/* <img className='img-w-100' src={trustedBy2}/> */}
                        </div>
                        <div className='w-40 align-left p-0-30'>
                            <div>
                                <h1 className='p-15-0'>Scholarship</h1>
                                <p className='nine-size w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate
                                    cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis
                                    rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl,
                                    tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor,
                                     habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim,
                                     tellus quis urna tempor aliquam eu fermentum,
                                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                                    </p>
                            </div>
                            <div>
                                <h1 className='p-15-0'>Scholarship</h1>
                                <p className='nine-size w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate
                                    cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis
                                    rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl,
                                    tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor,
                                     habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim,
                                     tellus quis urna tempor aliquam eu fermentum,
                                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                                    </p>
                            </div>
                            <div>
                                <h1 className='p-15-0'>Scholarship</h1>
                                <p className='nine-size w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate
                                    cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis
                                    rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl,
                                    tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor,
                                     habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim,
                                     tellus quis urna tempor aliquam eu fermentum,
                                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection2;
