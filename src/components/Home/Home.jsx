import React from 'react';
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';
import BannerSection from '../BannerSection/BannerSection';
import Card from '../Card/Card';
import SpecialOffer from '../SpecialOffer/SpecialOffer';


const Home = () => {
    const alldata = useLoaderData()
    // console.log(alldata)
    return (
        <div>
          <Marquee>
            <h5 className='text-3xl'>If you can't feed a hundred people, then feed just one. ...</h5>
          </Marquee>

          <Marquee speed={200} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src='https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/06/01125429/129305145_378999043204329_6799470558229249305_n.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src='https://www.chefspencil.com/wp-content/uploads/Jamie-Oliver.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src='https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/01/07141341/gordon-ramsay-masterclass-ft-blog0918-1200x900.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsD8TOzv-40Ax1l2HGe2Sjao4cNV6C3-8c8OjFYBITjU5npND3KotrFC4nrNjxVn9BY4&usqp=CAU' className="w-full h-[70vh]" />
                </div>
                <div id="item1" className="carousel-item w-full">
                    <img src='https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/06/01125429/129305145_378999043204329_6799470558229249305_n.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src='https://www.chefspencil.com/wp-content/uploads/Jamie-Oliver.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src='https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/01/07141341/gordon-ramsay-masterclass-ft-blog0918-1200x900.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsD8TOzv-40Ax1l2HGe2Sjao4cNV6C3-8c8OjFYBITjU5npND3KotrFC4nrNjxVn9BY4&usqp=CAU' className="w-full h-[70vh]" />
                </div>
            </Marquee>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between mt-5'> 
            {
                alldata.map(data => <Card data={data} key={data.id}></Card>)
            }
            </div>

            <BannerSection className=""></BannerSection>
            <div className='mt-5'>
            <SpecialOffer className=''></SpecialOffer>
            </div>
           

                
        </div>
    );
};

export default Home;