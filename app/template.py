
from theme import theme

def get_theme_string(param, hsl_color):
    css_var = theme[param]
    
    return f'"{css_var}":"{hsl_color}"'

def generate_css_theme(vals, icon_url):
    return 'export const theme = {' + f'''
    "--sidebar-color": "{vals['sidebar_color']}",
    "--bg-color": "{vals['bg_color']}",
    "--stroke-color": "{vals['stroke_color']}",
    "--stroke-light-color": "{vals['stroke_light_color']}",
    "--stroke-lighter-color": "{vals['stroke_lighter_color']}",
    "--fill-color": "{vals['fill_color']}",
    "--input-color": "{vals['input_color']}",
    "--primary-color": "{vals['primary_color']}",
    ''' + ' };' + f'export const iconUrl = "{icon_url}";'