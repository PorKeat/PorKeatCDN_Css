# official python 3.12 image
FROM python:3.12-slim

# set the working directory in the container
WORKDIR /app

# install dependencies first before copy contents
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# copy current directory contents to the container
COPY . .

# port that will be run
EXPOSE 3000

# cmd to run app
# CMD ["python", "app.py"]

# running a python web app with Gunicorn in a production environment
CMD ["gunicorn", "app:app"]
