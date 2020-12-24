import React from 'react';

class Comments extends React.Component {

    constructor() {
        super();

        this.state = {
            isFetching: false,
            comments: {}
        }

    }

    displayComments = () => {

    }



    componentDidMount() {

        this.displayComments();
    }



    render() {
        return (
            <>
                <p> Our comments will be rendered over here  </p>
            </>
        )
    }
}

export default Comments;