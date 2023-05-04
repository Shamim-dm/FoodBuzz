import React from 'react';

const BannerSection = () => {
    return (
        <div className=''>
            
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-10 items-center gap-2 bg-slate-200 '>
            <div className='align-middle px-2'>
                <h2 className='text-2xl md:text-5xl font-bold leading-tight tracking-wider'>10 Foods <br /> <span>to Eat to Help </span> <br />
                    <span className='text-indigo-500'>You Lose Weight</span> </h2>

                <p className='mt-8 text-slate-400'>Including these tasty, satisfying  <br /> staples throughout the week can<br /> help supercharge your weight-loss efforts.</p>
                {/* <button className="btn-primary mt-10">Get Start</button> */}
            </div>
            <div className=''>
                <img className='h-full' src='https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg' />
            </div>

        </div>
        
        </div>
    );
};

export default BannerSection;