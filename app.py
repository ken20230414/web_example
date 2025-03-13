from flask import Flask, render_template, request, jsonify
import torch

import base64
from io import BytesIO





app = Flask(__name__)



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services_page():
    return render_template('services.html')

@app.route('/blogs')
def blogs():
    return render_template('blogs.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/packages')
def packages():
    return render_template('packages.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/team')
def teams():
    return render_template('teams.html')


if __name__ == '__main__':
    app.run(debug=True)