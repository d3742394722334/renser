from django.db import models
from ckeditor.fields import RichTextField
from django.template.defaultfilters import slugify

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField(blank=True, null=True)
    slug = models.CharField(max_length=200, blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title + '-')
        return super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title