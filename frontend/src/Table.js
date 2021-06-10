import React from 'react';

// component to be used as <Table data ={this.state.data}/>

export default class Table extends React.Component {
 
    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function() {
    
    }
    
    getHeader = function() {
    
    }
    
    getRowsData = function() {
        for (let index = 0; index < props.data.length; index++) {
            const element = array[index];
            
        }
        
    }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>
        
        );
    }
    
    }
    
const RenderRow = (props) => {
    
}