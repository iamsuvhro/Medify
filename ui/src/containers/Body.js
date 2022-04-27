import React, {useState} from 'react'


export default function Body(props) {

    // Initializing the onchange event handler
    const onChangeImageHandler = (event) => {
        setImage({
            'filename': event.target.files[0].name,
            'image': event.target.files[0],
            'imagePath' : URL.createObjectURL(event.target.files[0])
        });
        console.log(event.target.files[0].name);
    }

    // funtion for sending data to the api
    const upload = () =>{
        const uploadData = new FormData();
        uploadData.append('filename',image['filename']);
        uploadData.append('image',image['image']);
        fetch('http://127.0.0.1:8000/verifyMalariaDetection/',{
            method: 'POST',
            body: uploadData,
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    // --------------------------------- Body implementation area ------------------------------------------
   
    // Creating upload body function
   function uploadBody() {
       return (
                <div className="card mb-3" Style="max-width: 1340px; margin-left:45px; margin-top:60px;">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image['imagePath']} alt={props.title} className="img-fluid rounded-start" style={{
                        height:'400px',
                        }} onChange={onChangeImageHandler}/>
                    </div>
                    <div className="col-md-8">
                        <form>
                                <div className="mb-3" Style="margin-top:100px; margin-right:40px;">
                                    <label htmlFor="formFile" className="form-label" Style="font-size:20px;" >Upload your file upload</label>
                                    <input className="form-control" type="file" id="formFile" onChange={onChangeImageHandler}/>
                                </div>
                                <button Style="padding-left:40px; padding-right:40px; font-size:20px;"className='btn btn-dark' type='submit' onClick={() => upload()}>Upload</button>
                        </form>
                    </div>
                </div>
            </div>  
       );
      
   }

   // Creating Result body function
   function resultBody() {
       return (
           <h2 Style="margin-top:30px;">Result Page</h2>
       )
   }

   // Creating Logs body function
   function logsBody() {
    return (
        <h2 Style="margin-top:30px;">Logs Page</h2>
    )
    }

   // Creating Main body function for accessing all body function 
   function renderBody() {
    if(props.value === 0){
        return uploadBody()
      }
    else{
        if (props.value === 1){
            return resultBody()
        }
        else{
            return logsBody()
        }
    }
   }


    // Hook implementation 
    const [image, setImage] = useState({
      'imagePath':'https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img.jpg'
    });
  
  // Final rendering body for user interface  
  return (
    <>   
     {
     renderBody()
     }
    </>
  )
}
