from django.http import JsonResponse
from django.conf import settings
from .models import UploadedFile
from .serializers import UploadedFileSerializer

ALLOWED_FILE_TYPES = ['pdf', 'docx', 'txt']

def file_upload(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        file_extension = uploaded_file.name.split('.')[-1].lower()
        
        if file_extension not in ALLOWED_FILE_TYPES:
            return JsonResponse({'error': 'Unsupported file type'}, status=400)
        
        # Store the uploaded file
        uploaded_file_obj = UploadedFile.objects.create(file=uploaded_file)
        
        # Extract text content from the file
        text_content = ""
        try:
            if file_extension == 'pdf':
                # Code to extract text from PDF file
                pass
            elif file_extension == 'docx':
                # Code to extract text from DOCX file
                pass
            elif file_extension == 'txt':
                text_content = uploaded_file_obj.file.read().decode('utf-8')
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
        # Update the UploadedFile object with text content
        uploaded_file_obj.text_content = text_content
        uploaded_file_obj.save()
        
        return JsonResponse({'status': 'File uploaded and text content extracted successfully'})
    else:
        return JsonResponse({'error': 'No file found in the request'}, status=400)
