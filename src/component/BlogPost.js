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

    constructor(props) {
        super(props);

        this.state = {

            comment: "",
        };

        this.onchange = this.onchange.bind(this);
        this.addCommentMethod = this.addCommentMethod.bind(this);
        this.changeFavoriteStatus = this.changeFavoriteStatus.bind(this);
    }

    onchange(event) {
        // console.log('event####: ', event.target.value);
        // this.props.addPost(event.target.value);
        this.setState({
            comment: event.target.value
        });

    }

    addCommentMethod(event) {
        // console.log('event: ', event.target.value);
        console.log('event: ', this.state.comment);
        this.props.addComment(this.state.comment);
    }

    changeFavoriteStatus(object) {

        console.log('changeFavoriteStatus object##: ', object);

        this.props.changeFavouriteStatus(object);
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
                                    <tr key={k}>
                                        <td  key={k.id+1}>{k.id}</td>
                                        <td  key={k.id+2}>{k.comment}</td>
                                        <td  key={k.id+3}>
                                            <Button variant="primary" value="Submit" >Like</Button>
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
        posts: state.PostReducerTest
});

// const mapStateToProps = (state, ownProps) => ({
//     errorMessage: state.errorMessage,
//     inputValue: ownProps.location.pathname.substring(1)
// })

export default connect(
    mapStateToProps,
    {addComment,changeFavouriteStatus}
)(BlogPost);
