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
  // Hook implementation 
  const [image, setImage] = useState({'imagePath':'https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img.jpg'});

  return (
    <>
    <center>
        <br/><br/><br/>
            <div className="card mb-3" Style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image['imagePath']} className="img-fluid rounded-start" alt="..." Style="height:400px; width:auto;" onChange={onChangeImageHandler}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Upload your Medical Reports</h5>
                            <p className="card-text">lorem inpusom soreime dfgetxcje sdiedhh deoikm</p>
                            <form className="form-control form-control-lg">
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label" >file upload</label>
                                    <input className="form-control" type="file" id="formFile" onChange={onChangeImageHandler}/>
                                </div>
                                <br/>
                                <button className='btn btn-dark' type='submit' onClick={() => upload()}>Upload</button>
                                <br/><br/>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
    </center>
    </>
  )
}
