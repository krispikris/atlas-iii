from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError

class PostForm(FlaskForm):
    # user_id = IntegerField("User", validators=[DataRequired()])
    photo = StringField("Image URL", validators=[DataRequired()])
    title = StringField("Title", validators=[DataRequired()])
    location = StringField("Location", validators=[DataRequired()])
    description = StringField("Description")
    tips = StringField("Tips")

class UpdatePostForm(FlaskForm):
    photo = StringField("Image URL", validators=[DataRequired()])
    title = StringField("Title", validators=[DataRequired()])
    location = StringField("Location", validators=[DataRequired()])
    description = StringField("Description")
    tips = StringField("Tips")
