import firebase_admin
from firebase_admin import credentials, storage
from google.cloud import storage
from dotenv import load_dotenv
import os
from dataclasses import dataclass

load_dotenv() # Loads the .env file with GOOGLE_APPLICATION_CREDENTIALS

@dataclass
class Theme:
    path: str
    key: str
    bucket: str

    def upload(self) -> None:
        """
        Uploads theme to firebase storage
        """
        storage_client = storage.Client()
        bucket = storage_client.get_bucket(self.bucket)
        blob = bucket.blob(self.key)
        blob.upload_from_filename(self.path)

    def download(self) -> None:
        """
        Downloads theme from firebase storage
        """
        storage_client = storage.Client()
        bucket = storage_client.get_bucket(self.bucket)
        blob = bucket.blob(self.key)
        blob.download_to_filename(self.path)

    @property
    def exists(self) -> bool:
        """
        Checks if theme exists in firebase storage
        """
        storage_client = storage.Client()
        bucket = storage_client.get_bucket(self.bucket)
        blob = bucket.blob(self.key)
        return blob.exists()

if __name__ == '__main__':
    # Example usage
    
    # theme = Theme(os.path.join(os.getcwd(), 'app\\test-data\\theme-local.js'), 'test-theme-3.js', 'reactive-engine')
    # theme.upload()
    # theme.download()
    # theme.exists

    pass