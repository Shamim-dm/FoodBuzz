import React from 'react';
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
          

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


        </div>
    );
};

export default Home;