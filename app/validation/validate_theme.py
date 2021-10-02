import re
from utils.exceptions import InvalidHexError, InvalidHSLError

HSL_REGEX = r'hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)'
HEX_REGEX = r'^#(?:[0-9a-fA-F]{3}){1,2}$'

def validate_hex(hex_val):
    if len(hex_val) != 7:
        raise InvalidHexError(f'Invalid hex value {hex_val}')
    if not re.match(HEX_REGEX, hex_val):
        raise InvalidHexError(f'Invalid hex value {hex_val}')

def validate_hsl(hsl_val):
    if not re.match(HSL_REGEX, hsl_val):
        raise InvalidHSLError(f'Invalid HSL value {hsl_val}')

def validate_theme_obj(theme_obj):
    for _, css_var in theme_obj.items():
        if css_var[0] == '#':
            validate_hex(css_var)
        else:
            validate_hsl(css_var)
