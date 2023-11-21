### Create virtual environment

### `python3 -m venv my_env`

### Install pip-compile

### ERROR: Getting requirements to build wheel did not run successfully
```
$ echo "Cython<3" > cython_constraint.txt
$ PIP_CONSTRAINT=cython_constraint.txt pip install "ai-core-sdk[aicore-content]"
```

### Install requirements
```
pip3 install PyJWT
Collecting PyJWT
  Using cached PyJWT-2.8.0-py3-none-any.whl.metadata (4.2 kB)
Using cached PyJWT-2.8.0-py3-none-any.whl (22 kB)
Installing collected packages: PyJWT
Successfully installed PyJWT-2.8.0
```