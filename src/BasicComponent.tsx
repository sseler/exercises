import React from 'react';

const BasicComponent = () => {
    
    
    
    return (
        <div>Hello</div>
    )
}

class ClassComponent extends React.Component{
    
    constructor(props: any) {
        super(props);
        this.state = {color: "red"};
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}