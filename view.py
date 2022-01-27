from flask import Flask, render_template,request,redirect,url_for
from flask_sqlalchemy import SQLAlchemy

app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test.db'
db=SQLAlchemy(app)



class Anime(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    anime = db.Column(db.String(50),nullable=False)
    image = db.Column(db.String(50), nullable=False)

    def __repr__(self):
      return '<Task %r>'%self.id




@app.route('/')
def mainstuff():
    return render_template('index.html')


@app.route('/list',methods=['POST','GET'])
def index():

  if request.method=='POST':
    anime=request.form['anime']
    image=request.form['image']
    newAnime=Anime(anime=anime,image=image)
    try:
      db.session.add(newAnime)
      db.session.commit()
      return redirect('/list')
    except:
      return "No data found"
 
  else:
    animes=Anime.query.all()
    return render_template('list.html',animes=animes)

@app.route('/hello')
def hello():
    return "Hello matthew"

if __name__=="__main__":
    app.run(debug=True)