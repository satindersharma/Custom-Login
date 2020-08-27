import django
from sys import argv
import os
from faker import Faker
import random
from users.models import CustomUser
from posts.models import Post
from django.contrib.auth.hashers import make_password

''''
from ermapp.models import S1902000403
from faker import Faker
# f = Faker('en_US')
# f.date_time_this_decade(before_now=True, after_now=False, tzinfo=None)
S1902000403.objects.filter(date_time__year=2020).update(date_time=Faker().date_time_this_century(before_now=True, after_now=False, tzinfo=None))

data = S1902000403.objects.all()

for i in data:
    f = Faker('en_US')
    try:
        i.date_time = f.date_time_this_century(before_now=True, after_now=False, tzinfo=None)
        i.save()
    except:
        pass

'''

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CustomUser.settings')
django.setup()


print("""this python file contain two functions.
        
        random_user(n=6)
        random_post(np=50, u=None)
        
        n = number of random user you want
        np = number of random post
        u = specify the username for which random post you want
        usage eg:
            python manage.py shell
            import fake_data
            fake_data.random_user(n = 20)
            fake_data.random_post(np = 5, u = "Timothy")
        Note: => username is the password <=
        """)


def random_user(n=6):
    p = 1
    gender_choice = ['M', 'F']
    for _ in range(n):
        f = Faker('en_US')
        g = random.choice(gender_choice)
        if g == 'M':
            fn = f.first_name_male()
            ln = f.last_name_male()
        if g == 'F':
            fn = f.first_name_female()
            ln = f.last_name_female()
        dj = f.date_time_this_decade(before_now=True, after_now=False, tzinfo=None)
        # obj = CustomUser.objects.filter(username=fn)
        # if not obj.exists():
        #     CustomUser.objects.create(first_name=fn,
        #                               last_name=ln,
        #                               username=fn,
        #                               gender=g,
        #                               password=make_password(fn),
        #                               date_joined=dj
        #                               )
        #     p += 1
        obj, created = CustomUser.objects.get_or_create(first_name=fn,
                                      last_name=ln,
                                      username=fn,
                                      gender=g,
                                      password=make_password(fn),
                                      date_joined=dj)
        if created:
            p += 1
    print('{} unique users created successfully'.format(p))


def random_post(np=50, u=None):
    f = Faker()
    emotions = ['aggressivity',
                'anger',
                'anticipation',
                'anxiety',
                'apprehension',
                'contempt',
                'curiosity',
                'cynicism',
                'delight',
                'despair',
                'disappointment',
                'disgust',
                'dominance',
                'envy',
                'fatalism',
                'fear',
                'guilt',
                'indifference',
                'joy',
                'love',
                'morbidness',
                'optimism',
                'outrage',
                'pessimism',
                'pride',
                'regret',
                'remorse',
                'sadness',
                'sentimentality',
                'shame',
                'submission',
                'surprise',
                'trust',
                ]
    # if u:
    #     obj = CustomUser.objects.filter(username=u)
    #     if not obj.exists():
    #         return "user with => {} <= username don't exit".format(u)
    #     u = [obj[0]]
    # else:
    #     u = [x for x in CustomUser.objects.all()]
    # for _ in range(np):
    #     Post.objects.create(title=f.sentence(nb_words=random.randrange(6, 10)),
    #                         body=f.text(max_nb_chars=random.randrange(180, 600)),
    #                         feeling_cat=(random.choice(emotions)).upper(),
    #                         created_by=random.choice(u),
    #     )
    # if len(u) == 1:

    #     print('{} posts of user {} created successfully'.format(np, u[0]))
    # else:
    #     print('{} posts created successfully'.format(np))

    obj = CustomUser.objects.get_or_create(username=u)
    u = [obj[0]]
    for _ in range(np):
        obj, created = Post.objects.get_or_create(title=f.sentence(nb_words=random.randrange(6, 10)),
                            body=f.text(max_nb_chars=random.randrange(180, 600)),
                            feeling_cat=(random.choice(emotions)).upper(),
                            created_by=random.choice(u),
        )

    if len(u) == 1:

        print('{} posts of user {} created successfully'.format(np, u[0]))
    else:
        print('{} posts created successfully'.format(np))

