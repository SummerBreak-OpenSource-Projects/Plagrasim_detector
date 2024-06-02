# api/views.py
from django.http import JsonResponse

ALLOWED_FILE_TYPES = ['pdf', 'docx', 'txt']

def file_upload(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        file_extension = uploaded_file.name.split('.')[-1].lower()
        
        if file_extension not in ALLOWED_FILE_TYPES:
            return JsonResponse({'error': 'Unsupported file type'}, status=400)
        
        # Process the uploaded file
        # Example:
        # with open('path/to/your/directory/' + uploaded_file.name, 'wb+') as destination:
        #     for chunk in uploaded_file.chunks():
        #         destination.write(chunk)
        return JsonResponse({'status': 'File uploaded successfully'})
    else:
        return JsonResponse({'error': 'No file found in the request'}, status=400)
    