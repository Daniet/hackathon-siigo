import boto3
from PIL import Image
import io


class FotoFactura:
    def __init__(self, img):
        self.local = img
        self.client = boto3.client('rekognition')
        image = Image.open(local)
        stream = io.BytesIO()
        image.save(stream, format="JPEG")
        image_binary = stream.getvalue()
        self.campos = ('FACTURA', 'NIT', 'Cliente', 'Descripcion', 'Articulo', 'Total',)  # para filtrado

    def __call__(self, ):
        response = client.detect_text(
            Image={'Bytes': image_binary}
        )

        for x in response['TextDetections']:
            print(x['DetectedText'])

    def filtro():




