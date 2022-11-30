from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Comment
from ..forms.comment_form import UpdateCommentForm

comment_routes = Blueprint('comments', __name__)

# all comments of current user
# @comment_routes.route('/current')
# @login_required
# def comments_by_current_user():
#     comments = Comment.query.get(current_user.id = comment.user_id)
#     return jsonify({'Comments': [comment.to_dict() for comment in comments]})


# update comment
@comment_routes.route('/<int:id>', methods = ["PUT"])
@login_required
def update_comment(id):
    comment = Comment.query.get(id)
    form = UpdateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if not comment:
        return {"message": ["Comment could not be found."]}, 404

    if current_user.id != comment.user_id:
        return "Unauthorized to update this Comment.", 401

    if form.validate_on_submit():
        data = form.data

        comment.comment = data['comment']

        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_dict())

# delete comment
@comment_routes.route('/<int:id>', methods = ["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)

    if not comment:
        return {"message": ["Comment could not be found."]}, 404

    db.session.delete(comment)
    db.session.commit()
    return jsonify("Successfully Deleted.")
