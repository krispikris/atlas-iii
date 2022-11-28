from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Post
from ..forms import PostForm

post_routes = Blueprint('posts', __name__)

# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages

# @post_routes.route('/<int:postId>', methods=["POST"])
# @login_required
# def create_post(postId):
#     """Create a new post"""
#     form = PostForm()
#     post = Post.query.get(postId)
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if post.user_id != current_user.id:
#         return {'errors': "authorization required"}, 403
#     if post and form.validate_on_submit():
#         data = form.data
#         new_post = Post(
#             photo=data['photo'],
#             title=data['title'],
#             location=data['location'],
#             description=data['description'],
#             tips=data['tips'],
#         )

#         db.session.add(new_post)
#         db.session.commit()
