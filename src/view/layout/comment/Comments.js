import React, { Component } from "react";
import '../../style/Comments.css'
class Comments extends Component {
    render() {
        const { data } = this.props;
        const comments = data.comments;


        return (
            <div className="custom-scrollbar-comments">
                {
                comments.map((item) => (
                    <div class="card card-comments">
                        <div class="card-header bg-light"><b>{item.nama}</b></div>
                        <div class="card-footer">{item.date}</div>
                        <div class="card-body">{item.comment}</div>
                    </div>
                ))
                }
            </div>
        )
    }
}
export default Comments;