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


        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => console.log(data[1].body))
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