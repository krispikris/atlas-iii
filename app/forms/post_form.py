from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Regexp


class PostForm(FlaskForm):
    # user_id = IntegerField("User", validators=[DataRequired()])
    photo = StringField('Photo URL', validators=[Regexp(
        '^$|(?:http\:|https\:)?\/\/.*\.(?:png|jpg|jpeg)', message='Please use a valid image URL (https://ex.jpg/jpeg/png)')])
    title = StringField("Title", validators=[DataRequired()])
    location = StringField("Location", validators=[DataRequired()])
    description = StringField("Description")
    tips = StringField("Tips")

# class UpdatePostForm(FlaskForm):
#     photo = StringField("Image URL", validators=[DataRequired()])
#     title = StringField("Title", validators=[DataRequired()])
#     location = StringField("Location", validators=[DataRequired()])
#     description = StringField("Description")
#     tips = StringField("Tips")
