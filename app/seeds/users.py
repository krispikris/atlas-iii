from app.models import db, User, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo',
        first_name='Demo',
        last_name='User',
        email='demo@aa.io',
        bio='Hello! I am the Demo User.',
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669542855/atlas/Profile%20Photos/01-demo_y97nkk.jpg',
        password='demo')

    kris = User(
        username='kris',
        first_name='Kris',
        last_name='Han',
        email='kris@aa.io',
        bio='Yo! My name is Kris. I am also known as krispikris & thatsludakris',
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669542851/atlas/Profile%20Photos/02-kris_nq0yti.jpg',
        password='kris')

    biggi = User(
        username='biggi',
        first_name='Biggi',
        last_name='Smallz',
        email='biggi@aa.io',
        bio='Hello! My name is Biggi. I like to dance',
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669542857/atlas/Profile%20Photos/03-biggi_dwlicr.jpg',
        password='biggi')

    kenny = User(
        username='kenny',
        first_name='Kenny',
        last_name='Kreates',
        email='kenny@aa.io',
        bio='Yo! I am Kenny Kreates.',
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669542862/atlas/Profile%20Photos/04-kenny_h2vz5g.jpg',
        password='kenny')

    bruce = User(
        username='bewater',
        first_name='Bruce',
        last_name='Lee',
        email='bruce@aa.io',
        bio='Empty your mind. Be formless, shapeless, like water. Now water can flow or it can crash. Be water, my friend.',
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669542837/atlas/Profile%20Photos/05-bruce_cgyegg.jpg',
        password='demo')

    jackie = User(
        username='jackie',
        first_name='Jackie',
        last_name='Chan',
        email='jackie@aa.io',
        bio="I didn't want to be the next Bruce Lee...I wanted to be the first Jackie Chan.",
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669544611/atlas/Profile%20Photos/06-jackie_ozwnmc.jpg',
        password='jackie')

    jeremy = User(
        username='linsanity',
        first_name='Jeremy',
        last_name='Lin',
        email='jeremy@aa.io',
        bio="I'm not here to live up to anyone else's exceptations - I'm here to live up to mine.",
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669544611/atlas/Profile%20Photos/07-jeremy_d2in0a.jpg',
        password='jeremy')

    kobe = User(
        username='blackmamba',
        first_name='Kobe',
        last_name='Bryant',
        email='kobe@aa.io',
        bio="I created the Black Mamba. So Kobe has to deal with these issues, all the personal challenges. The Black Mamba steps on the court and does what he does. I'm destroying everybody that steps on the court.",
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669544612/atlas/Profile%20Photos/08-kobe_cq1pmk.jpg',
        password='kobe')

    mj = User(
        username='jumpman',
        first_name='Michael',
        last_name='Jordan',
        email='mj@aa.io',
        bio="I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669544611/atlas/Profile%20Photos/09-jumpman_xzyyfx.jpg',
        password='goat')

    lebron = User(
        username='theking',
        first_name='Lebron',
        last_name='James',
        email='bron@aa.io',
        bio="Success isn't owned. It's leased... And, the rent is due everyday.",
        profile_photo='https://res.cloudinary.com/duvgdb8rd/image/upload/v1669544611/atlas/Profile%20Photos/10-theking_vjqzip.webp',
        password='witness')

    db.session.add(demo)
    db.session.add(kris)
    db.session.add(biggi)
    db.session.add(kenny)
    db.session.add(bruce)
    db.session.add(jackie)
    db.session.add(jeremy)
    db.session.add(kobe)
    db.session.add(mj)
    db.session.add(lebron)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
