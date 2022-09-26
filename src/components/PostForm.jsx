import React, { useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
import { useDispatch } from 'react-redux';

const PostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title,
            body
        }

        //Call Action
        dispatch(createPost(post));
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea type='text' name='body' value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);