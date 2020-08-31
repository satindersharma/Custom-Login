import django
from sys import argv
import os
from django.utils import timezone
import random
from time import sleep
# from django.contrib.auth.hashers import make_password

# the below line is copied from wsgi file
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CelecUserProject.settings')
django.setup()


def random_data(ne=20, es=3):
    for _ in range(ne):
        data = {
            "date_time": timezone.now(),
            "volt1": random.randrange(0, 301),
            "amp1": random.randrange(0, 101),
            "kw1": round(random.uniform(-1, 2), 2),
            "pf1": round(random.uniform(-1, 2), 3),
            "kvar1": round(random.uniform(-1, 2), 2),
            "kva1": round(random.uniform(-1, 2), 2),
            "clo1": random.randrange(0, 2),
            "rct1": random.randrange(0, 2),
            "volt2": random.randrange(0, 301),
            "amp2": random.randrange(0, 101),
            "kw2": round(random.uniform(-1, 2), 2),
            "pf2": round(random.uniform(-1, 2), 3),
            "kvar2": round(random.uniform(-1, 2), 2),
            "kva2": round(random.uniform(-1, 2), 2),
            "clo2": random.randrange(0, 2),
            "rct2": random.randrange(0, 2),
            "volt3": random.randrange(0, 301),
            "amp3": random.randrange(0, 101),
            "kw3": round(random.uniform(-1, 2), 2),
            "pf3": round(random.uniform(-1, 2), 3),
            "kvar3": round(random.uniform(-1, 2), 2),
            "kva3": round(random.uniform(-1, 2), 2),
            "clo3": random.randrange(0, 2),
            "rct3": random.randrange(0, 2),
            "cap1": random.randrange(0, 2),
            "cap2": random.randrange(0, 2),
            "cap3": random.randrange(0, 2),
            "cap4": random.randrange(0, 2),
            "cap5": random.randrange(0, 2),
            "cap6": random.randrange(0, 2),
            "cap7": random.randrange(0, 2),
            "cap8": random.randrange(0, 2),
            "cap9": random.randrange(0, 2),
            "cap10": random.randrange(0, 2),
            "cap11": random.randrange(0, 2),
            "cap12": random.randrange(0, 2)
        }

        S1902000403.objects.create(**data)
        sleep(es)
    print(f'{ne} new data created successfully')


if __name__ == '__main__':
    from ermapp.models import S1902000403
    print('filling some random data')
    if len(argv) == 1:
        random_data()
    elif len(argv) <= 3:
        # print(argv)
        # when you do python new_data.py 23 here argv[0] is random_post.py, argv[1] is 23
        if len(argv) == 2:
            random_data(ne=int(argv[1]))
        else:
            random_data(ne=int(argv[1]), es=argv[2])
    else:
        random_data()
