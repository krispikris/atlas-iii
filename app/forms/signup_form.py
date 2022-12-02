from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, URL
from app.models import User


def email_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[
                           DataRequired(), username_exists])
    first_name = StringField('first_name')
    last_name = StringField('last_name')
    email = StringField('email', validators=[DataRequired(), email_exists])
    bio = StringField('bio')
    profile_photo = StringField(
        validators=[URL(require_tld=True, message='Must be a valid URL')]),
    password = StringField('password')
