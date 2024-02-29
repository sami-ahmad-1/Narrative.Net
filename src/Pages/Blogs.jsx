import { collection, getDocs } from "firebase/firestore";
import Navbar from "../Components/Navbar/Navbar";

import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { data } from "autoprefixer";
import { imgDb, txtDb } from '../Firebase/Firebase';

function Blogs() {
  const [userRated , setUserRated] = useState(0)
  const ratingChanged = (newRating) => {
    setUserRated(newRating);
  }

  const getData = async() => {
    const valRef = collection(txtDb, 'txtData')
    const dataDb = await getDocs(valRef)
    console.log(dataDb.docs)
  }

  useEffect(() => {
    getData()
  },[])

  console.log("New Rating"  + userRated)
  return ( 
    <div style={{ userSelect: 'none' }}>
      <Navbar />
      <h1 className="mt-3  mb-2 text-center capitalize text-4xl">Blogs</h1>
      <hr className="w-1/5 mx-auto" />

      <div className="grid lg:grid-cols-2 lg:gap-2 justify-items-center cursor-pointer md:gap-1 md:grid-cols-1 ">

        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>






        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>






        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>






        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>






        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>






        <div className="py-10  shadow-lg ml-5 mr-5">
          <div className="rounded overflow-hidden  justify-center">
            <img
              className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
              src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sami</div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nisi? Provident dolorem esse quasi, itaque commodi
              dolores at iure labore autem! Illum repellendus expedita
              asperiores reiciendis, accusamus vel quo explicabo voluptatum
              mollitia debitis ullam, dicta aliquam sit sed ad quae. Non
              exercitationem quos corrupti qui recusandae dolorum repellat aut
              natus.
            </p>

            <div className="flex justify-between">
              <div className="mt-6 text-2xl font-thin">Author : Sami Ahamd</div>
              <div className="mr-5 mt-3">
                <ReactStars 
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  activeColor="#ffd700"
                />  
              <div className="font-semibold" >Rating : 0</div>
              </div>            
            </div>
          </div>
        </div>



  
      </div>
    </div>
  );
}

export default Blogs;
