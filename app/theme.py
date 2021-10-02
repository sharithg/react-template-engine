from pydantic import BaseModel

theme = {"--sidebar-color":"hsl(121.8987341772152,17%,12%)",
         "--bg-color":"hsl(121.8987341772152,17%,10%)",
         "--stroke-color":"hsl(121.8987341772152,17%,16%)",
         "--stroke-light-color":"hsl(121.8987341772152,17%,18%)",
         "--stroke-lighter-color":"hsl(121.8987341772152,17%,20%)",
         "--fill-color":"hsl(121.8987341772152,17%,14%)",
         "--input-color":"hsl(121.8987341772152,17%,14%)",
         "--primary-color":"#9900ef"}

theme_to_var_map = {
    "sidebar_color": "--sidebar-color",
    "bg_color": "--bg-color",
    "stroke_color": "--stroke-color", 
    "stroke_light_color": "--stroke-light-color", 
    "stroke_lighter_color": "--stroke-lighter-color", 
    "fill_color": "--fill-color", 
    "input_color": "--input-color", 
    "primary_color": "--primary-color"
}

theme_params = ["sidebar_color", "bg_color", "stroke_color", "stroke_light_color", "stroke_lighter_color", "fill_color", "input_color", "primary_color"]

