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
    return '''    
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dots loading animation</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background: rgb(2, 0, 36);
                    background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(3, 3, 11, 1) 35%, rgba(0, 212, 255, 1) 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: 'Arial', sans-serif;
                    color: white;
                }

                .loader {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                .dot-loading {
                    display: flex;
                    align-items: center;
                }
                h1{
                    margin-right: 3px;
                }

                .dot-loading span {
                    height: 8px;
                    width: 8px;
                    margin: 7px 5px 0 0;
                    border-radius: 50%;
                    background-color: white;
                    animation: loading 1s linear infinite;
                }

                @keyframes loading {
                    0% {
                        transform: translateY(0);
                    }
                    25% {
                        transform: translateY(2px);
                    }
                    50% {
                        transform: translateY(-2px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                span:nth-child(1) {
                    animation-delay: 0.4s;
                }
                span:nth-child(2) {
                    animation-delay: 0.6s;
                }
                span:nth-child(3) {
                    animation-delay: 0.8s;
                }
            </style>
        </head>
        <body>
            <div class="loader">
                <h1>Server is running</h1>
                <div class="dot-loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>  
        </body>
    </html>
    '''




@app.route('/<filename>')
def serve_files(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'js'), filename,mimetype='application/javascript')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)