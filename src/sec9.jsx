import logo from "./assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
<section className="grid grid-cols-1 md:grid-cols-4 items-center  md:px-16 py-24 bg-white">      {/* grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10 md:px-16 py-16 bg-[#3e3f27] 
      bg-[#3e3f27] text-white py-24 px-12 flex justify-between items-center
      */}
      <div className="flex justify-start md:justify-Start ">
        
        <img src={logo} alt="" />
      </div>
      <div className="max-w-3xl px-10">
        <h4 className=" text-xl mt-4 text-black ">
          
           Quick Links
           </h4>
           <br />
         
           <h4 className="font-thin text-xl leading-tight text-black">
           Our Services
           </h4>
           <h5 className="font-thin text-xl leading-tight text-black">
Design           </h5>
          <h4 className="font-thin text-xl leading-tight text-black">
Our Work           </h4>
           
           <h4 className="font-thin text-xl leading-tight text-black">
About           </h4>
        <h4 className="font-thin text-xl leading-tight text-black">
Contact           </h4>
      </div>
      <div className="max-w-3xl px-10">
        <h4 className=" text-xl mt-4 text-black">
          
           Quick Links
           </h4>
           <br />
         
           <h4 className="font-thin text-xl leading-tight text-black">
           Our Services
           </h4>
           <h5 className="font-thin text-xl leading-tight text-black">
Design           </h5>
          <h4 className="font-thin text-xl leading-tight text-black">
Our Work           </h4>
           
           <h4 className="font-thin text-xl leading-tight text-black">
About           </h4>
        <h4 className="font-thin text-xl leading-tight text-black">
Contact           </h4>
      </div>

       <div className="max-w-3xl px-10">
        <h4 className="font-arial text-3xl font-thin mb-4 mt-4 text-black font-weight-100">Design inspiration,</h4>
        <h4 className="font-alex text-4xl text-black">Delivered</h4>
        <p className=" mt-2 text-sm text-black">
          Thoughtful project highlights and  custom design ideas, sent occasionally. </p>
       <div className="flex space-x-2">
         <div className="mt-4 w-50  bg-gray-300 p-5"> </div>
             
              {/* <div className="mt-4 w-15 h-4 bg-violet-500 p-5"> 
        <FontAwesomeIcon icon={faArrowRight} className="item-center " />
        </div> */}
        <div className="mt-4 w-15 h-10 bg-gray-900 flex items-center justify-center">
  <FontAwesomeIcon icon={faArrowRight} />
</div>
</div>
       </div>
<hr className="col-span-full mt-15 border-gray-700" />

<div className="col-span-full flex justify-between text-sm text-gray-500 pt-6">
  <p>© 2026 Danlee Wood Products</p>
  <p>Privacy Policy • Terms</p>
</div>          </section>
          
  );
}