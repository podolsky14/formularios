import React from 'react'
import { useState } from 'react'
import "../index.css"


    const boton =  {
        width: "300px",
        backgroundColor: "blue",
        color: "white"
        }

export default function Formulario() {
const [Form, setForm] = useState("")
    
const handleChange = (e) => {
    setForm({
        ...Form,
        [e.target.name]: e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
} 

const handleChecked = (e) => {
    setForm({
        ...Form,
        [e.target.name]: e.target.checked
    })
    console.log(e.target.name)
    console.log(e.target.checked)
} 

const handleSubmit = (e) => {
    alert("The form has been sent")
} 
    


    return (
   <>
         
            <form  type="submit" onSubmit={handleSubmit} >
                <h1 className='p-2'>FORMULARIO</h1>
<input type="text"id="name" name="name" placeholder='Name complete' onChange={handleChange} required/><br/><br/>
<input type="text"  id="dni" name="dni" placeholder='ID document'onChange={handleChange} required/><br/><br/>
<input type="date" name="date" id="date" onChange={handleChange} required/><br/><br/>
<div className="d-flex"><span className='pe-3 ps-1'>Sex:</span>
<div><label htmlFor="hombre" className='ps-3' >Man</label> 
 <input type="radio" name="sex" id="man" value="man" onChange={handleChange} /> &nbsp; &nbsp;</div>
 <div><label htmlFor="mujer">Woman</label>  
 <input type="radio" name="sex" value="woman" id="woman" onChange={handleChange}/></div></div>
<input type="tel" id="tel" name="tel" placeholder='Phone' onChange={handleChange} required/> <br/><br/>
<input type="email" id="email" name="email" placeholder='Email'onChange={handleChange} required /><br/><br/>
<input type="text"  id="address" name="address" placeholder='Address' onChange={handleChange} required/><br/><br/>
<span className='pe-2'>Language:</span><select name="language" onChange={handleChange} required>
<option name="english" value="english">English</option>
<option name="spanish" value="spanish">Spanish</option>
<option name="french"  value="french">French</option>
<option name="german"  value="German">German</option>
<option name="italian" value="Italian">Italian</option>
</select><br/><br/>
<div className='d-flex justify-content-start check'>
<label htmlFor="study" className='pe-4 studiescompletes'>Studies completes:</label>
<label htmlFor="studies" >Primary school
<input type="checkbox"  name="primary" id="primary" onChange={handleChecked} /></label>  &nbsp; &nbsp; &nbsp;
<label htmlFor="studies">High school
<input type="checkbox"  name="secundary" id="secundary" onChange={handleChecked} /></label>  &nbsp; &nbsp; &nbsp;
<label htmlFor="studies"><div className='uni1'>university</div>
<div><input type="checkbox" name="university" id="university" onChange={handleChecked}/></div></label></div><br/>
<input type="file" name="file" accept="image/jpeg, image/jpg, image/png" onChange={handleChange} required/><br/><br/>
<textarea name="textarea" cols="50" rows="10" placeholder='Write your message here ...' onChange={handleChange} required/><br/><br/>
<div className='d-flex justify-content-center'><input type="submit" style={boton} value="SUBMIT"/></div>

            </form>
            </>
    )
}
