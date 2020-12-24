import React from 'react';
import '../App.css'

class Comments extends React.Component {

    constructor() {
        super();

        this.state = {
            isFetching: false,
            comments: []
        }

    }

    displayComments = () => {


        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => this.setState({ comments: data }))

    }

    //    clickHandler(postId) {
    //        console.log("Clicked");
    //
    //    }

    componentDidMount() {

        this.displayComments();
    }



    render() {
        return (
            <>
                <p> Our comments will be rendered over here  </p>

                {
                    this.state.comments.map((post) => {

                        return (
                            <div className="container">
                                <h2
                                    key={post.postId}>{post.name}</h2>
                                <p
                                    key={post.PostId}>{post.body}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Comments;