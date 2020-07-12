import React,{Component} from 'react';

class Result extends Component
{
    render()
    {
        return(
           <div id="output">
               <p>{this.props.result}</p>
           </div>
        );
    }
}

export default Result;