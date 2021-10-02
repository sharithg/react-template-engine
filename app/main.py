from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/newSite")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, log_level="info", reload=True, debug=True)