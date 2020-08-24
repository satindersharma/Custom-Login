from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q


class EmailOrUsernameModelBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get(get_user_model().USERNAME_FIELD)
        if username is None or password is None:
            return
        try:
            # user = get_user_model()._default_manager.get_by_natural_key(username)
            user = get_user_model()._default_manager.filter(
                Q(**{get_user_model().USERNAME_FIELD: username}
                  ) | Q(email__iexact=username)
            )
            for usr in user:
                if usr.check_password(password):
                    return usr
        except get_user_model().DoesNotExist:
            # Run the default password hasher once to reduce the timing
            # difference between an existing and a nonexistent user (#20760).
            get_user_model().set_password(password)
        else:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
