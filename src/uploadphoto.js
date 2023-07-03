
// import React from 'react';
// import { useform } from "react";

// // function Uploadphoto()
// // {
// //   const {register}=useform()
// //   const onsubmit=(data)=>{
// // 	console.log(data);
// //   }
// // }
//   return (
// 		// <form onSubmit={Uploadphoto(onsubmit)}>
//     //    <input ref={register} type="file" name="picture" />
// 	  //  <button>submit</button>
// 		// </form>
//     <h1> this feature will added soon </h1>
//  );

// export default Uploadphoto;
const uploadphoto = () => {
  return (
    <div className="create">
      {/* <form action="/action_page.php">
          <input type="file" id="myFile" name="filename"> </input>
          <input type="submit" value={"submit"}> </input>
      </form> */}
       <h2>Upload Memorable Pictures</h2>  
       <form>
      <input type="file" id="myfile" name="filename" required>
        </input> 
      <input type="submit" value={"Submit"}></input> 
      </form> 
   </div>
    );
}
 
export default uploadphoto;