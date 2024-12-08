# Use the official Python 3.12 image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install dependencies first
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port your app will run on
EXPOSE 3000

# Command to run the application
CMD ["python", "app.py"]
