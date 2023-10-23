from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data

        user = super().save_user(request, user, form, False)
        phone_number = data.get("phone_number")
        fullname = data.get("fullname")

        user.phone_number = phone_number
        user.fullname = fullname

        user.save()
        return user