from flask import Flask, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Enable CORS for all routes
CORS(app)
 
# get port form env
port = os.getenv('PORT',3000)

@app.route('/')
def index():
    return 'This link is working now !'

@app.route('/<filename>')
def serve_files(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'js'), filename,mimetype='application/javascript')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)