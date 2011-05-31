from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
def home(request):
    template_vars = {'greeting': 'Hello World'}
    return render_to_response('page.html', template_vars, context_instance=RequestContext(request))
