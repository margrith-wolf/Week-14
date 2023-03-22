
import React, { useState} from 'react';

function ReviewForm() {
  const [inputarr,
    setInputarr] = useState([])

const [inputdata,
    SetInputdata] = useState({
      name: "",
       review: ""})

function changehandle(e) {

    SetInputdata({
        ...inputdata,
        [e.target.name]: e.target.value
    })

}

let {name, review} = inputdata;
function changhandle() {
    setInputarr([
        ...inputarr, {
            name,
            review
        }
    ])

    console.log(inputdata)
    SetInputdata({name: "", review: ""})

}

return (
    <div className='rating-table'>
        <input
            type="text"
            name='name'
            value={inputdata.name}
            onChange={changehandle}
            placeholder="Name"/>
        <input
            type="text"
            name='review'
            value={inputdata.review}
            onChange={changehandle}
            placeholder="Thoughts?"/>

        <button className='enter-button' onClick={changhandle}>Enter</button><br/>
      <br/><br/>

        <table className='submitted-table'>
            <tbody>
                <tr>
                    <td>Reviewer ID</td>
                    <th>Name </th>
                    <th>Review</th>
                </tr>
                {inputarr.length < 1 ?
                    <tr>
                        <td colSpan={4}>Leave your input!</td>
                    </tr>:
                inputarr.map((info, ind) => {
                    return (
                        <tr key={ind}>
                            <td>{ind + 1}</td>
                            <td>{info.name}</td>
                            <td>{info.review}</td>
                        </tr>
                    )
                })
}

            </tbody>
        </table>
    </div>
);
}



export default ReviewForm;