from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Post, Comment
from ..forms.post_form import PostForm
from ..forms.comment_form import CommentForm

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

# POST ROUTES

# GET | READ
# all posts
@post_routes.route('')
def posts():
    posts = Post.query.all()
    return jsonify({'Posts': [post.to_dict() for post in posts]})

# all posts of current user
@post_routes.route('/current')
@login_required
def posts_by_current_user():
    posts = current_user.posts

    print("THIS IS THE CURRENT USER: ", current_user)
    print("THESE ARE USER POSTS: ", posts)
    return jsonify({'Posts': [post.to_dict() for post in posts]})

# post details by id
@post_routes.route('/<int:id>')
def post_detail(id):
    post = Post.query.get(id)
    # return jsonify(post.to_dict())
    if post:
        return jsonify(post.to_dict())
    return {"message": ["Post could not be found."]}, 404

# CREATE | POST
# create post
@post_routes.route('', methods = ["POST"])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        new_post = Post(
            user_id = current_user.id,
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

# UPDATE | PUT
# update post || DOESN'T WORK
@post_routes.route('/<int:id>', methods = ["PUT"])
@login_required
def update_post(id):
    post = Post.query.get(id)

    print("THIS IS POST VARIABLE: ", post)

    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if not post:
        return {"message": ["Post could not be found."]}, 404

    if current_user.id != post.user_id:
        return "Unauthorized to update this Post.", 401

    if form.validate_on_submit():
        data = form.data

        print("THIS IS FORM.DATA: ", form.data)
        print("THIS IS FORM.TITLE.DATA: ", form.title.data)

        # post.id = id,
        # post.user_id = current_user.id,
        # post.photo = data['photo'],
        # post.title = data['title'],
        # post.location = data['location'],
        # post.description = data['description'],
        # post.tips = data['tips']

        post.photo = form.photo.data,
        post.title = form.title.data,
        post.location = form.location.data,
        post.description = form.description.data,
        post.tips = form.tips.data

        db.session.add(post)
        db.session.commit()
        return jsonify(post.to_dict())
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# DELETE
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

# COMMENT ROUTES

# READ | GET
# get post comments
@post_routes.route('/<int:id>/comments')
def get_post_comments(id):
    post = Post.query.get(id)
    comments = Comment.query.get(post_id == id)

    print("THIS IS comments VARIABLE: ", comments)
    # print("THIS IS comments VARIABLE: ", comments)

    # if not post:
    #     return {"message": ["Post could not be found."]}, 404
    # if not comments:
    #     return {"message": ["Comments could not be found."]}, 404

    # return jsonify(comment.to_dict() for comment in comments)
    return jsonify(post.to_dict())

# CREATE | POST
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
