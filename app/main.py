from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
import uvicorn
from models import NewSite
import os
from template import generate_css_theme

app = FastAPI()


@app.post("/newSite")
async def root(site: NewSite):
    # JSONResponse(status_code=status.HTTP_102_PROCESSING, content={'message': 'Creating build'})
    theme_dict = site.dict()['theme']
    theme_dict['icon_url'] = site.dict()['icon_url']
    generated_css = generate_css_theme(theme_dict)
    with open("asdasdasdas.js", "w+") as text_file:
        text_file.write(generated_css)
    
    # os.system('cd proxy-dashboard && yarn build')


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, log_level="info", reload=True, debug=True)