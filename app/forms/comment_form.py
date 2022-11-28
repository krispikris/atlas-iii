from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError

class CommentForm(FlaskForm):
    # user_id = IntegerField("User", validators=[DataRequired()])
    # post_id = IntegerField("User", validators=[DataRequired()])
    comment = StringField("Comment", validators=[DataRequired()])

class UpdateCommentForm(FlaskForm):
    # user_id = IntegerField("User", validators=[DataRequired()])
    # post_id = IntegerField("User", validators=[DataRequired()])
    comment = StringField("Comment", validators=[DataRequired()])
