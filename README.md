# Reactive Engine README

Reactive Engine is a fully automated site customization and deployment tool.

## Setup
#### Environment and Python setup
(Recommended) Create a virtual environment and install python requirements for Reactive Engine. Note that only python 3.8+ has been tested.

```zsh
# Create virtual environment
python -m venv reactive-env

# Activate on Unix/MacOS
source reactive-env/bin/activate
# Windows
.\reactive-env\Scripts\activate

# install/update local packages
python -m pip install -r requirements.txt

# deactivate once done working on project
deactivate
```

Note that the requirements file should be updated when new modules are added to the project. 

```zsh
python -m pip freeze > requirements.txt
```

If you pull this project you may also want to update and install any changed modules using the pip command above.
```zsh
python -m pip install -r requirements.txt
```

#### Initialize React
```zsh
cd ./proxy-dashboard

# build project and install npm modules
yarn
```

## Run

The program can be run with `python ./app/main.py`.
Alternatively use the `run_server.sh` script (does not work on Windows).

The React website can be deployed locally by using `yarn run` in the `proxy-dashboard` directory.

## Resources
[Netlify API for Site Deployment](https://docs.netlify.com/api/get-started/#sites)
