import React from 'react'

const Education = () => {
  return (
    <section className='education'style={{display:"flex",justifyContent:"center"}}>
    <div >
      <h1>EDUCATION</h1>
      <table class="table" border={"10px"} style={{height:"300px",width:"500px"}}>
        <thead>
          <tr>
          <th scope="col">Degree</th>
            <th scope="col">Grade</th>
            <th scope="col">Year</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>SSC</td>
            <td>88.80</td>
            <td>2016</td>
            
          </tr>
          <tr>
          <td>HSC</td>
            <td>68.80</td>
            <td>2018</td>
          </tr>
          <tr>
          <td>B.Tech</td>
            <td>88.80</td>
            <td>2022</td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>
  )
}

export default Education