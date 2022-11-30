from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import Comment
from ..forms.comment_form import CommentForm, UpdateCommentForm

comment_routes = Blueprint('comments', __name__)

# all comments of current user
@comment_routes.route('/current')
@login_required
def comments_by_current_user():
    comments = current_user.comments
    return jsonify({'Comments': [comment.to_dict() for comment in comments]})
