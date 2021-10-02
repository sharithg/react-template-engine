from pydantic import BaseModel

class Theme(BaseModel):
    sidebar_color: str
    bg_color: str
    stroke_color: str
    stroke_light_color: str
    stroke_lighter_color: str
    fill_color: str
    input_color: str
    primary_color: str

class NewSite(BaseModel):
    theme: Theme
    icon_url: str
    id: str