from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Post, Comment
from ..forms import PostForm, CommentForm

post_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# GET | READ

# all posts
@post_routes.route('/', methods=["GET"])
def posts():
    posts = Post.query().all()
    return jsonify({'Posts': [post.to_dict() for post in posts]})

# all posts of current user
@post_routes.route('/current')
@login_required
def posts_by_current_user():
    posts = current_user.posts
    return jsonify({{'Posts': [post.to_dict(True) for post in posts]}})

# post details by id
@post_routes.route('<int:id>', methods=["GET"])
def post_detail(id):
    post = Post.query.get(id)

    if post:
        return jsonify(post.to_dict(True))
    return {"message": ["Post could not be found."]}, 404

# CREATE | POST

# create post
@post_routes.route('/', methods = ["POST"])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        new_post = Post(
            photo = data['photo'],
            title = data['title'],
            location = data['location'],
            description = data['description'],
            tips = data['tips'],
        )

        db.session.add(new_post)
        db.session.commit()
        return jsonify(new_post.to_dict())
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# update post
@post_routes.route('/<int:id>', methods = ["PUT"])
@login_required
def update_post(id):
    post = Post.query.get(id)
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if not post:
        return {"message": ["Post could not be found."]}, 404

    if form.validate_on_submit:
        data = form.data

        post.photo = data['photo']
        post.title = data['title'],
        post.location = data['location'],
        post.description = data['description'],
        post.tips = data['tips']

        db.session.commit()
        return jsonify(post.to(dict))
    return jsonify("Post Update Failed.")

# delete post
@post_routes.route('/<int:id>', methods = ["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    if not post:
        return {"message": ["Post could not be found."]}, 404

    db.session.delete(post)
    db.session.commit()
    return jsonify("Successfully Deleted.")

# COMMENTS

# create a comment
@post_routes.route('/<int:id>/comments', methods = ["POST"])
@login_required
def create_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        data = form.data

        new_comment = Comment(
            user_id = current_user.id,
            post_id = id,
            comment = data['comment']
        )

        db.session.add(new_comment)
        db.session.commit()
        return jsonify(new_comment.to_dict())
    return jsonify("Failed to Create Comment.")

# update comment
@post_routes.route('/<int:post_id>/comments/<int:comment_id>', methods = ["PUT"])
@login_required
def update_comment(post_id, comment_id):
    comment = Comment.query.get(comment_id)
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if not comment:
        return {"message": ["Comment could not be found."]}, 404

    if form.validate_on_submit:
        data = form.data

        comment.comment = data['comment']

        db.session.commit()
        return jsonify(comment.to_dict())
    return jsonify("Comment Update Failed.")

# delete comment
@post_routes.route('/<int:post_id>/comments/<int:comment_id>', methods=["DELETE"])
@login_required
def delete_comment(post_id, comment_id):
    comment = Comment.query.get(comment_id)

    if not comment:
        return {"message": ["Comment could not be found."]}, 404

    db.session.delete(comment)
    db.session.commit()
    return jsonify("Successfully Deleted.")
