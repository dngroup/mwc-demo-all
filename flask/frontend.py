from flask import Flask, render_template


global frontend_uri
app = Flask(__name__)

def bootstrap(abox_uri):
    global frontend_uri 
    frontend_uri = abox_uri
    return app


@app.route('/')
def index():
    
    return render_template("index.html", frontend_uri=frontend_uri);

@app.route('/demo.html')
def demo():

    return render_template("demo.html", frontend_uri=frontend_uri);







