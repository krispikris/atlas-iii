from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey

class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    photo = db.Column(db.String(255), nullable=False, unique=True)
    title = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    tips = db.Column(db.String(255), nullable=True)

    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, onupdate=func.now(), default=func.now())

    #relationships
    users = db.relationship("User", back_populates="posts")
    comments = db.relationship("Comment", back_populates="posts")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'photo': self.photo,
            'title': self.title,
            'location': self.location,
            'description': self.description,
            'tips': self.tips,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
