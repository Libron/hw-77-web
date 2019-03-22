import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchComments, publishComment} from "../../store/actions";
import ThreadForm from "../../components/ThreadForm/ThreadForm";

import './ThreadComments.css';

class ThreadComments extends Component {
    componentDidMount() {
        this.props.fetchComments();
    };

    render() {
        if (!this.props.comments) {
            return <div>Loading...</div>
        }

        return (
            <Fragment>
                <ul className="thread-messages">
                    {this.props.comments.map(item => {
                        let image = null;
                        if (item.image && item.image !== "null") {
                            image = <img src={'http://localhost:8000/uploads/' + item.image} alt="" className="comment-image" />;
                        }

                        return <li key={item.id} className="comment">
                            {image}
                            <div>
                                <h6 className="comment-author">{item.author || 'Anonymous'}</h6>
                                <p className="comment-message">{item.message}</p>
                            </div>
                        </li>
                        })
                    }
                </ul>

                <ThreadForm submit={this.props.publishComment} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        publishComment: (data) => dispatch(publishComment(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadComments);