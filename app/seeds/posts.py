from app.models import db, User, environment, SCHEMA
from ..models.post import Post


def seed_posts():
    post1 = Post(
        user_id=1,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/01-la_i2zf4d.jpg',
        title='Red Light',
        location='Los Angeles, CA',
        description='DTLA at Night.',
        tips='5s | f/2.8 | 500'
    )

    post2 = Post(
        user_id=2,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/02-la_ekiuz6.jpg',
        title='Arches',
        location='Los Angeles, CA',
        description='DTLA at Night.',
        tips='5s | f/2.8 | 200'
    )

    post3 = Post(
        user_id=3,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/03-la_abqdmc.jpg',
        title='Back Breaker',
        location='Los Angeles, CA',
        description='The Overpass.',
        tips='1/300s | f/2.8 | 2500'
    )

    post4 = Post(
        user_id=4,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/04-la_byzund.jpg',
        title='Griffith Observatory',
        location='Los Angeles, CA',
        description='Griffith at Night',
        tips='2s | f/2.8 | 100'
    )

    post5 = Post(
        user_id=5,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/05-la_dazt4a.jpg',
        title='Control Tower',
        location='Los Angeles, CA',
        description='Climbing Cranes at Night.',
        tips='1/50s | f/3.2 | 800'
    )

    post6 = Post(
        user_id=6,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545898/atlas/Post%20-%20Photos/06-chi_xxqumk.jpg',
        title='X marks the spot',
        location='Chicago, IL',
        description='Look up.',
        tips='1/500s | f/4.0 | 500'
    )

    post7 = Post(
        user_id=7,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545899/atlas/Post%20-%20Photos/07-chi_et40fp.jpg',
        title='Chi-Town',
        location='Chicago, IL',
        description='From the top.',
        tips='1/1000s | f/2.8 | 100'
    )

    post8 = Post(
        user_id=8,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545899/atlas/Post%20-%20Photos/08-chi_gli1j5.jpg',
        title='The Bean',
        location='Chicago, IL',
        description='The Bean at night.',
        tips='2s | f/2.8 | 300'
    )

    post9 = Post(
        user_id=9,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545899/atlas/Post%20-%20Photos/09-hk_ejeh43.jpg',
        title='Vans',
        location='Hong Kong, HK',
        description='Daggle.',
        tips='1/500 | f/4.0 | 300'
    )

    post10 = Post(
        user_id=10,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669545899/atlas/Post%20-%20Photos/10-hk_nuxmj2.jpg',
        title='I spy a pool.',
        location='Hong Kong, HK',
        description='HK Instagram takeover',
        tips='1/500 | f/5.6 | 500'
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")

    db.session.commit()
