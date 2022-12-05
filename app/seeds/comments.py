from app.models import db, Comment, environment, SCHEMA


def seed_comments():
    comment1 = Comment(
        user_id=1,
        post_id=10,
        comment='I see the pool!'
    )

    comment2 = Comment(
        user_id=2,
        post_id=9,
        comment='You should get sponsored by Vans. Sweet.'
    )

    comment3 = Comment(
        user_id=3,
        post_id=8,
        comment='The Bean looking clean.'
    )

    comment4 = Comment(
        user_id=4,
        post_id=7,
        comment='What a view from above.'
    )

    comment5 = Comment(
        user_id=5,
        post_id=6,
        comment="Chicago's architecture on another level."
    )

    comment6 = Comment(
        user_id=6,
        post_id=5,
        comment='How did you get in there?!'
    )

    comment7 = Comment(
        user_id=7,
        post_id=4,
        comment='One of my favorite spots in the city of Angels!'
    )

    comment8 = Comment(
        user_id=8,
        post_id=3,
        comment='Ouch, my back hurts looking at this. lol.'
    )

    comment9 = Comment(
        user_id=9,
        post_id=2,
        comment='Cool percpective.'
    )

    comment10 = Comment(
        user_id=10,
        post_id=1,
        comment='The contrast of colors is nice!'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
