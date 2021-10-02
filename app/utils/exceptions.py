from fastapi.responses import JSONResponse
from fastapi import status

class Error(Exception):
    """Base class for other exceptions"""
    pass

class InvalidHexError(Error):
    """Raised when an invalid hex value is passed"""
    pass

class InvalidHSLError(Error):
    """Raised when an invalid hex value is passed"""
    pass

def handle_exception(e):
    if isinstance(e, InvalidHexError):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'message': 'Invalid hex code'})
    if isinstance(e, InvalidHSLError):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'message': 'Invalid hsl value'})
    return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content={'message': 'Unknown error'})