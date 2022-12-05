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
    comment11 = Comment(
        user_id=1,
        post_id=10,
        comment='I see the pool!'
    )

    comment12 = Comment(
        user_id=2,
        post_id=13,
        comment='You should get sponsored by Vans. Sweet.'
    )

    comment13 = Comment(
        user_id=3,
        post_id=18,
        comment='Great shot!'
    )

    comment14 = Comment(
        user_id=4,
        post_id=1,
        comment='What a view from above.'
    )

    comment15 = Comment(
        user_id=5,
        post_id=21,
        comment="amazing photo!"
    )

    comment16 = Comment(
        user_id=3,
        post_id=1,
        comment='How did you get in there?!'
    )

    comment17 = Comment(
        user_id=2,
        post_id=4,
        comment='One of my favorite spots in the city of Angels!'
    )

    comment18 = Comment(
        user_id=8,
        post_id=17,
        comment='Great shot!'
    )

    comment19 = Comment(
        user_id=9,
        post_id=22,
        comment=':D'
    )

    comment20 = Comment(
        user_id=10,
        post_id=16,
        comment='The contrast of colors is nice!'
    )
    comment21 = Comment(
        user_id=1,
        post_id=11,
        comment='I see the pool!'
    )

    comment22 = Comment(
        user_id=2,
        post_id=4,
        comment='You should get sponsored by Vans. Sweet.'
    )

    comment23 = Comment(
        user_id=3,
        post_id=24,
        comment='I need to go!'
    )

    comment24 = Comment(
        user_id=4,
        post_id=17,
        comment='What a view from above.'
    )

    comment25 = Comment(
        user_id=5,
        post_id=14,
        comment="Great shot!"
    )

    comment26 = Comment(
        user_id=6,
        post_id=15,
        comment='How did you get in there?!'
    )

    comment27 = Comment(
        user_id=7,
        post_id=9,
        comment='One of my favorite spots in the city of Angels!'
    )

    comment28 = Comment(
        user_id=8,
        post_id=13,
        comment='Looks fun'
    )

    comment29 = Comment(
        user_id=9,
        post_id=22,
        comment='Wowwww'
    )

    comment30 = Comment(
        user_id=10,
        post_id=6,
        comment='Was it hard to get there?'
    )
    comment31 = Comment(
        user_id=1,
        post_id=7,
        comment='Looks fun'
    )

    comment32 = Comment(
        user_id=2,
        post_id=23,
        comment='You should get sponsored by Vans. Sweet.'
    )

    comment33 = Comment(
        user_id=3,
        post_id=28,
        comment='The Bean looking clean.'
    )

    comment34 = Comment(
        user_id=4,
        post_id=1,
        comment='Looks fun'
    )

    comment35 = Comment(
        user_id=5,
        post_id=12,
        comment="Was it hard to get there?"
    )

    comment36 = Comment(
        user_id=6,
        post_id=25,
        comment='Looks fun'
    )

    comment37 = Comment(
        user_id=7,
        post_id=14,
        comment='Was it cold?'
    )

    comment38 = Comment(
        user_id=8,
        post_id=23,
        comment='Was it cold?'
    )

    comment39 = Comment(
        user_id=9,
        post_id=22,
        comment='Looks fun'
    )

    comment40 = Comment(
        user_id=10,
        post_id=21,
        comment='Was it hard to get there?'
    )
    comment41 = Comment(
        user_id=1,
        post_id=10,
        comment='crazy view'
    )

    comment42 = Comment(
        user_id=2,
        post_id=14,
        comment='RIP to the Notorious.'
    )

    comment43 = Comment(
        user_id=3,
        post_id=14,
        comment='crazy view'
    )

    comment44 = Comment(
        user_id=4,
        post_id=27,
        comment='What a view from above.'
    )

    comment45 = Comment(
        user_id=5,
        post_id=14,
        comment="Wowwww"
    )

    comment46 = Comment(
        user_id=6,
        post_id=15,
        comment='crazy view'
    )

    comment47 = Comment(
        user_id=7,
        post_id=14,
        comment='O.O'
    )

    comment48 = Comment(
        user_id=8,
        post_id=24,
        comment='Wowwww'
    )

    comment49 = Comment(
        user_id=9,
        post_id=24,
        comment='Cool percpective.'
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
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)
    db.session.add(comment31)
    db.session.add(comment32)
    db.session.add(comment33)
    db.session.add(comment34)
    db.session.add(comment35)
    db.session.add(comment36)
    db.session.add(comment37)
    db.session.add(comment38)
    db.session.add(comment39)
    db.session.add(comment40)
    db.session.add(comment41)
    db.session.add(comment42)
    db.session.add(comment43)
    db.session.add(comment44)
    db.session.add(comment45)
    db.session.add(comment46)
    db.session.add(comment47)
    db.session.add(comment48)
    db.session.add(comment49)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
