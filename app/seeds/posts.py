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

    post11 = Post(
        user_id=1,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232717/atlas/Post%20-%20Photos/posts-extra/01.15.20_Macau_Day_Exploring-23_ht3qgo.jpg',
        title='Macau Look',
        location='Macau, China',
        description='Look Up.',
        tips='5s | f/2.8 | 500'
    )

    post12 = Post(
        user_id=2,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232731/atlas/Post%20-%20Photos/posts-extra/01.13.20_HK-45_rlhlnr.jpg',
        title='HK Harbour',
        location='Hong Kong, HK',
        description='DTLA at Night.',
        tips='5s | f/2.8 | 200'
    )

    post13 = Post(
        user_id=3,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232743/atlas/Post%20-%20Photos/posts-extra/01.13.20_HK-40_nrdrrf.jpg',
        title='Back Dusk',
        location='Hong Kong, CK',
        description='The Overpass.',
        tips='1/300s | f/2.8 | 2500'
    )

    post14 = Post(
        user_id=4,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232751/atlas/Post%20-%20Photos/posts-extra/05.15.16_Watermark_Tower-35_wyc17t.jpg',
        title='Griffith Observatory',
        location='Los Angeles, CA',
        description='It was all a dream',
        tips='2s | f/2.8 | 100 at the Watermark Tower.'
    )

    post15 = Post(
        user_id=5,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232750/atlas/Post%20-%20Photos/posts-extra/05.15.16_Watermark_Tower-58_c8mf6w.jpg',
        title='Control Tower',
        location='Los Angeles, CA',
        description='Climbing Cranes at Night.',
        tips='1/50s | f/3.2 | 800 at the Watermark Tower'
    )

    post16 = Post(
        user_id=6,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232763/atlas/Post%20-%20Photos/posts-extra/01.15.20_Macau_Day_Exploring-19_zlf2de.jpg',
        title='X marks the spot',
        location='Chicago, IL',
        description='Look up.',
        tips='1/500s | f/4.0 | 500'
    )

    post17 = Post(
        user_id=7,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232755/atlas/Post%20-%20Photos/posts-extra/08.02.21_Coffee_Land_Series-15_y1xtyu.jpg',
        title='Chi-Town',
        location='Santa Cruz, CA',
        description='Shark Fin.',
        tips='1/1000s | f/2.8 | 100'
    )

    post18 = Post(
        user_id=8,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232761/atlas/Post%20-%20Photos/posts-extra/05.20.16_Queen_Mary-3_afr8as.jpg',
        title='The Bean',
        location='Long Beach',
        description='Queen Mary.',
        tips='2s | f/2.8 | 300'
    )

    post19 = Post(
        user_id=9,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232762/atlas/Post%20-%20Photos/posts-extra/01.14.20_Macau_Night_Exploring-3_t65d5k.jpg',
        title='Vans',
        location='Macau, China',
        description='Daggle.',
        tips='1/500 | f/4.0 | 300'
    )

    post20 = Post(
        user_id=1,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232784/atlas/Post%20-%20Photos/posts-extra/13199140_10209594895094987_1157502255_o_s3my8v.jpg',
        title='DTLA',
        location='Los Angeles',
        description='QT',
        tips='1/500 | f/5.6 | 500'
    )

    post21 = Post(
        user_id=2,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232782/atlas/Post%20-%20Photos/posts-extra/08.12.16_Central_Park-7_eyztu7.jpg',
        title='Macau Look',
        location='NY, NY',
        description='Look Up.',
        tips='5s | f/2.8 | 500'
    )

    post22 = Post(
        user_id=3,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232782/atlas/Post%20-%20Photos/posts-extra/08.13.16_Other-6_dp6rjf.jpg',
        title='HK Harbour',
        location='NY, NY',
        description='NY at Night.',
        tips='5s | f/2.8 | 200'
    )

    post23 = Post(
        user_id=3,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232785/atlas/Post%20-%20Photos/posts-extra/09.31.17_Bulma_Bru-13_bopxmk.jpg',
        title='Bru',
        location='Sacramento, CA',
        description='The Overpass.',
        tips='1/300s | f/2.8 | 2500'
    )

    post24 = Post(
        user_id=4,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232811/atlas/Post%20-%20Photos/posts-extra/RU3A9451_1-2_mweltq.jpg',
        title='Griffith Observatory',
        location='Los Angeles, CA',
        description='It was all a dream',
        tips='2s | f/2.8 | 100 at the Broad.'
    )

    post25 = Post(
        user_id=5,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232814/atlas/Post%20-%20Photos/posts-extra/RU3A8329_pc1p1p.jpg',
        title='Control Tower',
        location='Los Angeles, CA',
        description='All the way up',
        tips='1/50s | f/3.2 | 800 at the Watermark Tower'
    )

    post26 = Post(
        user_id=6,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232804/atlas/Post%20-%20Photos/posts-extra/02.03.20_Sena-2_nvbz0w.jpg',
        title='Tokyo Tower',
        location='Chicago, IL',
        description='Look up.',
        tips='1/500s | f/4.0 | 500'
    )

    post27 = Post(
        user_id=7,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232787/atlas/Post%20-%20Photos/posts-extra/IMG_5064_ej4pfp.jpg',
        title='Chi-Town',
        location='Santa Cruz, CA',
        description='Cliff.',
        tips='1/1000s | f/2.8 | 100'
    )

    post28 = Post(
        user_id=8,
        photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1670232703/atlas/Post%20-%20Photos/posts-extra/04.23.18_Battery_Spencer_Quick-8_rsrzfl.jpg',
        title='The Bean',
        location='San Francisco, CA',
        description='Battery Spencer.',
        tips='2s | f/2.8 | 300'
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
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)
    db.session.add(post22)
    db.session.add(post23)
    db.session.add(post24)
    db.session.add(post25)
    db.session.add(post26)
    db.session.add(post27)
    db.session.add(post28)
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")

    db.session.commit()
