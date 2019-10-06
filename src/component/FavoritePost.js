import React from "react";
// import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import {connect} from "react-redux";
import {addComment} from "../redux/actions/indexActions";
import Button from "react-bootstrap/Button";


class FavoritePost extends React.Component {




    render() {

        const { posts } = this.props;

        return (

            <div>
                <h1>Favorite Comments</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Comments</th>

                    </tr>
                    </thead>
                    <tbody>

                    {posts.map(k => (
                        <tr key={k}>
                            <td  key={k.id+1}>{k.id}</td>
                            <td  key={k.id+2}>{k.comment}</td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }


}

const mapStateToProps = (state) => ({
    posts: state.PostReducerTest
});


export default connect(
    mapStateToProps,
    {addComment}
)(FavoritePost);


