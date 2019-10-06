import React from "react";
// import ReactDOM from "react-dom";
import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import {connect} from 'react-redux';
import {addComment,changeFavouriteStatus} from '../redux/actions/indexActions';
// import Form from 'react-bootstrap/Form';

class BlogPost extends React.Component {

    constructor() {
        super();

        this.state = {

            comment: "",
        };

        this.onchange = this.onchange.bind(this);
        this.addCommentMethod = this.addCommentMethod.bind(this);
    }

    onchange(event) {
        // console.log('event####: ', event.target.value);
        // this.props.addPost(event.target.value);
        this.setState({
            comment: event.target.value
        });

    }

    addCommentMethod() {
        // console.log('event: ', event.target.value);
        // console.log('event: ', this.state.comment);
        this.props.addComment(this.state.comment);
    }

    render() {

        const { posts } = this.props;

        console.log("posts",posts);

        return (
            <div>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Add a comment</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" as="textarea" onChange={this.onchange} aria-label="With textarea"/>
                </InputGroup>

                <br>
                </br>
                <Button variant="primary" value="Submit" onClick={this.addCommentMethod}>Post</Button>

                <br>
                </br>
                <br>
                </br>

                <div>
                    <h1>All coments</h1>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Comments</th>
                                <th>favourite</th>
                            </tr>
                            </thead>

                            <tbody>

                                {posts.map(k => (
                                    <tr key={k+6}>
                                        <td  key={k.id+1}>{k.id}</td>
                                        <td  key={k.id+2}>{k.comment}</td>
                                        <td  key={k.id+3}>
                                            <Button key={k.id+4} variant="primary" value="Submit" onClick={()=>(this.props.changeFavouriteStatus(k))} >Like</Button>
                                            {/*<Button key={k.id+4} variant="primary" value="Submit" onClick={()=>(this.props.changeFavouriteStatus(k))} >Like</Button>*/}
                                        </td>
                                    </tr>
                                ))}

                                {/*<td>*/}
                                {/*    {posts.map(k => (*/}
                                {/*        <tr  key={k.id}>{k.comment}</tr>*/}
                                {/*    ))}*/}
                                {/*</td>*/}

                            </tbody>
                        </Table>

                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
        posts: state.postReducerTest
});



const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        addComment: (comment) => dispatch(addComment(comment)),
        changeFavouriteStatus: (commentObject) => dispatch(changeFavouriteStatus(commentObject)),

    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
