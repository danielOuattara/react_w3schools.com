import React from 'react';

class ReactRender extends React.Component {
    render() {
        return (
             <div>
                 <p>React Render:</p>
                 <h1>Discover new tools and technics of Javascript used by React</h1>
                 
                 <table>
                   <thead>
                     <tr>
                       <th>Month</th>
                       <th>Savings</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>January</td>
                       <td>$100</td>
                     </tr>
                     <tr>
                       <td>February</td>
                       <td>$80</td>
                     </tr>
                   </tbody>
                   <tfoot>
                     <tr>
                       <td>Sum</td>
                       <td>$180</td>
                     </tr>
                   </tfoot>
                 </table> 

             </div>
             ); 
        
    }
}

export default ReactRender