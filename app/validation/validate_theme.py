import re
from utils.exceptions import InvalidHexError, InvalidHSLError

def validate_hex(hex_val):
    if len(hex_val) != 7:
        raise InvalidHexError

def validate_hsl(hsl_val):
    if not re.match(r'hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)', hsl_val):
        raise InvalidHSLError

def validate_theme_obj(theme_obj):
    for _, css_var in theme_obj.items():
        if css_var[0] == '#':
            validate_hex(css_var)
        else:
            validate_hsl(css_var)
