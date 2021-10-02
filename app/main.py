from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
import uvicorn
from models import NewSite
import os
from template import generate_css_theme
import shutil
from distutils.dir_util import copy_tree

app = FastAPI()

current_dir = os.getcwd()

@app.post("/newSite")
async def root(site: NewSite):
    # JSONResponse(status_code=status.HTTP_102_PROCESSING, content={'message': 'Creating build'})
    request_dict = site.dict()
    theme_dict = request_dict['theme']
    theme_dict['icon_url'] = request_dict['icon_url']
    user_id = request_dict['id']
    theme_filename = f'{user_id}.theme.js'
    generated_css = generate_css_theme(theme_dict, theme_dict['icon_url'])
    with open(theme_filename, "w+") as text_file:
        text_file.write(generated_css)
    
    shutil.move(f'{current_dir}/{theme_filename}', f'{current_dir}/proxy-dashboard/theme.js')
    os.system('cd proxy-dashboard && yarn build')
    copy_tree(f'{current_dir}/proxy-dashboard/build', f'{current_dir}/client-sites/{user_id}')

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, log_level="info", reload=True, debug=True)