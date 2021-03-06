#!/env/bin/python
from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
import uvicorn
from models import NewSite
import os
from template import generate_css_theme
import shutil
from distutils.dir_util import copy_tree
from validation.validate_theme import validate_theme_obj
from utils.exceptions import handle_exception

app = FastAPI()

current_dir = os.getcwd()

@app.post("/newSite")
async def root(site: NewSite):
    try:
        # JSONResponse(status_code=status.HTTP_102_PROCESSING, content={'message': 'Creating build'})
        request_dict = site.dict()
        theme_dict = request_dict['theme']

        validate_theme_obj(theme_dict)

        theme_dict['icon_url'] = request_dict['icon_url']
        user_id = request_dict['id']
        theme_filename = f'{user_id}.theme.js'
        generated_css = generate_css_theme(theme_dict, theme_dict['icon_url'])

        # write theme into custom theme file
        with open(theme_filename, "w+") as text_file:
            text_file.write(generated_css)

        # move this theme file into theme.js in the react project
        shutil.move(f'{current_dir}/{theme_filename}', f'{current_dir}/proxy-dashboard/theme.js')

        # build the static files
        os.system('cd proxy-dashboard && yarn build')

        # copy build into custom directory
        copy_tree(f'{current_dir}/proxy-dashboard/build', f'{current_dir}/client-sites/{user_id}')
    except Exception as e:
        return handle_exception(e)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, log_level="info", reload=True, debug=True)