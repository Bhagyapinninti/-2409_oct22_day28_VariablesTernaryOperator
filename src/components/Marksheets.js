import React from 'react'

function Marksheets(props) {
  let Tmarks= Number (props.Tmarks);
  let Hmarks= Number (props.Hmarks);
  let Emarks= Number (props.Emarks);
  let Mmarks= Number (props.Mmarks);
  let Scmarks=Number (props.Scmarks);
  let Somarks=Number (props.Somarks);
  
  
  let totalMarks=Tmarks+Hmarks+Emarks+Mmarks+Scmarks+Somarks;
  let perc=(totalMarks/600)*100;
  return (
    <div>
      <table>
        <caption>{props.name} Marks Sheet</caption>
        <thead>
            <tr>
                <th>subject</th>
                <th>Max Marks</th>
                <th>Marks Obtained</th>
                <th>Remarks</th>
                <th>Performance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Telugu</td>
            <td>100</td>
            <td>{Tmarks}</td>
            <td>{Tmarks>=35?"Pass":"Fail"}</td>
            <td>{Tmarks>=35?"Good":"Need to Improve"}</td>
            </tr>
           
            <tr>
            <td>Hindi</td>
            <td>100</td>
            <td>{Hmarks}</td>
            <td>{Hmarks>=35?"Pass":"Fail"}</td>
            <td>{Hmarks>=35?"Good":"Need to Improve"}</td>
            </tr>
            
            <tr>
            <td>English</td>
            <td>100</td>
            <td>{Emarks}</td>
            <td>{Emarks>=35?"Pass":"Fail"}</td>
            <td>{Emarks>=35?"Good":"Need to Improve"}</td>
            </tr>

            <tr>
            <td>Maths</td>
            <td>100</td>
            <td>{Mmarks}</td>
            <td>{Mmarks>=35?"Pass":"Fail"}</td>
            <td>{Mmarks>=35?"Good":"Need to Improve"}</td>
            </tr>

            <tr>
            <td>Science</td>
            <td>100</td>
            <td>{Scmarks}</td>
            <td>{Scmarks>=35?"Pass":"Fail"}</td>
            <td>{Scmarks>=35?"Good":"Need to Improve"}</td>
            </tr>

            <tr>
            <td>Social</td>
            <td>100</td>
            <td>{Somarks}</td>
            <td>{Somarks>=35?"Pass":"Fail"}</td>
            <td>{Somarks>=35?"Good":"Need to Improve"}</td>
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>600</th>
            <th>{totalMarks}({perc.toFixed(1)})%</th>
            <th>{props.remarks}</th>
            <th>Good</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Marksheets
